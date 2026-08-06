import React, { useEffect, useState } from "react";
import "./Header.css";
import logoNoTextUrl from "../../../assets/logo/logo_no-text.svg";
import logoUrl from "../../../assets/logo/logo.svg";
import { NavLink, useLocation, useNavigate } from "react-router";

// Section anchors that smooth-scroll to a Home section.
const sectionLinks = [
  { id: "visas", label: "Визы" },
  { id: "advantages", label: "Преимущества" },
  { id: "about", label: "О нас" },
  { id: "tours", label: "Туры" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Set to true if scrolled more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth-scroll to a Home section by id. Retries briefly so it also works
  // right after navigating from another page (e.g. Tours), where the section
  // hasn't mounted yet on the first attempt.
  const scrollToSection = (id: string, attempts = 10) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (attempts > 0) {
      window.setTimeout(() => scrollToSection(id, attempts - 1), 50);
    }
  };

  const handleSectionClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (location.pathname !== "/") {
        // Go to Home first; scrollToSection retries until the section renders.
        navigate("/");
      }
      scrollToSection(id);
      setIsMenuOpen(false);
    };

  // Shared link set for both the desktop nav and the mobile dropdown so the
  // two never drift apart. Every link is a section anchor that closes the menu
  // via handleSectionClick.
  const renderNavLinks = () => (
    <>
      {sectionLinks.map(({ id, label }) => (
        <a
          key={id}
          href={`/#${id}`}
          className="header-link"
          onClick={handleSectionClick(id)}
        >
          <span>{label}</span>
        </a>
      ))}
      <a
        href="/#contacts"
        className="header-link"
        onClick={handleSectionClick("contacts")}
      >
        <span>Контакты</span>
      </a>
    </>
  );

  return (
    <header
      className={`fixed left-0 top-0 z-1000 w-full p-4 ${isScrolled && "scrolled-header"} ${isMenuOpen ? "menu-open" : ""}`}
      id="header"
    >
      {/* Contact strip above the nav — desktop only to keep the mobile bar clean */}
      <div className="header-topbar hidden md:flex items-center justify-between gap-5 mx-8">
        <div className="md:flex items-center justify-between gap-5">
          <a href="tel:+375447362807" className="topbar-item">
            <svg
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L8.09 9.41a16 16 0 0 0 6 6l1.24-1.24a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68a2 2 0 0 1 1.72 2.02z" />
            </svg>
            <span>+375 (44) 736-28-07</span>
          </a>
          <span className="topbar-divider" />
          <span className="topbar-item">
            <svg
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>проспект газеты Правды, 1</span>
          </span>
          <span className="topbar-divider" />
          <span className="topbar-item">
            <svg
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Пн–Пт 10:00–19:00 · Сб 11:00–15:00</span>
          </span>
        </div>
        <div className="topbar-socials md:flex mr-0 ml-auto">
          <a
            href="https://t.me/travelmum"
            target="_blank"
            rel="noopener"
            className="topbar-social"
            aria-label="Telegram"
          >
            <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.53 8.15l-1.8 8.53c-.13.6-.5.75-.99.47l-2.75-2.03-1.33 1.27c-.15.15-.27.27-.55.27l.2-2.8 5.1-4.6c.22-.2-.05-.3-.34-.12l-6.3 3.97-2.72-.85c-.59-.18-.6-.59.12-.88l10.63-4.1c.49-.18.92.12.76.87z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/maxxtour.by/"
            target="_blank"
            rel="noopener"
            className="topbar-social"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 0 0-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.71 1.47 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z" />
            </svg>
          </a>
          <a
            href="viber://chat?number=%2B375447362807"
            target="_blank"
            rel="noopener"
            className="topbar-social"
            aria-label="Viber"
          >
            <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
              <path d="M12 2C6.9 2 2.8 6 2.8 11c0 2.4.9 4.6 2.4 6.2l-.9 3.4 3.5-.9c1.4.8 3 1.2 4.4 1.2 5.1 0 9.2-4 9.2-9S17.1 2 12 2zm4.9 12.6c-.2.6-1.2 1.1-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.7-4.4-3.9-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.9-2 .2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.7.7 1.8.1.1.1.3 0 .4-.1.2-.1.3-.3.4l-.3.3c-.1.1-.2.2-.1.4.1.2.6.9 1.2 1.5.8.7 1.5.9 1.7 1 .2.1.3.1.4-.1.1-.1.5-.6.6-.8.1-.2.3-.2.5-.1.2.1 1.3.6 1.5.7.2.1.4.2.4.3.1.1.1.5-.1 1z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mx-8 flex items-center justify-between">
        <NavLink to="/" className="header-logo" aria-label="MaxxTour.by">
          <img
            src={isScrolled ? logoUrl : logoNoTextUrl}
            alt="MaxxTour Logo"
            className="max-w-[150px] md:max-w-[240px]"
          />
        </NavLink>

        <nav className="header-nav hidden md:flex" id="nav">
          {renderNavLinks()}
        </nav>

        <div className="header-actions text-white flex align-center">
          {/* <div className="lang-toggle flex" id="langToggle">
            <button
              className="lang-toggle-btn lang-toggle-btn--active"
              data-set-lang="ru"
            >
              RU
            </button>
            <button className="lang-toggle-btn" data-set-lang="en">
              EN
            </button>
          </div> */}
          <button
            className={`hamburger flex md:hidden ${isMenuOpen ? "open" : ""}`}
            id="hamburger"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav
        className={`mobile-nav items-center flex md:hidden -mx-4 ${isMenuOpen ? "open" : ""}`}
        id="mobile-nav"
      >
        {renderNavLinks()}

        <div className="mobile-nav-contacts flex flex-col gap-4">
          <a href="tel:+375447362807" className="mobile-contact-item">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L8.09 9.41a16 16 0 0 0 6 6l1.24-1.24a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68a2 2 0 0 1 1.72 2.02z" />
            </svg>
            <span>+375 (44) 736-28-07</span>
          </a>
          <span className="mobile-contact-item">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>проспект газеты Правды, 1</span>
          </span>
          <span className="mobile-contact-item">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Пн–Пт 10:00–19:00 · Сб 11:00–15:00</span>
          </span>

          <div className="mobile-nav-socials flex gap-5">
            <a
              href="https://t.me/travelmum"
              target="_blank"
              rel="noopener"
              className="mobile-nav-social"
              aria-label="Telegram"
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.53 8.15l-1.8 8.53c-.13.6-.5.75-.99.47l-2.75-2.03-1.33 1.27c-.15.15-.27.27-.55.27l.2-2.8 5.1-4.6c.22-.2-.05-.3-.34-.12l-6.3 3.97-2.72-.85c-.59-.18-.6-.59.12-.88l10.63-4.1c.49-.18.92.12.76.87z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/maxxtour.by/"
              target="_blank"
              rel="noopener"
              className="mobile-nav-social"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="currentColor"
              >
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 0 0-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.71 1.47 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z" />
              </svg>
            </a>
            <a
              href="viber://chat?number=%2B375447362807"
              target="_blank"
              rel="noopener"
              className="mobile-nav-social"
              aria-label="Viber"
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="currentColor"
              >
                <path d="M12 2C6.9 2 2.8 6 2.8 11c0 2.4.9 4.6 2.4 6.2l-.9 3.4 3.5-.9c1.4.8 3 1.2 4.4 1.2 5.1 0 9.2-4 9.2-9S17.1 2 12 2zm4.9 12.6c-.2.6-1.2 1.1-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.7-4.4-3.9-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.9-2 .2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.7.7 1.8.1.1.1.3 0 .4-.1.2-.1.3-.3.4l-.3.3c-.1.1-.2.2-.1.4.1.2.6.9 1.2 1.5.8.7 1.5.9 1.7 1 .2.1.3.1.4-.1.1-.1.5-.6.6-.8.1-.2.3-.2.5-.1.2.1 1.3.6 1.5.7.2.1.4.2.4.3.1.1.1.5-.1 1z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
