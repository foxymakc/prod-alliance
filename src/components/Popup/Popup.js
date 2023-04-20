import React from "react";
import "./Popup.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clickCatalogPopupAction,
  clickRequestPopupAction,
} from "../../store/popupReduser";

export default function Popup({ children, open }) {
  const popup = document.querySelector(".popup");
  const popupRedux = useSelector((state) => state.popup);
  const dispatch = useDispatch();
  const clickCatalogPopup = (data) => {
    dispatch(clickCatalogPopupAction(data));
  };
  const clickRequestPopup = (data) => {
    dispatch(clickRequestPopupAction(data));
  };

  function closePopup() {
    setTimeout(() => {
      document.body.style.overflow = "";
      if (popup.scrollTop > 0) {
        popup.scrollTop = 0;
      }
    }, 500)
    if (popupRedux.catalogPopupActive === true) {
      return clickCatalogPopup(false);
    }
    if (popupRedux.requestPopupActive === true) {
      return clickRequestPopup(false);
    }
  }

  return (
    <div className={`popup ${open && "popup_opened"}`} onClick={closePopup}>
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        {children}
        <button type="button" className="popup__close" onClick={closePopup}>
          &#215;
        </button>
      </div>
    </div>
  );
}
