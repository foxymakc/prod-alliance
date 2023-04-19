import React from "react";
import "./Logo.css";
import { listInfoLogo } from "../../utils/consts";

export default function Logo() {
  return (
    <div className="anim logo">
      <div className="logo__img-box">
        <img
          className="logo__img"
          src={listInfoLogo.logo}
          alt="логотип компании"
        />
      </div>
      <p className="logo__text">
        ПРОД
        <span className="logo__text-span">
          <br />
        </span>{" "}
        АЛЬЯНС
      </p>
    </div>
  );
}
