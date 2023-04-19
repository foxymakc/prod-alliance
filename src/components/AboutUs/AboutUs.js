import React from "react";
import "./AboutUs.css";
import { listInfoAboutUs } from "../../utils/consts";

export default function AboutUs() {
  return (
    <section className="about-us" id="about-us">
      <div className="anim about-us__text-container">
        <h3 className="about-us__title">{listInfoAboutUs.aboutTitle}</h3>
        <p className="about-us__text">{listInfoAboutUs.aboutText}</p>
        <ul className="about-us__list-advantages">
          {listInfoAboutUs.listAdvantages.map((elm) => (
            <li className="about-us__item-advantages" key={elm.id}>
              <img
                className="about-us__img-advantages"
                src={elm.img}
                alt={elm.title + elm.text}
              />
              <p className="about-us__text-advantages">
                {elm.title}{" "}
                <span className="about-us__span-advantages">{elm.text}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="anim about-us__support-box">
        <img
          className="about-us__support-img"
          src={listInfoAboutUs.aboutSupportImg}
          alt="иконка поддержки"
        />
        <div>
          <h4 className="about-us__support-title">
            {listInfoAboutUs.aboutSupportTitle}
          </h4>
          <p className="about-us__support-text">
            {listInfoAboutUs.aboutSupportText}
          </p>
        </div>
      </div>
    </section>
  );
}
