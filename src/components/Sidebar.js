import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  SiYoutubeshorts,
  SiYoutubestudio,
  SiYoutubemusic,
  SiYoutubegaming,
} from "react-icons/si";
import { GoHomeFill } from "react-icons/go";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoNewspaper, IoBook, IoMusicalNoteSharp } from "react-icons/io5";
import { AiFillTrophy } from "react-icons/ai";
import { FaHistory, FaAngleDown, FaYoutube } from "react-icons/fa";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { HiShoppingBag } from "react-icons/hi2";
import {
  MdPodcasts,
  MdSubscriptions,
  MdWatchLater,
  MdOutlineSettingsInputAntenna,
} from "react-icons/md";
import { FaShirtsinbulk } from "react-icons/fa6";
import { BsFire } from "react-icons/bs";
import { PiPresentationChartFill } from "react-icons/pi";
import { RiLiveFill } from "react-icons/ri";
import { closeMenu } from "../utils/appSlice";
import { IoSettingsSharp } from "react-icons/io5";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store?.app?.isMenuOpen);
  const dispatch = useDispatch();
  if (!isMenuOpen) return null;
  return (
    <div className="pl-8 py-8 pb-16 pr-16 min-w-fit fixed  max-h-screen hover:overflow-y-scroll overflow-hidden overscroll-contain  top-[64px] z-10 bg-white ">
      <ul className="shadow-sm">
        <Link to="/" onClick={() => dispatch(closeMenu())}>
          <li className="flex py-2">
            <GoHomeFill className="text-2xl " />
            <p className="pl-4 ">Home</p>
          </li>
        </Link>
        <Link
          to="/results?search_query=shorts"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <SiYoutubeshorts className="text-2xl " />
            <p className="pl-4 ">Shorts</p>
          </li>
        </Link>
        <Link
          to="/results?search_query=subscriptions"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <MdSubscriptions className="text-2xl " />
            <p className="pl-4 ">Subscriptions</p>
          </li>
        </Link>
      </ul>
      <h1 className=" pt-5 text-lg font-semibold">You {">"} </h1>
      <ul className="shadow-sm">
        <Link
          to="/results?search_query=yourchannel"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <PiPresentationChartFill className="text-2xl " />
            <p className="pl-4 "> Your Channel</p>
          </li>
        </Link>
        <Link
          to="/results?search_query=history"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <FaHistory className="text-2xl " />
            <p className="pl-4 ">History</p>
          </li>
        </Link>
        <Link
          to="/results?search_query=yourvideos"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <RiLiveFill className="text-2xl " />
            <p className="pl-4 ">Your Videos</p>
          </li>
        </Link>
        <Link
          to="/results?search_query=watchlater"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <MdWatchLater className="text-2xl " />
            <p className="pl-4 ">Watch Later</p>
          </li>
        </Link>
        <Link
          to="/results?search_query=showmore"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <FaAngleDown className="text-2xl " />
            <p className="pl-4 ">Show More</p>
          </li>
        </Link>
      </ul>
      <h1 className=" pt-5 text-lg font-semibold">Explore</h1>
      <ul className="shadow-sm">
        <Link
          to="/results?search_query=trending"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <BsFire className="text-2xl " />
            <p className="pl-4 "> Trending</p>
          </li>
        </Link>

        <Link
          to="/results?search_query=shopping"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <HiShoppingBag className="text-2xl " />
            <p className="pl-4 "> Shopping</p>
          </li>
        </Link>
        <Link
          to="/results?search_query=music"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <IoMusicalNoteSharp className="text-2xl " />
            <p className="pl-4 ">Music</p>
          </li>
        </Link>
        <Link
          to="/results?search_query=movies"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <BiSolidMoviePlay className="text-2xl " />
            <p className="pl-4 ">Movies</p>
          </li>
        </Link>
        <Link
          to="/results?search_query=live"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <MdOutlineSettingsInputAntenna className="text-2xl " />
            <p className="pl-4 ">Live</p>
          </li>
        </Link>
        <Link
          to="/results?search_query=movies"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <SiYoutubegaming className="text-2xl " />
            <p className="pl-4 ">Gaming</p>
          </li>
        </Link>
        <Link
          to="/results?search_query=news"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <IoNewspaper className="text-2xl " />
            <p className="pl-4 ">News</p>
          </li>
        </Link>
        <Link
          to="/results?search_query=sports"
          onClick={() => dispatch(closeMenu())}
        >
          {" "}
          <li className="flex py-2">
            <AiFillTrophy className="text-2xl " />
            <p className="pl-4 ">Sports</p>
          </li>
        </Link>
        <Link
          to="/results?search_query=learning"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <IoBook className="text-2xl " />
            <p className="pl-4 ">Learning</p>
          </li>
        </Link>
        <Link
          to="/results?search_query=fashion"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <FaShirtsinbulk className="text-2xl " />
            <p className="pl-4 ">Fashion & Beauty</p>
          </li>
        </Link>

        <Link
          to="/results?search_query=podcast"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <MdPodcasts className="text-2xl " />
            <p className="pl-4 ">Podcast</p>
          </li>
        </Link>
      </ul>
      <h1 className=" pt-5 text-lg font-semibold">More from YouTube </h1>
      <ul className="shadow-sm">
        <Link
          to="/results?search_query=youtubepremium"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <FaYoutube className="text-2xl " />
            <p className="pl-4 "> YouTube Premium</p>
          </li>
        </Link>
        <Link
          to="/results?search_query=youtubestudio"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <SiYoutubestudio className="text-2xl " />
            <p className="pl-4 ">YouTube Studio</p>
          </li>
        </Link>
        <Link
          to="/results?search_query=youtubemusic"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <SiYoutubemusic className="text-2xl " />
            <p className="pl-4 ">YouTube Music</p>
          </li>
        </Link>
        <Link
          to="/results?search_query=youtubekids"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <TbBrandYoutubeKids className="text-2xl " />
            <p className="pl-4 ">YouTube Kids</p>
          </li>
        </Link>
        <Link
          to="/results?search_query=settings"
          onClick={() => dispatch(closeMenu())}
        >
          <li className="flex py-2">
            <IoSettingsSharp className="text-2xl " />
            <p className="pl-4 ">Settings</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
