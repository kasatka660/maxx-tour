import React from "react";
import NavLinks from "../nav/NavLinks";

// Horizontal nav shown from the md breakpoint up.
const DesktopNav: React.FC = () => (
  <nav className="hidden gap-6 md:flex" id="nav">
    <NavLinks />
  </nav>
);

export default DesktopNav;
