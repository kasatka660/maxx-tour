import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content z-1 text-white text-center max-w-2xl mx-auto px-4">
        <h1 className="hero-title">Откройте мир вместе с Maxx Tour</h1>
        <p className="hero-subtitle">
          Семейное турагентство в Минске. Подберём идеальный тур для вас и вашей
          семьи — с заботой и вниманием к каждой детали.
        </p>
        <button className="hero-cta">Подобрать тур</button>
      </div>
    </section>
  );
};

export default Hero;
