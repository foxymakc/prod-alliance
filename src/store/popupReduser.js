const defaultState = {
  catalogPopupActive: false,
  catalogPopupTitle: "",
  catalogPopupImg: {},
  requestPopupActive: false,
};

const CLICK_CATALOG_POPUP = "CLICK_CATALOG_POPUP";
const REWRITE_CATALOG_POPUP_TITLE = "REWRITE_CATALOG_POPUP_TITLE";
const REWRITE_CATALOG_POPUP_IMG = "REWRITE_CATALOG_POPUP_IMG";
const CLICK_REQUEST_POPUP = "CLICK_REQUEST_POPUP";

export const popupReduser = (state = defaultState, action) => {
  switch (action.type) {
    case CLICK_CATALOG_POPUP:
      return { ...state, catalogPopupActive: action.payload };
    case REWRITE_CATALOG_POPUP_TITLE:
      return { ...state, catalogPopupTitle: action.payload };
    case REWRITE_CATALOG_POPUP_IMG:
      return { ...state, catalogPopupImg: action.payload };
    case CLICK_REQUEST_POPUP:
      return { ...state, requestPopupActive: action.payload };
    default:
      return state;
  }
};

export const clickCatalogPopupAction = (payload) => ({
  type: CLICK_CATALOG_POPUP,
  payload,
});
export const rewriteCatalogPopupTitleAction = (payload) => ({
  type: REWRITE_CATALOG_POPUP_TITLE,
  payload,
});
export const rewriteCatalogPopupImgAction = (payload) => ({
  type: REWRITE_CATALOG_POPUP_IMG,
  payload,
});
export const clickRequestPopupAction = (payload) => ({
  type: CLICK_REQUEST_POPUP,
  payload,
});
