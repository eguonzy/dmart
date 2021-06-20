import React from "react";
import UserSvg from "../../../../components/UserSvg";

const Stars = ({ count }) => {
  let stars = [];
  for (let index = 0; index < count; index++) {
    //@ts-ignore
    stars.push(<UserSvg key={index} star={true} />);
  }

  return <>{stars.length > 0 ? stars : "-"}</>;
};

export default Stars;
