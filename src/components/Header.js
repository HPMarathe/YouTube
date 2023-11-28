import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useNavigate } from "react-router-dom";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiLiveLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // API Call
    // console.log(searchQuery);
    // make api call after very key press but if the difference b/w 2API Calls is <200ms =>Decline the call
    const timer = setTimeout(() => {
      // check if searchQuery results are presented in cache else call api & store results in cache.
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    //update the cache
    // storing cache as object in key value pair
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestion = (e) => {
    // e.preventDefault();
    setShowSuggestions(false);
    setSearchQuery(e.target.innerText);
    navigate("/results?search_query=" + (e.target.innerText || searchQuery));
  };

  return (
    <div className="w-full flex p-7 mx-2 shadow-sm fixed z-10 bg-white">
      <div className="flex w-3/12 items-center">
        <AiOutlineMenu
          className="text-2xl cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />

        <a href="/">
          <img
            className="h-7 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt=""
          />
        </a>
      </div>
      <div className="w-8/12 px-10">
        <div className="">
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setShowSuggestions(false);
            }}
            // always keep in mind that keydown event will be applicable only on the input field
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSuggestion(e);
              }
            }}
          />
          <button
            className="border border-gray-400  bg-gray-100 pt-[10px] pb-[14px] px-5 items-center rounded-r-full"
            onClick={() => {
              navigate("/results?search_query=" + searchQuery);
              setSearchQuery("");
            }}
          >
            {" "}
            {/* 🔍 */}
            <BsSearch className="" />
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white w-[35%] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  // mousedown will direct when you click on suggestions
                  onMouseDown={(e) => handleSuggestion(e)}
                  className="py-2 px-3 shadow-sm hover:bg-gray-200 cursor-pointer"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="w-1/12 flex text-3xl justify-between">
        <IoMdNotificationsOutline />
        <RiLiveLine />
        <FaRegUserCircle />

        {/* <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        /> */}
      </div>
    </div>
  );
};

export default Header;
