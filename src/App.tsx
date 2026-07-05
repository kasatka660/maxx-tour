import "./App.css";
import { Outlet } from "react-router";
import Footer from "./pages/home/footer/Footer";
import Header from "./pages/home/header/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
