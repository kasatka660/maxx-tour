import React, { useEffect, useState } from "react";
import "./Header.css";
import logoNoTextUrl from "../../../assets/logo/logo_no-text.svg";
import logoUrl from "../../../assets/logo/logo.svg";
import { NavLink } from "react-router";
import Topbar from "./topbar/Topbar";
import DesktopNav from "./desktop-nav/DesktopNav";
import MobileNav from "./mobile-nav/MobileNav";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Set to true once scrolled more than 50px.
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-1000 w-full p-4 ${isScrolled && "scrolled-header"} ${isMenuOpen ? "menu-open" : ""}`}
      id="header"
    >
      <Topbar />

      <div className="mx-8 flex items-center justify-between">
        <NavLink to="/" className="header-logo" aria-label="MaxxTour.by">
          <img
            src={isScrolled ? logoUrl : logoNoTextUrl}
            alt="MaxxTour Logo"
            className="max-w-[150px] md:max-w-[240px]"
          />
        </NavLink>

        <DesktopNav />

        <div className="header-actions text-white flex align-center">
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

      <MobileNav isOpen={isMenuOpen} onNavigate={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
