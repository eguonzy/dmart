import React from "react";

import ph1 from "../../res/images/drug.jpg";
import styles from "../../res/css modules/mart_landing_group.module.scss";
function HomeCard({ brand,image, price, item, generic, company }) {
  return (
    <div className={styles.group_card}>
      <div className={styles.card_image_con}>
        <img src={"/image/?src="+image} className={styles.ph} alt="first drug" />
      </div>
      <div className={styles.details_con}>
        <p className={styles.brand}>{brand}</p>
        <p>{generic}</p>
        <p className={styles.company_tag}>{company}</p>
        <p className={styles.price}>&#8358;{price}</p>
      </div>
    </div>
  );
}

export default HomeCard;
