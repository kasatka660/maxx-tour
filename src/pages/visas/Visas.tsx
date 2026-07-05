import React from "react";
import "./Visas.css";

interface Visa {
  country: string;
  flag: string;
  price: string;
  term: string;
}

// TODO: подставьте реальные цены и сроки.
const visas: Visa[] = [
  { country: "Германия", flag: "🇩🇪", price: "350 руб", term: "от 2 недель" },
  { country: "Франция", flag: "🇫🇷", price: "300 руб", term: "от 2 недель" },
  { country: "Греция", flag: "🇬🇷", price: "250 руб", term: "от 10 дней" },
  { country: "Италия", flag: "🇮🇹", price: "300 руб", term: "от 2 недель" },
  { country: "Испания", flag: "🇪🇸", price: "350 руб", term: "от 3 недель" },
  { country: "Польша", flag: "🇵🇱", price: "250 руб", term: "от 2 недель" },
  { country: "США", flag: "🇺🇸", price: "500 руб", term: "от 1 месяца" },
  {
    country: "Великобритания",
    flag: "🇬🇧",
    price: "500 руб",
    term: "от 3 недель",
  },
  { country: "Болгария", flag: "🇧🇬", price: "250 руб", term: "от 10 дней" },
  { country: "Венгрия", flag: "🇭🇺", price: "300 руб", term: "от 2 недель" },
];

const Visas: React.FC = () => {
  return (
    <section className="visas-container" id="visas">
      <div className="container container-padded">
        <div className="visas-header items-center text-center mb-12">
          <h2>Визы</h2>
          <p>
            Поможем оформить визы в страны Шенгена, США и Великобританию —
            быстро и без хлопот.
          </p>
        </div>

        <div className="visas-grid">
          {visas.map((visa) => (
            <div className="visa-card" key={visa.country}>
              <span className="visa-flag" aria-hidden="true">
                {visa.flag}
              </span>
              <h3 className="visa-country">{visa.country}</h3>
              <p className="visa-price">{visa.price}</p>
              <p className="visa-term">{visa.term}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Visas;
