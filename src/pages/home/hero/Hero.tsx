import React, { useContext } from "react";
import "./Hero.css";
import { ConsultationModalContext } from "../../../utils/context/consultation-modal";

const Hero: React.FC = () => {
  const modalContext = useContext(ConsultationModalContext);

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content z-1 text-left max-w-2xl mr-auto px-4">
        <h1 className="hero-title">
          <span className="hero-title__rest">Откройте мир вместе с </span>
          <span className="hero-title__brand">Maxx Tour</span>
        </h1>
        <p className="hero-subtitle">
          Семейное турагентство в Минске. Подберём идеальный тур для вас и вашей
          семьи — с заботой и вниманием к каждой детали.
        </p>
        <button className="hero-cta" onClick={modalContext.open}>
          Получить консультацию
        </button>
      </div>
    </section>
  );
};

export default Hero;
