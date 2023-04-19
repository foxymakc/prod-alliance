import React from "react";
import "./Contacts.css";
import { listInfoContacts } from "../../utils/consts";

export default function Contacts() {
  return (
    <section className="anim contacts" id="contacts">
      <div className="contacts__map-box">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac57ed0d645811c9757de259bda3dcf4b1206ff0bf08d485adfbb83d7a1cb0e89&amp;source=constructor"
          title="map"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
      <div className="contacts__container">
        <h3 className="contacts__title">{listInfoContacts.contactsTitle}</h3>
        <ul className="contacts__list">
          {listInfoContacts.listContacts.map((elm) => (
            <li key={elm.id} className="contacts__item">
              <div className="contacts__icon-box">
                <img
                  src={elm.img}
                  alt={`иконка${elm.title}`}
                  className="contacts__icon"
                />
              </div>
              <p className="contacts__item-text">
                {elm.title}
                <br />
                <span className="contacts__item-span">{elm.text}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
