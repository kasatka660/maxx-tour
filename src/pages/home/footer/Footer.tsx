import React from "react";
import "./Footer.css";
import SocialLinks from "../../../components/social-icons/SocialIcons";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container flex flex-col md:flex-row justify-between">
        <div>
          <div className="flex flex-col mb-6">
            <span>Реквизиты: ИП Макстур</span>
            <span>Р/с: BY11 ALFA 1111 1111 1111 1111 0000 БИК: ALFABYXXX</span>
            <span>Адрес: 220116, г. Минск, пр. газеты Правды, 1</span>
          </div>
          <div className="md:block hidden">
            <span className="text-sm">
              &copy; {new Date().getFullYear()} MaxxTour.by - Семейное
              турагентство в Минске
            </span>
          </div>
        </div>

        <div className="flex flex-col text-sm gap-4">
          <div className="flex flex-col">
            <a
              href={`${import.meta.env.BASE_URL}docs/dogovor-oferty.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Договор оферты
            </a>
            <a
              href={`${import.meta.env.BASE_URL}docs/politika-konfidencialnosti.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Политика конфиденциальности
            </a>
            <a
              href={`${import.meta.env.BASE_URL}docs/politika-cookie.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Политика обработки файлов cookie
            </a>
          </div>

          <div className="footer-socials flex gap-4 items-center">
            <SocialLinks />

            <button
              className="footer-top ml-auto"
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

          <div className="md:hidden">
            <span className="text-sm">
              &copy; {new Date().getFullYear()} MaxxTour.by - Семейное
              турагентство в Минске
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
