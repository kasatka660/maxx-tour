import React from "react";
import "./Advantages.css";
import AdvantageItem from "./advantage-item/AdvantageItem";
import type { Advantage } from "./advantage-item/AdvantageItem";

// TODO: cards 2–4 ещё placeholder — ждём контент от пользователя.
const advantages: Advantage[] = [
  {
    id: "personal",
    icon: "heart",
    title: "Личный подход",
    text: "Каждый клиент для нас — как член семьи. Подберём тур с учётом всех ваших пожеланий.",
  },
  {
    id: "reliability",
    icon: "shield-halved",
    title: "Надёжность",
    text: "Работаем с проверенными туроператорами и гарантируем качество каждого тура.",
  },
  {
    id: "support",
    icon: "headset",
    title: "Поддержка 24/7",
    text: "От первой консультации до возвращения домой.",
  },
];

const Advantages: React.FC = () => {
  return (
    <section className="advantages-container" id="advantages">
      <div className="container">
        <div className="advantages-card">
          {advantages.map((item) => (
            <AdvantageItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
