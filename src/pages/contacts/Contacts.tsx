import React from "react";
import "./Contacts.css";

const Contacts: React.FC = () => {
  return (
    <section className="contacts-container" id="contacts">
      <div className="container container-padded">
        <div className="contacts-header items-center text-center mb-12">
          <h2>Свяжитесь с нами</h2>
          <p>
            Напишите нам в любой удобный мессенджер — ответим в течение 10
            минут!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          <a
            href="https://t.me/+7ebtUuFf5XhjMTIy"
            target="_blank"
            rel="noopener"
            className="messenger-btn messenger-btn--telegram"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.53 8.15l-1.8 8.53c-.13.6-.5.75-.99.47l-2.75-2.03-1.33 1.27c-.15.15-.27.27-.55.27l.2-2.8 5.1-4.6c.22-.2-.05-.3-.34-.12l-6.3 3.97-2.72-.85c-.59-.18-.6-.59.12-.88l10.63-4.1c.49-.18.92.12.76.87z" />
            </svg>
            Telegram
          </a>
          <a
            href="https://www.instagram.com/maxxtour.by/"
            target="_blank"
            rel="noopener"
            className="messenger-btn messenger-btn--instagram"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 0 0-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.71 1.47 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z" />
            </svg>
            Instagram
          </a>
          <a
            href="viber://chat?number=%2B375447362807"
            target="_blank"
            rel="noopener"
            className="messenger-btn messenger-btn--viber"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.03 2 10.88c0 2.14.93 4.07 2.47 5.58V22l4.9-2.56c.85.23 1.73.35 2.63.35 5.52 0 10-4.03 10-8.88C22 6.03 17.52 2 12 2z"
                fill="none"
                stroke="white"
                stroke-width="1.8"
                stroke-linejoin="round"
              />

              <path
                d="M9.5 8.5c.2-.2.5-.2.7 0l1.2 1.2c.2.2.2.5 0 .7l-.6.6c.5 1 1.3 1.8 2.3 2.3l.6-.6c.2-.2.5-.2.7 0l1.2 1.2c.2.2.2.5 0 .7l-.6.6c-.3.3-.8.4-1.2.2-2.2-1-4-2.8-5-5-.2-.4-.1-.9.2-1.2l.5-.5z"
                fill="white"
              />

              <path
                d="M14.5 7.5c1 .3 1.8 1.1 2.1 2.1M14.5 5.5c1.7.4 3 1.7 3.4 3.4"
                stroke="white"
                stroke-width="1.4"
                stroke-linecap="round"
                fill="none"
              />
            </svg>
            Viber
          </a>
        </div>

        <section className="flex flex-wrap justify-evenly items-center gap-12">
          <div className="flex flex-col gap-6 max-w-md">
            <div className="flex align-center gap-4">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="#E30613"
                stroke-width="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L8.09 9.41a16 16 0 0 0 6 6l1.24-1.24a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68a2 2 0 0 1 1.72 2.02z" />
              </svg>
              <a href="tel:+375447362807">+375 (44) 736-28-07</a>
            </div>
            <div className="flex align-center gap-4">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="#E30613"
                stroke-width="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:nataliasikorskaya@maxxtour.by">
                nataliasikorskaya@maxxtour.by
              </a>
            </div>
            <div className="flex align-center gap-4">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="#E30613"
                stroke-width="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>
                <span>
                  проспект газеты Правды, 1<br />
                  <small>(вход через магазин "Семь Пятниц")</small>
                </span>
              </span>
            </div>
            <div className="flex align-center gap-4">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="#E30613"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>
                <span>
                  Пн–Пт: 10:00–19:00
                  <br />
                  Сб: 11:00–15:00
                </span>
              </span>
            </div>
          </div>

          <div className="w-full max-w-[450px]">
            <iframe
              title="MaxxTour на карте"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.4023656535132!2d27.484806777059337!3d53.8712743724462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd075cfcb935b%3A0x5661d0abd7aa6f18!2spraspiekt%20Haziety%20Pra%C5%ADda%201%2C%20Minsk%2C%20Minskaja%20voblas%C4%87%20220089%2C%20Belarus!5e0!3m2!1sen!2sus!4v1776207467930!5m2!1sen!2sus"
              loading="lazy"
              className="w-full aspect-[3/2] rounded-xl shadow-lg"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contacts;
