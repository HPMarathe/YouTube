import React from "react";
import Buttton from "./Buttton";
import { Link } from "react-router-dom";

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
          return (
            <Link key={name} to={"/results?search_query=" + name}>
              <Buttton key={index} name={name} />;
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ButtonList;
