interface ConsulatationData {
  name: string;
  phone: string;
  comment: string;
  website: string;
}

export const sendConsultation = async ({
  name,
  phone,
  comment,
  website,
}: ConsulatationData) => {
  try {
    const response = await fetch("/api/consultation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, comment, website }),
    });

    if (response.ok) {
      const body = await response.json();
      return body;
    } else {
      const errorBody = await response.json();
      throw new Error(errorBody.error);
    }
  } catch (e) {
    throw e;
  }
};
/**
 * 
if (!response.ok) {
  // The route puts a user-facing Russian message in `error`.
  const body = await response.json().catch(() => null);
  throw new Error(body?.error ?? "Не удалось отправить заявку. Попробуйте ещё раз.");
}

return response.json();
 */
