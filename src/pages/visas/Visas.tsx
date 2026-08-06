import React from "react";
import "./Visas.css";
import VisaCard from "./visa-card/VisaCard";
import { visas } from "./visas-data";

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
            <VisaCard key={visa.country} {...visa} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Visas;
