import React from "react";
import "./About.css";
import aboutUsUrl from "../../assets/images/about-us.jpg";

const About: React.FC = () => {
  return (
    <div className="container-wrapper">
      <section
        className="about-container container container-padded"
        id="about"
      >
        <h2 className="text-center mb-12">О компании</h2>
        <section className="about-header flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-24 items-center md:items-stretch text-center md:text-left max-w-5xl mx-auto">
          <div className="shrink-0 w-[200px] sm:w-[240px] md:w-[260px] lg:w-[300px] relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src={aboutUsUrl}
              alt="Команда MaxxTour"
              className="w-full h-auto md:absolute md:inset-0 md:h-full md:w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div>
              <p className="about-text mb-2">
                <span>
                  <strong>MaxxTour</strong> — это семейное турагентство в
                  Минске, основанное на любви к путешествиям и заботе о каждом
                  клиенте. Мы верим, что каждое путешествие должно быть
                  особенным.
                </span>
              </p>
              <p className="about-text mb-2">
                <span>
                  Мы не просто продаём туры — мы помогаем создавать незабываемые
                  воспоминания. Индивидуальный подход, честные цены и поддержка
                  на каждом этапе — от первой консультации до возвращения домой.
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
    </div>
  );
};

export default About;
