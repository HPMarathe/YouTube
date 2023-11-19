import React, { useEffect, useState } from "react";
import { VIDEO_DETAILS_API } from "../utils/constants";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import { FiMoreHorizontal } from "react-icons/fi";
import ChannelDetails from "./ChannelDetails";

const WatchPageVideoDetails = ({ videoId }) => {
  const [videoDetails, setVideoDetails] = useState([null]);

  useEffect(() => {
    fetchVideoDetails();
  }, [videoId]);

  const fetchVideoDetails = async () => {
    const data = await fetch(VIDEO_DETAILS_API + videoId);
    const json = await data.json();
    // console.log(json?.items[0]);
    setVideoDetails(json?.items[0]);
  };

  if (videoDetails?.snippet == null) return;

  const { channelId, title, channelTitle, description, publishedAt } =
    videoDetails?.snippet || {};

  const { commentCount, likeCount, viewCount } = videoDetails?.statistics || {};

  return (
    <div className="flex flex-col w-full">
      <div className="flex">
        <div className="font-bold text-xl py-2 m-2">{title}</div>
      </div>
      <div className="flex justify-between">
        <ChannelDetails channelId={channelId} channelTitle={channelTitle} />

        <div className="flex items-center p-2">
          <div className="flex  items-center bg-slate-200 px-4 py-2  mx-2 rounded-3xl">
            <BiLike className="text-3xl" />
            <div className="text-xl">|</div>

            <p className="text-md ml-2">{likeCount}</p>
          </div>

          <div className="bg-slate-200 rounded-3xl  px-4 py-2  mx-2">
            <BiDislike className="text-3xl " />
          </div>
          <div className="bg-slate-200 rounded-3xl  px-4 py-2  mx-2">
            <PiShareFatThin className="text-3xl" />
          </div>
          <div className="bg-slate-200 rounded-3xl  px-4 py-2  mx-2">
            <FiMoreHorizontal className="text-3xl" />
          </div>
        </div>
      </div>
      <div className="flex p-4">
        <p className="px-2">{viewCount} Views</p>
        <p>{publishedAt}</p>
      </div>
      <div className="bg-slate-50 px-4">{description}</div>
    </div>
  );
};

export default WatchPageVideoDetails;
