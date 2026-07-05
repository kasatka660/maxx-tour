import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./Advantages.css";

interface Advantage {
  icon: IconProp;
  title: string;
  text: string;
}

// TODO: cards 2–4 ещё placeholder — ждём контент от пользователя.
const advantages: Advantage[] = [
  {
    icon: "heart",
    title: "Личный подход",
    text: "Каждый клиент для нас — как член семьи. Подберём тур с учётом всех ваших пожеланий.",
  },
  {
    icon: "shield-halved",
    title: "Надёжность",
    text: "Работаем с проверенными туроператорами и гарантируем качество каждого тура.",
  },
  {
    icon: "headset",
    title: "Поддержка 24/7",
    text: "От первой консультации до возвращения домой.",
  },
];

const Advantages: React.FC = () => {
  return (
    <section className="advantages-container" id="advantages">
      <div className="container container-padded">
        <div className="advantages-header items-center text-center mb-12">
          <h2>Почему выбирают нас</h2>
        </div>

        <div className="advantages-grid">
          {advantages.map((item) => (
            <div className="advantage-card" key={item.title}>
              <span className="advantage-icon" aria-hidden="true">
                <FontAwesomeIcon icon={item.icon} />
              </span>
              <h3 className="advantage-title">{item.title}</h3>
              <p className="advantage-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
