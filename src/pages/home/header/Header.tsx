import React, { useEffect, useState } from "react";
import "./Header.css";
import logoUrl from "../../../assets/images/logo_transparent.png";
import { NavLink, useLocation, useNavigate } from "react-router";

// Section anchors that smooth-scroll to a Home section; Туры is a real route
// and is rendered separately.
const sectionLinks = [
  { id: "about", label: "О нас" },
  { id: "advantages", label: "Преимущества" },
  { id: "visas", label: "Визы" },
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
  // two never drift apart. `close` collapses the mobile menu after a tap.
  const renderNavLinks = (close: () => void) => (
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
      <NavLink to="/tours" className="header-link" onClick={close}>
        Туры
      </NavLink>
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
      className={`fixed left-0 top-0 z-1000 w-full p-4 ${isScrolled && "scrolled-header"}`}
      id="header"
    >
      <div className="mx-8 flex items-center justify-between">
        <NavLink to="/" className="header-logo" aria-label="MaxxTour.by">
          <img src={logoUrl} alt="MaxxTour Logo" className="max-w-[120px]" />
        </NavLink>

        <nav className="header-nav hidden md:flex" id="nav">
          {renderNavLinks(() => setIsMenuOpen(false))}
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
        className={`mobile-nav flex md:hidden -mx-4 ${isMenuOpen ? "open" : ""}`}
        id="mobile-nav"
      >
        {renderNavLinks(() => setIsMenuOpen(false))}
      </nav>
    </header>
  );
};

export default Header;
