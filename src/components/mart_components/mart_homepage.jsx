import React from "react";

import styles from "../../res/css modules/mart_landing_group.module.scss";
import Groups from "../reusables/drug_groups";
const Home = (props) => {
  const { drug_list } = props;
  console.log(drug_list)

  return (
    <>
      <div className={styles.group_parent_con}>
        <Groups title="Antibiotics" drugs={drug_list.slice(0,4)} />
      </div>
      <div className={styles.group_parent_con}>
        <Groups title="Syrups" drugs={drug_list.slice(4,8)} />
      </div>
      <div className={styles.group_parent_con}>
        <Groups title="Lagos" drugs={drug_list.slice(5,9)} />
      </div>
      <div className={styles.group_parent_con}>
        <Groups title="Emzor" drugs={drug_list.slice(0,4)} />
      </div>
    </>
  );
};
export default Home;
