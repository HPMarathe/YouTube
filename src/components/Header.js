import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import {
  YOUTUBE_SEARCH_SUGGESTIONS,
  YOUTUBE_SEARCH_SUGGESTIONS_API,
  YOUTUBE_SEARCH_SUGGESTIONS_KEY,
} from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // API Call
    // console.log(searchQuery);
    // make api call after very key press but if the difference b/w 2API Calls is <200ms =>Decline the call
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          alt=""
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt=""
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border border-gray-400  bg-gray-100 py-2 px-5 rounded-r-full">
            🔍
          </button>
        </div>
        <div className="fixed bg-white w-[35%] shadow-lg rounded-lg border border-gray-100">
          <ul className="">
            <li className="py-2 px-3 shadow-sm hover:bg-gray-200">🔍 Iphone</li>
            <li className="py-2 px-3 shadow-sm hover:bg-gray-200">🔍 Iphone</li>
            <li className="py-2 px-3 shadow-sm hover:bg-gray-200">🔍 Iphone</li>
            <li className="py-2 px-3 shadow-sm hover:bg-gray-200">🔍 Iphone</li>
            <li className="py-2 px-3 shadow-sm hover:bg-gray-200">🔍 Iphone</li>
            <li className="py-2 px-3 shadow-sm hover:bg-gray-200">🔍 Iphone</li>
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>{" "}
    </div>
  );
};

export default Header;
