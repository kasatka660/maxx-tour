import Hero from "../sections/hero/Hero";
import Advantages from "../sections/advantages/Advantages";
import Visas from "../sections/visas/Visas";
import About from "../sections/about/About";
import Contacts from "../sections/contacts/Contacts";

// The landing page: About, Visas and Contacts are sections here, not routes.
export default function Home() {
  return (
    <div>
      <Hero />
      <Advantages />
      <Visas />
      <About />
      <Contacts />
    </div>
  );
}
