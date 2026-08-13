import React from "react";
import "./Topbar.css";
import SocialLinks from "../../../../components/social-icons/SocialIcons";
import {
  PhoneIcon,
  LocationIcon,
  ClockIcon,
} from "../../../../components/contact-icons/ContactIcons";

// Thin contact strip above the main nav row — desktop only, so the mobile
// header stays clean (the same info lives in the mobile menu instead).
const Topbar: React.FC = () => (
  <div className="header-topbar hidden md:flex items-center justify-between gap-5 mx-8">
    <div className="md:flex items-center justify-between gap-5">
      <a href="tel:+375447362807" className="topbar-item">
        <PhoneIcon size={15} />
        <span>+375 (44) 736-28-07</span>
      </a>
      <span className="topbar-divider" />
      <span className="topbar-item">
        <LocationIcon size={15} />
        <span>проспект газеты Правды, 1</span>
      </span>
      <span className="topbar-divider" />
      <span className="topbar-item">
        <ClockIcon size={15} />
        <span>Пн–Пт 10:00–19:00 · Сб 11:00–15:00</span>
      </span>
    </div>
    <div className="topbar-socials md:flex mr-0 ml-auto">
      <SocialLinks size={17} linkClassName="topbar-social" />
    </div>
  </div>
);

export default Topbar;
