import { NextResponse } from "next/server";

// The only server-side code in the app: takes the consultation form payload and
// forwards it to the agency's Telegram chat via the Bot API. Nothing is stored.
//
// Required env vars (server-side only — never NEXT_PUBLIC_, the token must not
// reach the browser):
//   TELEGRAM_BOT_TOKEN  from @BotFather
//   TELEGRAM_CHAT_ID    the chat/group/channel the bot posts into

const MAX_LENGTHS = { name: 100, phone: 40, comment: 2000 } as const;

// Telegram parses our message as HTML, so user-supplied text must be escaped or
// a stray `<` silently drops the rest of the message.
const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

interface ConsultationPayload {
  name?: unknown;
  phone?: unknown;
  comment?: unknown;
  // Honeypot: a field hidden from humans. Bots fill every input they find.
  website?: unknown;
}

const asTrimmedString = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error(
      "TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID are not set — dropping submission.",
    );
    return NextResponse.json(
      { error: "Форма временно недоступна. Позвоните нам, пожалуйста." },
      { status: 503 },
    );
  }

  let payload: ConsultationPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Некорректный запрос." },
      { status: 400 },
    );
  }

  // Silently accept honeypot hits so bots get no signal that they were caught.
  if (asTrimmedString(payload.website, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = asTrimmedString(payload.name, MAX_LENGTHS.name);
  const phone = asTrimmedString(payload.phone, MAX_LENGTHS.phone);
  const comment = asTrimmedString(payload.comment, MAX_LENGTHS.comment);

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Укажите, пожалуйста, имя и телефон." },
      { status: 400 },
    );
  }

  // Needs at least a few digits to be a callable number.
  if ((phone.match(/\d/g) ?? []).length < 7) {
    return NextResponse.json(
      { error: "Проверьте, пожалуйста, номер телефона." },
      { status: 400 },
    );
  }

  const lines = [
    "<b>Новая заявка на консультацию</b>",
    "",
    `<b>Имя:</b> ${escapeHtml(name)}`,
    `<b>Телефон:</b> ${escapeHtml(phone)}`,
  ];
  if (comment) lines.push(`<b>Комментарий:</b> ${escapeHtml(comment)}`);

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: lines.join("\n"),
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      },
    );

    if (!response.ok) {
      // Log Telegram's reason (bad token, bot not in chat, …) but never leak it.
      console.error("Telegram sendMessage failed:", await response.text());
      return NextResponse.json(
        { error: "Не удалось отправить заявку. Попробуйте ещё раз." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Telegram request threw:", error);
    return NextResponse.json(
      { error: "Не удалось отправить заявку. Попробуйте ещё раз." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
