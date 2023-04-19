import React from "react";
import "./Navigation.css";
import { listInfoNavigation } from "../../utils/consts";

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {listInfoNavigation.navListName.map((elm) => (
          <li className="navigation__item" key={elm.name}>
            <a className="navigation__link" href={elm.src}>
              {elm.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
