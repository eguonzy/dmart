import React from "react";
import { Route } from "react-router-dom";
import styles_c from "../../res/css modules/category_menu.module.scss";
import styles from "../../res/css modules/bottom_menu.module.scss";
import BottomMenu from "../reusables/bottom_menu";
import CategoryMenu from "../home_components/cartegory_menu";
import Home from "../mart_components/mart_homepage";
import ItemsList from "../reusables/item_list";
const Mart_Landing = (props) => {
  const Gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  Gsap.registerPlugin(ScrollTrigger);
  let [isActive, setIsActive] = React.useState(false);
  let [isCategory, setIsCategory] = React.useState(false);
  let [categoryList, setCategoryList] = React.useState([]);
  let con = React.useRef(null);
  let category_ref = React.useRef(null);
  const drug_list = [
    [
      { name: "Amlodipine", price: 60000, company: "Pfizer" },
      { name: "Diazepam", price: 30500, company: "koko" },
      { name: "Paracetamol", price: 34000, company: "M & B" },
      { name: "Amoxicilin", price: 53000, company: "GSK" },
    ],
    [
      { name: "Prednisolone", price: 6000, company: "GSK" },
      { name: "Vitamin C", price: 500, company: "menka" },
      { name: "Augmentin 228", price: 34000, company: "lonka" },
      { name: "Multivite", price: 53000, company: "loma" },
    ],
    [
      { name: "Lonart DS", price: 60000 },
      { name: "Betnovate C", price: 30500 },
      { name: "Levamisole", price: 34000 },
      { name: "Metronidazole", price: 53000 },
    ],
    [
      { name: "Paracetamol", price: 60000, company: "Emzor" },
      { name: "Vitamin C", price: 30500, company: "Emzor" },
      { name: "Zinc", price: 34000, company: "Emzor" },
      { name: "Metronidazole", price: 53000, company: "Emzor" },
    ],
  ];
  const class_list = {
    class: [
      "Anti-infectives",
      "AntiHypertensives",
      "Antidiabetics",
      "AntiHistamins",
      "Antincancer",
      "Vertigo",
      "Alpha-Blockers",
      "AntiDepressants",
      "Antispasmodic",
      "Analgesics",
      "Anathesia",
    ],
    brands: [
      "Emzor",
      "GSK",
      "M & B",
      "Fidson",
      "Orange",
      "Pharmatex",
      "Pablo",
      "Lapaz",
      "Roche",
      "",
    ],
    location: ["Lagos", "Onitcha", "Kano"],
  };
  //controls the click response of category first items like "all"
  const handleCategorySwitch = (category) => {
    if (category === "all") {
      props.history.push({
        pathname: "/items",
        state: Object.keys(class_list),
      });
      handleCategory();
      return;
    }

    setIsCategory(true);
    //shows the items in a category
    setCategoryList(class_list[category]);
  };
  const handleCategory = () => {
    if (isActive) {
      category_ref.current.reverseTl();
      setIsActive(false);
    } else {
      setIsActive(true);
      category_ref.current.reverseTl();
    }
  };
  React.useEffect(() => {
    props.history.push("/home");
  }, [props.history]);
  return (
    <div className={styles.group_parent}>
      <div
        className={styles.header}
        style={{
          color: "#ffffff",
          backgroundColor: "#16b6f5",
          padding: "0.5em",
        }}
      >
        <p style={{ fontSize: "30px" }}>Drug Mart</p>
        <div className={styles.user}>
          <i className="fa fa-user fa-2x"></i>
        </div>
      </div>

      <div className={styles.search_con + " gsapground"}>
        <div style={{ position: "relative", width: "95%", margin: "0 auto" }}>
          <input className={styles.search_bar} type="text" />
          <i className={"fa fa-search " + styles.search_icon}></i>
        </div>
      </div>

      <Route path="/home" component={() => <Home drug_list={drug_list} />} />
      <Route
        path="/items"
        component={() => <ItemsList categoryList={[]} {...props} />}
      />
      <div
        ref={con}
        style={{ top: isActive && "0%" }}
        className={styles_c.category_menu}
      >
        <CategoryMenu
          ref={category_ref}
          list={categoryList}
          switchCategory={{ isCategory, handleCategorySwitch }}
          hideMenu={handleCategory}
        />
      </div>
      <div className={styles.bottom_menu_con}>
        <BottomMenu onClick={handleCategory} isActive={isActive} />
      </div>
    </div>
  );
};

export default Mart_Landing;
