import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className="header" id="header">
      <div className="header__container">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
