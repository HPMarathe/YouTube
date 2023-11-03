import React from "react";
import Buttton from "./Buttton";

//Loop throgh list
const ButtonList = () => {
  return (
    <div className="flex">
      <Buttton name="All" />
      <Buttton name="Gaming" />
      <Buttton name="Movies" />
      <Buttton name="Series" />
      <Buttton name="Javascript" />
      <Buttton name="React" />
    </div>
  );
};

export default ButtonList;
