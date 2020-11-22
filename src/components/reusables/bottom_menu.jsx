import React from "react";
import { Link } from "react-router-dom";
import styles from "../../res/css modules/bottom_menu.module.scss";
const Bottom_Menu = (props) => {
  const { isActive, onClick } = props;
  return (
    <>
      {" "}
      <div className={styles.menu_items}>
        <Link to="/home">
          <i className="fas fa-home fa-2x"></i>
        </Link>
      </div>
      <div className={styles.menu_items}>
        <div
          onClick={onClick}
          style={{ userSelect: "none" }}
          className={"hamburger hamburger--spin " + (isActive && "is-active")}
          typeof="button"
        >
          <div style={{ userSelect: "none" }} className="hamburger-box">
            <div
              style={{ userSelect: "none" }}
              className="hamburger-inner"
            ></div>
          </div>
        </div>
      </div>
      <div className={styles.menu_items}>
        <i className="fa fa-shopping-cart fa-2x is-active"></i>
      </div>
    </>
  );
};

export default Bottom_Menu;
