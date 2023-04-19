import React from "react";
import "./Picture.css";
import { useDispatch } from "react-redux";
import { clickRequestPopupAction } from "../../store/popupReduser";
import { listInfoPicture } from "../../utils/consts";

export default function Picture() {
  const dispatch = useDispatch();
  const clickRequestPopup = (data) => {
    dispatch(clickRequestPopupAction(data));
  };
  return (
    <section className="picture" id="picture">
      <img
        className="picture__img"
        src={listInfoPicture.img}
        alt={listInfoPicture.altImg}
      />
      <button
        className="anim picture__price-btn"
        onClick={() => clickRequestPopup(true)}
      >
        Запросить
        <br /> прайс-лист
      </button>
      <div className="picture__shadow"></div>
    </section>
  );
}
