import React, { useEffect, useState } from "react";
import { CHANNEL_DATA_API } from "../utils/constants";
import TimeConverter from "./TimeConverter";

const SearchVideoCard = ({ video }) => {
  // console.log(video);
  const [channelDetails, setChannelDetails] = useState(null);

  useEffect(() => {
    getChannelData();
  }, []);

  // Getting Channel Data with Channel Id
  const getChannelData = async () => {
    const data = await fetch(CHANNEL_DATA_API + video?.snippet?.channelId);
    const json = await data.json();
    // console.log(json);
    setChannelDetails(json);
  };

  if (channelDetails == null) return;

  const channelLogoImg =
    channelDetails?.items[0].snippet?.thumbnails?.high?.url || {};

  return (
    <div className=" flex  py-4 justify-center pl-28 ">
      <div className="w-11/12 h-56 flex overflow-y-hidden ">
        <img
          className="h-full rounded-lg "
          src={video?.snippet?.thumbnails?.medium?.url}
          alt=""
        />
        <div className="pl-4">
          <h1 className="font-semibold text-xl">{video?.snippet?.title}</h1>
          <div className="">
            {" "}
            <TimeConverter utcTimestamp={video?.snippet?.publishedAt} />
          </div>
          <div className="flex my-1">
            <img
              className="w-8 my-2 rounded-full "
              src={channelLogoImg}
              alt=""
            />
            <h1 className="m-3 ">{video?.snippet?.channelTitle}</h1>
          </div>
          <h2 className="text-sm">{video?.snippet?.description}</h2>
        </div>
      </div>
    </div>
  );
};

export default SearchVideoCard;
