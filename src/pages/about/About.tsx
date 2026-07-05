import React from "react";
import "./About.css";
import logoUrl from "../../assets/images/logo.png";

const About: React.FC = () => {
  return (
    <section className="container container-padded" id="about">
      <section className="about-header flex flex-col md:flex-row gap-8 md:gap-[8rem] items-center text-center md:text-left px-0 md:px-8">
        <div className="shrink-0">
          <img
            src={logoUrl}
            alt="MaxxTour Logo"
            className="w-[180px] sm:w-[220px] md:max-w-[280px] md:w-auto"
          />
        </div>
        <div>
          <h2>О компании</h2>
          <div>
            <p className="about-text mb-2">
              <span>
                <strong>MaxxTour</strong> — это семейное турагентство в Минске,
                основанное на любви к путешествиям и заботе о каждом клиенте. Мы
                верим, что каждое путешествие должно быть особенным.
              </span>
            </p>
            <p className="about-text mb-2">
              <span>
                Мы не просто продаём туры — мы помогаем создавать незабываемые
                воспоминания. Индивидуальный подход, честные цены и поддержка на
                каждом этапе — от первой консультации до возвращения домой.
              </span>
            </p>
            <p className="about-text mb-2">
              <span>
                Наша команда подберёт лучший вариант именно для вас, учитывая
                все ваши пожелания и бюджет. Мы работаем с проверенными
                туроператорами и гарантируем качество каждого тура.
              </span>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
