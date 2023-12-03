import React from "react";
import Buttton from "./Buttton";

//Loop throgh list
const ButtonList = () => {
  const names = [
    "All",
    "Music",
    "Gaming",
    "Movies",
    "Stocks",
    "Series",
    "Bikes",
    "Cars",
    "AI",
    "Podcast",
    "Live",
    "News",
    "Comedy",
    "Watched",
  ];
  return (
    <div className="flex w-screen justify-center overflow-x-scroll overflow-y:auto">
      <div className="flex w-10/12 ">
        {names.map((name, index) => {
          return <Buttton key={index} name={name} />;
        })}
      </div>
    </div>
  );
};

export default ButtonList;
