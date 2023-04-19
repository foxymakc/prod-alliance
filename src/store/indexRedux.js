import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { popupReduser } from "./popupReduser";

const rootReducer = combineReducers({
  popup: popupReduser,
});

export const store = createStore(rootReducer, composeWithDevTools());
