import React from "react";

// Embedded Google Map pointing at the MaxxTour office
// (проспект газеты Правды, 1, Minsk).
const Map: React.FC = () => (
  <div className="w-full max-w-[640px]">
    <iframe
      title="MaxxTour на карте"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.4023656535132!2d27.484806777059337!3d53.8712743724462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd075cfcb935b%3A0x5661d0abd7aa6f18!2spraspiekt%20Haziety%20Pra%C5%ADda%201%2C%20Minsk%2C%20Minskaja%20voblas%C4%87%20220089%2C%20Belarus!5e0!3m2!1sen!2sus!4v1776207467930!5m2!1sen!2sus"
      loading="lazy"
      className="w-full aspect-[3/2] rounded-xl shadow-lg"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

export default Map;
