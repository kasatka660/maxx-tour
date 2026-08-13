import React from "react";
import { useLocation, useNavigate } from "react-router";
import "./NavLinks.css";

// Section anchors that smooth-scroll to a Home section.
const sectionLinks = [
  { id: "visas", label: "Визы" },
  { id: "advantages", label: "Преимущества" },
  { id: "about", label: "О нас" },
  { id: "tours", label: "Туры" },
  { id: "contacts", label: "Контакты" },
];

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

interface NavLinksProps {
  // Called after a link is clicked — e.g. to close the mobile menu.
  onNavigate?: () => void;
}

// Shared link set for both the desktop nav and the mobile menu, so the two
// never drift apart.
const NavLinks: React.FC<NavLinksProps> = ({ onNavigate }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (location.pathname !== "/") {
        // Go to Home first; scrollToSection retries until the section renders.
        navigate("/");
      }
      scrollToSection(id);
      onNavigate?.();
    };

  return (
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
    </>
  );
};

export default NavLinks;
