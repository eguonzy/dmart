import { combineReducers } from "redux";
import entities from "./entities";
import cart from "./cart";
import account from "./account";
import itemCategory from "./itemCategory";
import loader from "./loader";
import categoryMenu from "./categorymenu";
import alert from "./alert";
import preview from "./preview";
import items from "./items";
import user from "./user";
export default combineReducers({
  entities,
  cart,
  account,
  itemCategory,
  loader,
  categoryMenu,
  alert,
  preview,
  items,
  user,
});
