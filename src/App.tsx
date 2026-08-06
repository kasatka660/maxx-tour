import "./App.css";
import { Outlet } from "react-router";
import Footer from "./pages/home/footer/Footer";
import Header from "./pages/home/header/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ConsultationModalProvider } from "./utils/context/consultation-modal";

library.add(fas);

function App() {
  return (
    <ConsultationModalProvider>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </ConsultationModalProvider>
  );
}

export default App;
