import React from "react";
import "./Home.css";
import Hero from "./hero/Hero";
import Contacts from "../contacts/Contacts";
import About from "../about/About";
import Advantages from "../advantages/Advantages";
import Visas from "../visas/Visas";

const Home: React.FC = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Advantages></Advantages>
      <Visas></Visas>
      <Contacts></Contacts>
    </div>
  );
};

export default Home;
