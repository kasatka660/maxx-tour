import React from "react";
import Hero from "./hero/Hero";
import Contacts from "../contacts/Contacts";
import About from "../about/About";
import Advantages from "../advantages/Advantages";
import Visas from "../visas/Visas";

const Home: React.FC = () => {
  return (
    <div>
      <Hero></Hero>
      <Advantages></Advantages>
      <Visas></Visas>

      <About></About>
      {/* <Tours></Tours> */}
      <Contacts></Contacts>
    </div>
  );
};

export default Home;
