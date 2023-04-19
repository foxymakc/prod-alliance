import React from "react";
import "./MobileNavigation.css";
import { listInfoMobileNavigation } from "../../utils/consts";

export default function MobileNavigation() {
  return (
    <nav className="mobile-navigation">
      <ul className="mobile-navigation__list">
        {listInfoMobileNavigation.mobileNavListName.map((elm) => (
          <li className="mobile-navigation__item" key={elm.name}>
            <a className="mobile-navigation__link" href={elm.src}>
              {elm.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
