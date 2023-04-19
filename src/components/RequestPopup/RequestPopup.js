import React, { useEffect } from "react";
import "./RequestPopup.css";
import Popup from "../Popup/Popup";
import Input from "../Input/Input";
import { useSelector } from "react-redux";
import useValidation from "../../utils/hooks/useValidation";
import { listInfoRequestPopup } from "../../utils/consts";

export default function RequestPopup() {
  const { values, handleChange, errors, isValid, resetForm } = useValidation();
  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const popupRedux = useSelector((state) => state.popup);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values.name, values.email);
    //   props.handleRegister(values.name, values.email, values.telephone);
  };

  return (
    <Popup open={popupRedux.requestPopupActive}>
      <form className="request-popup__form" onSubmit={handleSubmit} noValidate>
        <h2 className="request-popup__title">
          Отправьте
          <br /> заявку
          <br />
          на прайс-лист
        </h2>
        <p className="request-popup__subtitle">
          {listInfoRequestPopup.requestPopupSubtitle}
        </p>
        <fieldset className="request-popup__fieldset">
          <Input
            typeInput="text"
            id="name"
            name="name"
            maxLength="30"
            minLength="2"
            textLabelInput="Имя *"
            pattern="[A-Za-zА-ЯЁа-яё -]+"
            errorId={"name-error"}
            required
            errorText={errors.name}
            value={values.name || ""}
            onChange={handleChange}
          />
          <Input
            typeInput="email"
            id="email"
            name="email"
            maxLength="40"
            minLength="2"
            textLabelInput="Email *"
            pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
            errorId={"email-error"}
            required
            errorText={errors.email}
            value={values.email || ""}
            onChange={handleChange}
          />
          <p className="request-popup__text">
            {listInfoRequestPopup.requestPopupText}
          </p>
          <button
            type="submit"
            className={
              !isValid
                ? "request-popup__btn-submit"
                : "request-popup__btn-submit request-popup__btn-submit-active"
            }
            disabled={!isValid}
          >
            Отправить
          </button>
        </fieldset>
      </form>
    </Popup>
  );
}
