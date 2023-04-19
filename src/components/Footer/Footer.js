import React from "react";
import "./Footer.css";
import { listInfoFooter } from "../../utils/consts";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <div className="footer__logo">
          <div className="footer__logo-img-box">
            <img
              className="footer__logo-img"
              src={listInfoFooter.footerLogo}
              alt="логотип компании"
            />
          </div>
          <p className="footer__logo-text">{listInfoFooter.footerLogoText}</p>
        </div>
      </div>

      <div className="footer__rigth">
        <p className="footer__rigth-text">{listInfoFooter.resourcesTitle}</p>
        {listInfoFooter.resourcesLinks.map((elm) => (
          <a
            className="footer__link"
            href={elm.href}
            title="иконки"
            key={elm.id}
          >
            {elm.text}
          </a>
        ))}
        <p className="footer__copyright">{listInfoFooter.footerCopyright}</p>
      </div>
    </footer>
  );
}
