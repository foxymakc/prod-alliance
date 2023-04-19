import React from "react";
import "./Main.css";
import Picture from "../Picture/Picture";
import Catalog from "../Catalog/Catalog";
import AboutUs from "../AboutUs/AboutUs";
import Contacts from "../Contacts/Contacts";
import BtnMessage from "../BtnMessage/BtnMessage";
import BtnUp from "../BtnUp/BtnUp";

export default function Main() {
  return (
    <main className="main">
      <Picture />
      <Catalog />
      <AboutUs />
      <Contacts />
      <BtnUp />
      <BtnMessage />
    </main>
  );
}
