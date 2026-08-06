import type { Visa } from "./visa-card/VisaCard";

// TODO: подставьте реальные данные для каждой страны.
// Пока во всех странах продублирована информация Греции — замените по мере
// поступления данных (города подачи, ссылки, сборы и т.д.).
export const visas: Visa[] = [
  {
    country: "Германия",
    flag: "🇩🇪",
    price: "350 руб",
    term: "от 2 недель",
    details: {
      cities: ["Минск", "Брест", "Гродно", "Витебск"],
      submission: "Через визовые центры Беларуси",
      reviewPlace:
        "Консульство в Москве — туда отправляются все документы на рассмотрение",
      reviewTerm: "от 3 недель",
      registrationUrl:
        "https://by-gr-services.gvcworld.eu/login/appointments/ru?lang=ru_RU",
      documentsUrl: "https://by-gr.gvcworld.eu/ru/informaciya-o-vizah-turizm",
      consularFee: "35 €",
      serviceFee: "30 €",
      payment: "Оплата строго в белорусских рублях: наличными или картой",
    },
  },
  {
    country: "Франция",
    flag: "🇫🇷",
    price: "300 руб",
    term: "от 2 недель",
    details: {
      cities: ["Минск", "Брест", "Гродно", "Витебск"],
      submission: "Через визовые центры Беларуси",
      reviewPlace:
        "Консульство в Москве — туда отправляются все документы на рассмотрение",
      reviewTerm: "от 3 недель",
      registrationUrl:
        "https://by-gr-services.gvcworld.eu/login/appointments/ru?lang=ru_RU",
      documentsUrl: "https://by-gr.gvcworld.eu/ru/informaciya-o-vizah-turizm",
      consularFee: "35 €",
      serviceFee: "30 €",
      payment: "Оплата строго в белорусских рублях: наличными или картой",
    },
  },
  {
    country: "Греция",
    flag: "🇬🇷",
    price: "250 руб",
    term: "от 10 дней",
    details: {
      cities: ["Минск", "Брест", "Гродно", "Витебск"],
      submission: "Через визовые центры Беларуси",
      reviewPlace:
        "Консульство в Москве — туда отправляются все документы на рассмотрение",
      reviewTerm: "от 3 недель",
      registrationUrl:
        "https://by-gr-services.gvcworld.eu/login/appointments/ru?lang=ru_RU",
      documentsUrl: "https://by-gr.gvcworld.eu/ru/informaciya-o-vizah-turizm",
      consularFee: "35 €",
      serviceFee: "30 €",
      payment: "Оплата строго в белорусских рублях: наличными или картой",
    },
  },
  {
    country: "Италия",
    flag: "🇮🇹",
    price: "300 руб",
    term: "от 2 недель",
    details: {
      cities: ["Минск", "Брест", "Гродно", "Витебск"],
      submission: "Через визовые центры Беларуси",
      reviewPlace:
        "Консульство в Москве — туда отправляются все документы на рассмотрение",
      reviewTerm: "от 3 недель",
      registrationUrl:
        "https://by-gr-services.gvcworld.eu/login/appointments/ru?lang=ru_RU",
      documentsUrl: "https://by-gr.gvcworld.eu/ru/informaciya-o-vizah-turizm",
      consularFee: "35 €",
      serviceFee: "30 €",
      payment: "Оплата строго в белорусских рублях: наличными или картой",
    },
  },
  {
    country: "Испания",
    flag: "🇪🇸",
    price: "350 руб",
    term: "от 3 недель",
    details: {
      cities: ["Минск", "Брест", "Гродно", "Витебск"],
      submission: "Через визовые центры Беларуси",
      reviewPlace:
        "Консульство в Москве — туда отправляются все документы на рассмотрение",
      reviewTerm: "от 3 недель",
      registrationUrl:
        "https://by-gr-services.gvcworld.eu/login/appointments/ru?lang=ru_RU",
      documentsUrl: "https://by-gr.gvcworld.eu/ru/informaciya-o-vizah-turizm",
      consularFee: "35 €",
      serviceFee: "30 €",
      payment: "Оплата строго в белорусских рублях: наличными или картой",
    },
  },
  {
    country: "Польша",
    flag: "🇵🇱",
    price: "250 руб",
    term: "от 2 недель",
    details: {
      cities: ["Минск", "Брест", "Гродно", "Витебск"],
      submission: "Через визовые центры Беларуси",
      reviewPlace:
        "Консульство в Москве — туда отправляются все документы на рассмотрение",
      reviewTerm: "от 3 недель",
      registrationUrl:
        "https://by-gr-services.gvcworld.eu/login/appointments/ru?lang=ru_RU",
      documentsUrl: "https://by-gr.gvcworld.eu/ru/informaciya-o-vizah-turizm",
      consularFee: "35 €",
      serviceFee: "30 €",
      payment: "Оплата строго в белорусских рублях: наличными или картой",
    },
  },
  {
    country: "США",
    flag: "🇺🇸",
    price: "500 руб",
    term: "от 1 месяца",
    details: {
      cities: ["Минск", "Брест", "Гродно", "Витебск"],
      submission: "Через визовые центры Беларуси",
      reviewPlace:
        "Консульство в Москве — туда отправляются все документы на рассмотрение",
      reviewTerm: "от 3 недель",
      registrationUrl:
        "https://by-gr-services.gvcworld.eu/login/appointments/ru?lang=ru_RU",
      documentsUrl: "https://by-gr.gvcworld.eu/ru/informaciya-o-vizah-turizm",
      consularFee: "35 €",
      serviceFee: "30 €",
      payment: "Оплата строго в белорусских рублях: наличными или картой",
    },
  },
  {
    country: "Великобритания",
    flag: "🇬🇧",
    price: "500 руб",
    term: "от 3 недель",
    details: {
      cities: ["Минск", "Брест", "Гродно", "Витебск"],
      submission: "Через визовые центры Беларуси",
      reviewPlace:
        "Консульство в Москве — туда отправляются все документы на рассмотрение",
      reviewTerm: "от 3 недель",
      registrationUrl:
        "https://by-gr-services.gvcworld.eu/login/appointments/ru?lang=ru_RU",
      documentsUrl: "https://by-gr.gvcworld.eu/ru/informaciya-o-vizah-turizm",
      consularFee: "35 €",
      serviceFee: "30 €",
      payment: "Оплата строго в белорусских рублях: наличными или картой",
    },
  },
  {
    country: "Болгария",
    flag: "🇧🇬",
    price: "250 руб",
    term: "от 10 дней",
    details: {
      cities: ["Минск", "Брест", "Гродно", "Витебск"],
      submission: "Через визовые центры Беларуси",
      reviewPlace:
        "Консульство в Москве — туда отправляются все документы на рассмотрение",
      reviewTerm: "от 3 недель",
      registrationUrl:
        "https://by-gr-services.gvcworld.eu/login/appointments/ru?lang=ru_RU",
      documentsUrl: "https://by-gr.gvcworld.eu/ru/informaciya-o-vizah-turizm",
      consularFee: "35 €",
      serviceFee: "30 €",
      payment: "Оплата строго в белорусских рублях: наличными или картой",
    },
  },
  {
    country: "Венгрия",
    flag: "🇭🇺",
    price: "300 руб",
    term: "от 2 недель",
    details: {
      cities: ["Минск", "Брест", "Гродно", "Витебск"],
      submission: "Через визовые центры Беларуси",
      reviewPlace:
        "Консульство в Москве — туда отправляются все документы на рассмотрение",
      reviewTerm: "от 3 недель",
      registrationUrl:
        "https://by-gr-services.gvcworld.eu/login/appointments/ru?lang=ru_RU",
      documentsUrl: "https://by-gr.gvcworld.eu/ru/informaciya-o-vizah-turizm",
      consularFee: "35 €",
      serviceFee: "30 €",
      payment: "Оплата строго в белорусских рублях: наличными или картой",
    },
  },
];
