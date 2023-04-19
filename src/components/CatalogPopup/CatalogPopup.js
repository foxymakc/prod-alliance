import React from "react";
import "./CatalogPopup.css";
import Popup from "../Popup/Popup";
import { useSelector, useDispatch } from "react-redux";
import {
  clickRequestPopupAction,
  clickCatalogPopupAction,
} from "../../store/popupReduser";
import { listInfoCatalogPopup } from "../../utils/consts";

export default function CatalogPopup() {
  const popupRedux = useSelector((state) => state.popup);
  const dispatch = useDispatch();
  const clickRequestPopup = (data) => {
    dispatch(clickRequestPopupAction(data));
  };
  const clickCatalogPopup = (data) => {
    dispatch(clickCatalogPopupAction(data));
  };

  function clickBtnRequest() {
    clickCatalogPopup(false);
    clickRequestPopup(true);
  }

  return (
    <Popup open={popupRedux.catalogPopupActive}>
      <div className="catalog-popup">
        <h3 className="catalog-popup__title">
          {popupRedux.catalogPopupTitle}
          <br />
          ассортимент
        </h3>
        <img
          src={popupRedux.catalogPopupImg}
          alt="таблица ассортимента"
          className="catalog-popup__img"
        />
        <p className="catalog-popup__text">
          {listInfoCatalogPopup.catalogPopupText}
        </p>
        <button className="catalog-popup__btn" onClick={clickBtnRequest}>
          Запросить прайс-лист
        </button>
      </div>
    </Popup>
  );
}
