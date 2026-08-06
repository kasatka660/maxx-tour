import React, { useState } from "react";
import "./VisaCard.css";
import VisaModal from "../visa-modal/VisaModal";

export interface VisaDetails {
  cities: string[];
  submission: string;
  reviewPlace: string;
  reviewTerm: string;
  registrationUrl: string;
  documentsUrl: string;
  consularFee: string;
  serviceFee: string;
  payment: string;
}

export interface Visa {
  country: string;
  flag: string;
  price: string;
  term: string;
  details?: VisaDetails;
}

const VisaCard: React.FC<Visa> = ({ country, flag, price, term, details }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="visa-card"
      role="button"
      tabIndex={0}
      onClick={() => setIsModalOpen(true)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsModalOpen(true);
        }
      }}
    >
      <span className="visa-flag" aria-hidden="true">
        {flag}
      </span>
      <h3 className="visa-country">{country}</h3>
      <p className="visa-price">{price}</p>
      <p className="visa-term">{term}</p>
      <button
        type="button"
        className="visa-more"
        onClick={() => setIsModalOpen(true)}
      >
        Подробнее
      </button>

      {isModalOpen && (
        <VisaModal
          visa={{ country, flag, price, term, details }}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default VisaCard;
