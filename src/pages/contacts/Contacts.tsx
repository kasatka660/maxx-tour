import React from "react";
import "./Contacts.css";
import { socialLinks } from "../../components/social-icons/SocialIcons";
import {
  PhoneIcon,
  EmailIcon,
  LocationIcon,
  ClockIcon,
} from "../../components/contact-icons/ContactIcons";
import Map from "../../components/map/Map";

const Contacts: React.FC = () => {
  return (
    <section className="contacts-container" id="contacts">
      <div className="container container-padded">
        <div className="contacts-header items-center text-center mb-12">
          <h2>Свяжитесь с нами</h2>
          <p>
            Напишите нам в любой удобный мессенджер — ответим в течение 10
            минут!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {socialLinks.map(({ name, href, label, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener"
              className={`messenger-btn messenger-btn--${name}`}
            >
              <Icon size={24} />
              {label}
            </a>
          ))}
        </div>

        <section className="flex flex-wrap justify-evenly items-center gap-8">
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-4">
              <PhoneIcon size={20} color="var(--red)" />
              <a href="tel:+375447362807">+375 (44) 736-28-07</a>
            </div>
            <div className="flex items-center gap-4">
              <EmailIcon size={20} color="var(--red)" />
              <a href="mailto:nataliasikorskaya@maxxtour.by">
                nataliasikorskaya@maxxtour.by
              </a>
            </div>
            <div className="flex items-center gap-4">
              <LocationIcon size={20} color="var(--red)" />
              <span>
                <span>
                  проспект газеты Правды, 1<br />
                  <small>(вход через магазин "Семь Пятниц")</small>
                </span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <ClockIcon size={20} color="var(--red)" />
              <span>
                <span>
                  Пн–Пт: 10:00–19:00
                  <br />
                  Сб: 11:00–15:00
                </span>
              </span>
            </div>
          </div>

          <Map />
        </section>
      </div>
    </section>
  );
};

export default Contacts;
