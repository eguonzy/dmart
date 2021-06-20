// eslint-disable-next-line no-unused-vars
import React, { useEffect, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import "../../res/css modules/description_page.scss";
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";
import ph1 from "../../res/images/drug.jpg";
import caret from "../../res/images/down-arrow (1).svg";
import ItemList from "../reusables/featured_list";
const Description = (props) => {
  let [isDesc, setIsDesc] = useState(false);
  let [isDetails, setIsDetails] = useState(true);
  let [isPolicy, setIsPolicy] = useState(false);
  let [desHeight, setDesHeight] = useState(0);
  let [detHeight, setDetHeight] = useState(0);
  let [polHeight, setPolHeight] = useState(0);
  let [cartQuantity, setCartQuantity] = useState(1);
  const desChild = useRef(null); //description box for slide dow
  const desCaret = useRef(null); //for caret transition
  const detChild = useRef(null); //for details transition
  const detCaret = useRef(null); //for details caret transition
  const polChild = useRef(null); //for details caret transition
  const polCaret = useRef(null); //for details caret transition

  useEffect(() => {
    setDetHeight(detChild.current.offsetHeight);
  }, []);
  const handleAddToCart = (form) => {
    // form.preventDefault();
    //  form.target.blur();
    //cartDispatch(increaseQuantity({ id: item.id, quantity: cartQuantity }));
    alert(`Coming Soon`);
  };
  const handleReveal = async (e) => {
    await setDesHeight(desChild.current.offsetHeight);
    await setDetHeight(detChild.current.offsetHeight);
    await setPolHeight(polChild.current.offsetHeight);
    console.log(desHeight, detHeight);
    if (e === "description") {
      if (!isDesc) {
        await setIsDesc(true);
        return;
      } else {
        await setIsDesc(false);
        return;
      }
    }
    if (e === "details") {
      if (!isDetails) {
        await setIsDetails(true);
        return;
      } else {
        await setIsDetails(false);
        return;
      }
    }
    if (e === "policy") {
      if (!isPolicy) {
        await setIsPolicy(true);
        return;
      } else {
        await setIsPolicy(false);
        return;
      }
    }
  };

  const handleCartQuantity = async (e) => {
    if (e.target) {
      if (e.target.value === "") {
        setCartQuantity(0);
        return;
      }
      if (e.target.value[0] === "0") {
        e.target.value = e.target.value[1];
      }
    }

    if (e === "-" && cartQuantity === 0 && !e.target) {
      return;
    }

    e === "+"
      ? await setCartQuantity((prevState) => prevState + 1)
      : e === "-"
      ? await setCartQuantity((prevState) => prevState - 1)
      : await setCartQuantity(parseInt(e.target.value));
  };
  const settings = {
    className: "",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    dots: true,
    arrows: true,
    dotsClass: "slick-dots carousel_dots",
    speed: 500,
    slidesToScroll: 1,
  };
  const cards = [
    {
      brand: "Lonart DS",
      producer: "OKO",
      expiry: "30/04/94",
      image: ph1,
      price: 1400,
      packsize: 6,
      generic: "tab Artemeter 80mg +  Lumefantrine 480mg",
    },
    {
      brand: "Norvasc 10mg",
      producer: "Pfizer",
      expiry: "30/04/94",
      image: ph1,
      packsize: 10,
      price: 5000,
      generic: "tab Amlodipine 10mg",
    },
    {
      brand: "Natrilix 2.5mg",
      producer: "Sanofi",
      expiry: "30/04/94",
      packsize: 10,
      price: 14000,
      image: ph1,
      generic: "tab Indapamide 2.5mg",
    },
    {
      brand: "Panadol Extra",
      producer: "May & Baker",
      expiry: "30/04/94",
      packsize: 10,
      price: 10000,
      image: ph1,
      generic: "Paracetamol 500mg + caffeine",
    },
    {
      brand: "Cocodamol",
      producer: "Emzor",
      expiry: "30/04/94",
      packsize: 10,
      price: 800,
      image: ph1,
      generic: "tab Paracetamol 500mg + Codeine 8mg",
    },
  ];

  return (
    <div className="description_con">
      <div className="carousel_con">
        <Slider {...settings}>
          <div className="carousel">
            <img src={ph1} alt="drug" />
          </div>
          <div className="carousel">
            <img src={ph1} alt="drug" />
          </div>
          <div className="carousel">
            <img src={ph1} alt="drug" />
          </div>
          <div className="carousel">
            <img src={ph1} alt="drug" />
          </div>
        </Slider>
      </div>

      <div className="description_title_parent">
        <div className="description_title_con">
          <p className="description_title">Galvus Met 50mg</p>
          <i style={{ color: "red" }} className="fa fa-heart"></i>
        </div>
        <div className="description_ratings_con">
          <div className="ratings">
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <span>(50)</span>
          </div>{" "}
          <p className="description_orders">100 sold</p>
        </div>
        <p className="vendor">Stanley and sons kiniko</p>
        <div className="qty_price_con ">
          <div className="quantity description_">
            <div className="minus-con" onClick={() => handleCartQuantity("-")}>
              <i className="fa fa-minus"></i>
            </div>
            <input
              inputMode="numeric"
              type="number"
              name="quantity"
              onChange={handleCartQuantity}
              id=""
              className="quantity_input"
              value={cartQuantity}
              min="1"
            />{" "}
            <div className="plus-con" onClick={() => handleCartQuantity("+")}>
              <i className="fa fa-plus"></i>
            </div>
          </div>
          <p className="description_item_price">&#8358;50000</p>
        </div>
      </div>
      <div className="description_cart_con">
        <div onClick={handleAddToCart} className="add_to_cart">
          <p>Add To Cart</p>
        </div>
      </div>
      <div className="description_child_con first">
        <div
          onClick={() => handleReveal("description")}
          className="description_child"
        >
          <p>Description</p>

          <img
            style={{
              transform: isDesc ? "rotateZ(-180deg)" : "rotateZ(0deg)",
            }}
            ref={desCaret}
            src={caret}
            alt="caret"
          />
        </div>
        <div
          style={{
            height: isDesc ? `${desHeight}px` : "0px",
            opacity: isDesc ? 1 : 0,
          }}
          className="description_text_con"
        >
          <p ref={desChild} className="description_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            recusandae est nostrum consequuntur fugiat. Rerum debitis,
            exercitationem excepturi dolorem amet eveniet temporibus repudiandae
            perferendis ex. Consequatur libero voluptates beatae atque! Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Illum voluptas
            doloribus ab excepturi aspernatur asperiores. Quam saepe dicta
            repudiandae! Ab totam aut optio fugit officiis magnam alias ad iste
            laboriosam?
          </p>
        </div>
      </div>
      <div className="description_child_con">
        <div
          onClick={() => handleReveal("details")}
          className="description_child"
        >
          <p>Details</p>
          <img
            style={{
              transform: isDetails ? "rotateZ(-180deg)" : "rotate(0deg)",
            }}
            ref={detCaret}
            src={caret}
            alt="caret"
          />
        </div>
        <div
          style={{
            height: isDetails ? detHeight + "px" : "0px",
            opacity: isDetails ? 1 : 0,
          }}
          className="description_text_con"
        >
          <table ref={detChild}>
            <tr>
              <td>Brand</td>
              <td>Galvus Met</td>
            </tr>
            <tr>
              <td>Strength</td>
              <td>90/500mg</td>
            </tr>
            <tr>
              <td>Generic</td>
              <td style={{ fontSize: "small" }}>
                Vildagliptine 40mg + Metformin 500mg
              </td>
            </tr>
            <tr>
              <td>Formulation</td>
              <td>Syrup</td>
            </tr>
            <tr>
              <td>Manufacturer</td>
              <td> Eze</td>
            </tr>
            <tr>
              <td>MFD</td>
              <td>12/10/09</td>
            </tr>
            <tr>
              <td style={{ color: "red" }}>EXD</td>
              <td>30/10/10</td>
            </tr>
            <tr>
              <td>Nafdac No#</td>
              <td>59400</td>
            </tr>
            <tr>
              <td>Pack Size</td>
              <td>90</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="description_child_con">
        <div
          onClick={() => handleReveal("policy")}
          className="description_child"
        >
          <p>Return Policy</p>

          <img
            style={{
              transform: isPolicy ? "rotateZ(-180deg)" : "rotateZ(0deg)",
            }}
            ref={polCaret}
            src={caret}
            alt="caret"
          />
        </div>
        <div
          style={{
            height: isPolicy ? `${polHeight}px` : "0px",
            opacity: isPolicy ? 1 : 0,
          }}
          className="description_text_con"
        >
          <p ref={polChild} className="description_text">
            We have a OYO return policy. Purchase at your own{" "}
            <span style={{ color: "red" }}> RISK </span>
          </p>
        </div>
      </div>
      <div className="description_rating">
        <div className="rating_con">
          <div className="rating_first_child">
            <p className="rating_title">Reviews (50)</p>

            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <div className="sample_rating">
              <p className="sample_rating_heading">
                <span>
                  Jane Watson
                  <i style={{ color: "gold" }} className="fa fa-star fa-xs"></i>
                  <i style={{ color: "gold" }} className="fa fa-star fa-xs"></i>
                  <i style={{ color: "gold" }} className="fa fa-star fa-xs"></i>
                </span>
                <span>30/04/20</span>
              </p>
              <p className="sample_rating_title">Loved IT!!!</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                dolores eaque repellat ut sit beatae? Sequi, dolor recusandae
                eos officiis, corporis consequatur eum voluptates porro
                asperiores laudantium vel fugit nostrum.
              </p>
            </div>
          </div>

          <img src={caret} alt="more ratings" />
        </div>
      </div>

      <ItemList
        title="More by this Vendor"
        handleCartQuantity={handleCartQuantity}
        cards={cards}
      />
      <ItemList
        title="Recently Viewed"
        handleCartQuantity={handleCartQuantity}
        cards={[...cards].reverse()}
      />
    </div>
  );
};

export default Description;
