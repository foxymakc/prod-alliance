import React from "react";
import "./Catalog.css";
import { listInfoCatalog } from "../../utils/consts";
import { useDispatch } from "react-redux";
import {
  clickCatalogPopupAction,
  rewriteCatalogPopupTitleAction,
  rewriteCatalogPopupImgAction,
} from "../../store/popupReduser";

export default function Catalog() {
  const dispatch = useDispatch();
  const clickCatalogPopup = (data) => {
    dispatch(clickCatalogPopupAction(data));
  };
  const rewriteCatalogPopupTitle = (data) => {
    dispatch(rewriteCatalogPopupTitleAction(data));
  };
  const rewriteCatalogPopupImg = (data) => {
    dispatch(rewriteCatalogPopupImgAction(data));
  };

  function cliclProduct(data) {
    if (data === "Мясо") {
      rewriteCatalogPopupTitle("Мясо");
      rewriteCatalogPopupImg(listInfoCatalog.tableMeat);
      clickCatalogPopup(true);
      return;
    }
    if (data === "Птица") {
      rewriteCatalogPopupTitle("Птица");
      rewriteCatalogPopupImg(listInfoCatalog.tableChicken);
      clickCatalogPopup(true);
      return;
    }
    if (data === "Полуфабрикаты") {
      rewriteCatalogPopupTitle("Полуфабрикаты");
      rewriteCatalogPopupImg(listInfoCatalog.tableDumpings);
      clickCatalogPopup(true);
      return;
    }
  }

  return (
    <section className="catalog">
      <div className="catalog__title-box">
        <h3 className="catalog__title">
          {listInfoCatalog.catalogTitle}
          <span className="catalog__title-span">
            {" "}
            {listInfoCatalog.catalogSpanTitle}
          </span>
        </h3>
        <p className="catalog__title-mobile">
          {listInfoCatalog.catalogSpanTitleMobile}
        </p>
      </div>
      <div className="catalog__container" id="products">
        <ul className="catalog__list">
          {listInfoCatalog.productsListName.map((elm) => (
            <li
              className="anim catalog__item"
              key={elm.name}
              onClick={() => cliclProduct(elm.name)}
            >
              <img
                className="catalog__img"
                src={elm.img}
                alt="изображение продукта"
              />
              <div className="catalog__box-text">
                <p className="catalog__text">{elm.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
