import React from "react";
import "./MobileNav.css";
import NavLinks from "../nav/NavLinks";
import SocialLinks from "../../../../components/social-icons/SocialIcons";
import {
  PhoneIcon,
  LocationIcon,
  ClockIcon,
} from "../../../../components/contact-icons/ContactIcons";

interface MobileNavProps {
  isOpen: boolean;
  // Called when a nav link is tapped, so the header can close the menu.
  onNavigate: () => void;
}

// Full-height mobile menu: section links plus contact info and socials.
const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onNavigate }) => (
  <nav
    className={`mobile-nav items-center flex md:hidden -mx-4 ${isOpen ? "open" : ""}`}
    id="mobile-nav"
  >
    <NavLinks onNavigate={onNavigate} />

    <div className="mobile-nav-contacts flex flex-col gap-4">
      <a href="tel:+375447362807" className="mobile-contact-item">
        <PhoneIcon />
        <span>+375 (44) 736-28-07</span>
      </a>
      <span className="mobile-contact-item">
        <LocationIcon />
        <span>проспект газеты Правды, 1</span>
      </span>
      <span className="mobile-contact-item">
        <ClockIcon />
        <span>Пн–Пт 10:00–19:00 · Сб 11:00–15:00</span>
      </span>

      <div className="mobile-nav-socials flex gap-5">
        <SocialLinks linkClassName="mobile-nav-social" />
      </div>
    </div>
  </nav>
);

export default MobileNav;
