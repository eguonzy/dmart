import React from "react";
import styles from "../../res/css modules/mart_landing_group.module.scss";
import ph2 from "../../res/images/drug.jpg";
import ph3 from "../../res/images/drug.jpg";
import ph4 from "../../res/images/drug.jpg";
import HomeCard from "./HomeCard";
const Groups = (props) => {
  const { title } = props;
  const { drugs } = props;
  //const [first, second, third, fourth] = props.group;
  return (
    <div className={styles.group_parent}>
      <p className={styles.title_parent}>
        <span className={styles.group_title}>{title}</span>
        <span className={styles.more}>
          {" "}
          more{"  "}
          <i
            style={{ marginLeft: "0.3em", color: "inherit" }}
            className="fas fa-caret-right "
          ></i>
        </span>
      </p>
      <div className={styles.group_con}>
        {drugs.map((drug) => (
          <HomeCard
            brand={drug.name}
            company={drug.company}
            generic="certain drug & that"
            price={drug.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Groups;
