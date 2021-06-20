import React from "react";

import styles from "../../res/css modules/mart_landing_group.module.scss";
import Groups from "../reusables/drug_groups";
const Home = (props) => {
  const { drug_list } = props;

  return (
    <>
      <div className={styles.group_parent_con}>
        <Groups title="Antibiotics" drugs={drug_list[0]} />
      </div>
      <div className={styles.group_parent_con}>
        <Groups title="Syrups" drugs={drug_list[1]} />
      </div>
      <div className={styles.group_parent_con}>
        <Groups title="Lagos" drugs={drug_list[2]} />
      </div>
      <div className={styles.group_parent_con}>
        <Groups title="Emzor" drugs={drug_list[3]} />
      </div>
    </>
  );
};
export default Home;
