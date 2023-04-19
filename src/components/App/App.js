import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import CatalogPopup from "../CatalogPopup/CatalogPopup";
import RequestPopup from "../RequestPopup/RequestPopup";
import { useObserverLoader } from "../../utils/hooks/useObserverLoader";

export default function App() {
  useObserverLoader();
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <Main />
        <Footer />
        <MobileNavigation />
        <CatalogPopup />
        <RequestPopup />
      </div>
    </div>
  );
}
