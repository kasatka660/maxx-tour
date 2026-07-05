import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container flex justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MaxxTour.by - Семейное турагентство
          в Минске
        </p>
        <div className="footer-socials flex gap-4">
          <a
            href="https://www.instagram.com/maxxtour.by/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 0 0-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.71 1.47 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z"></path>
            </svg>
          </a>
          <a
            href="https://t.me/+7ebtUuFf5XhjMTIy"
            target="_blank"
            rel="noopener"
            aria-label="Telegram"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.53 8.15l-1.8 8.53c-.13.6-.5.75-.99.47l-2.75-2.03-1.33 1.27c-.15.15-.27.27-.55.27l.2-2.8 5.1-4.6c.22-.2-.05-.3-.34-.12l-6.3 3.97-2.72-.85c-.59-.18-.6-.59.12-.88l10.63-4.1c.49-.18.92.12.76.87z"></path>
            </svg>
          </a>
          <a
            href="viber://chat?number=%2B375447362807"
            target="_blank"
            rel="noopener"
            aria-label="Viber"
          >
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path
                d="M12 2C6.48 2 2 6.03 2 10.88c0 2.14.93 4.07 2.47 5.58V22l4.9-2.56c.85.23 1.73.35 2.63.35 5.52 0 10-4.03 10-8.88C22 6.03 17.52 2 12 2z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9.5 8.5c.2-.2.5-.2.7 0l1.2 1.2c.2.2.2.5 0 .7l-.6.6c.5 1 1.3 1.8 2.3 2.3l.6-.6c.2-.2.5-.2.7 0l1.2 1.2c.2.2.2.5 0 .7l-.6.6c-.3.3-.8.4-1.2.2-2.2-1-4-2.8-5-5-.2-.4-.1-.9.2-1.2l.5-.5z"
                fill="currentColor"
              ></path>
              <path
                d="M14.5 7.5c1 .3 1.8 1.1 2.1 2.1M14.5 5.5c1.7.4 3 1.7 3.4 3.4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
              ></path>
            </svg>
          </a>
        </div>
        <button
          className="footer-top"
          id="backToTop"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
