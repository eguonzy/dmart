import React from "react";
import "../../res/css modules/category.scss";

const CategoryMenu = React.forwardRef((props, ref) => {
  const { hideMenu, list, switchCategory } = props;
  const gsap = window.gsap;
  let tl = gsap.timeline({ paused: true });

  React.useEffect(() => {
    let header = document.querySelector(".category_secondary");
    let categories = header.getElementsByClassName("category_item");
    for (let i = 0; i < categories.length; i++) {
      categories[i].addEventListener("click", function () {
        let current = header.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
      });
    }
  }, []);
  const onSelect = async (category) => {
    await switchCategory.handleCategorySwitch(category);

    //animates the menu after selection
    tl.to(".list_con", {
      width: "50%",
      duration: 0.5,
      opacity: 1,
    });
    tl.to(
      ".category_secondary",
      {
        width: "50%",
        duration: 0.5,
      },
      "-=0.5"
    );
    tl.play();
  };
  //reverse the animation
  React.useImperativeHandle(ref, () => ({
    reverseTl() {
      let header = document.querySelector(".category_secondary");
      let categories = header.getElementsByClassName("category_item");
      tl.to(".list_con", {
        width: "10%",
        duration: 0.5,
        opacity: 0,
      });
      tl.to(
        ".category_secondary",
        {
          width: "100%",
          duration: 0.5,
          onComplete() {
            for (let i = 0; i < categories.length; i++) {
              categories[i].className = categories[i].className.replace(
                " active",
                ""
              );
            }
          },
        },
        "-=0.5"
      );
      tl.play();
    },
  }));
  return (
    <div className="category_parent">
      <div onClick={hideMenu} className="category_fake"></div>
      <div className="category_main">
        <div className="list_con">
          {list.map((item, index) => (
            <div key={index + item} className="category_item_con">
              <p className="category_item">
                <span onClick={() => onSelect("all")}>{item}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="category_secondary">
          <div className="category_con">
            <div className="category_item_con">
              <p className="category_item">
                <span onClick={() => onSelect("all")}>All</span>{" "}
              </p>
            </div>
            <div className="category_item_con">
              <p className="category_item">
                <span onClick={() => onSelect("brands")}>Brands</span>{" "}
                <i className="fa fa-caret-right"> </i>
              </p>
            </div>
            <div className="category_item_con">
              <p className="category_item">
                <span onClick={() => onSelect("class")}>Class</span>{" "}
                <i className="fa fa-caret-right"></i>
              </p>
            </div>
            <div className="category_item_con">
              <p className="category_item">
                <span onClick={() => onSelect("location")}>Location</span>{" "}
                <i className="fa fa-caret-right"></i>
              </p>
            </div>
          </div>
          <div className="category_item_con">
            <p className="category_item">
              <span onClick={() => onSelect("promos")}>Promos</span>{" "}
            </p>
          </div>
          <div className="category_item_con">
            <p className="category_item">
              <span onClick={() => onSelect("vendors")}>Vendors</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CategoryMenu;
