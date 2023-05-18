import React, { useState } from "react";
import "./RequestPopup.css";
import Popup from "../Popup/Popup";
import Input from "../Input/Input";
import { useSelector, useDispatch } from "react-redux";
import useValidation from "../../utils/hooks/useValidation";
import { listInfoRequestPopup } from "../../utils/consts";
import agreement from "../../utils/agreement.docx";
import { clickRequestPopupAction } from "../../store/popupReduser";
import sendPhp from "../../vendor/sendForm/send-form.php";

export default function RequestPopup() {
  const { values, handleChange, errors, isValid, resetForm } = useValidation();
  const [resTrueWindow, setResTrueWindow] = useState(false);
  const [resFalseWindow, setResFalseWindow] = useState(false);
  const popupRedux = useSelector((state) => state.popup);
  const form = document.forms["form-request"];
  const dispatch = useDispatch();
  const clickRequestPopup = (data) => {
    dispatch(clickRequestPopupAction(data));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(form);
    sendData(data).then((res) => {
      if (res.status === 200) {
        setResTrueWindow(true);
        setTimeout(() => {
          setResTrueWindow(false);
          clickRequestPopup(false);
          document.body.style.overflow = "";
        }, 2000);
      } else {
        setResFalseWindow(true);
        setTimeout(() => {
          setResFalseWindow(false);
        }, 2000);
      }
    });
    setTimeout(() => {
      resetForm();
    }, 2000);
  };

  async function sendData(data) {
    return await fetch(sendPhp, {
      method: "POST",
      body: data,
    });
  }

  return (
    <Popup open={popupRedux.requestPopupActive}>
      <form
        className="request-popup__form"
        onSubmit={handleSubmit}
        noValidate
        name="form-request"
      >
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
          <p className="request-popup__text-agreement">
            Нажимая кнопку «Отправить» Вы соглашаетесь на обработку
            предоставленных вами{" "}
            <span>
              <a
                className="request-popup__text-file-agreement"
                href={agreement}
              >
                персональных данных
              </a>
            </span>
            .
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
        {resTrueWindow ? (
          <div className="request-popup__response-container">
            <p className="request-popup__response-simbol">&#128504;</p>
            <p className="request-popup__response-text">
              Ваш запрос успешно отправлен!
            </p>
          </div>
        ) : (
          " "
        )}
        {resFalseWindow ? (
          <div className="request-popup__response-container request-popup__response-container-false">
            <p className="request-popup__response-simbol">&#215;</p>
            <p className="request-popup__response-text">
              Что-то пошло не так, попробуйте снова. При повторении ошибки
              свяжитесь с нами по телефону: +7 (903) 722-18-26 или напишите на
              наш email: Rifor_m@mail.ru
            </p>
          </div>
        ) : (
          ""
        )}
      </form>
    </Popup>
  );
}
