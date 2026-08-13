import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./AdvantageItem.css";

export interface Advantage {
  // Stable English identifier, used as the React list key.
  id: string;
  icon: IconProp;
  title: string;
  text: string;
}

// A single "почему мы" card: icon + title + supporting copy. Laid out by the
// parent `.advantages-card` grid (see Advantages.css).
const AdvantageItem: React.FC<Advantage> = ({ icon, title, text }) => (
  <div className="advantage-item">
    <span className="advantage-icon" aria-hidden="true">
      <FontAwesomeIcon icon={icon} />
    </span>
    <div className="advantage-body">
      <h3 className="advantage-title">{title}</h3>
      <p className="advantage-text">{text}</p>
    </div>
  </div>
);

export default AdvantageItem;
