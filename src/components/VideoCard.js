import React, { useEffect, useState } from "react";
import { CHANNEL_DATA_API } from "../utils/constants";

const VideoCard = ({ info }) => {
  // console.log(info);

  const { snippet, statistics } = info;

  const { channelId, channelTitle, title, thumbnails } = snippet;

  const [channelDetails, setChannelDetails] = useState(null);

  useEffect(() => {
    getChannelData();
  }, []);

  // Getting Channel Data with Channel Id
  const getChannelData = async () => {
    const data = await fetch(CHANNEL_DATA_API + channelId);
    const json = await data.json();
    // console.log(json);
    setChannelDetails(json);
  };

  if (channelDetails == null) return;

  const channelLogoImg =
    channelDetails?.items[0].snippet?.thumbnails?.default?.url || {};

  return (
    <div className="p-2 m-2 w-80 shadow-lg h-[300px]">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="" />
      <div className="flex">
        <div className=" w-12 my-2 mx-2 ">
          <img
            className="rounded-full"
            src={channelLogoImg}
            alt="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
        </div>
        <div className="w-full">
          <div className="font-bold my-2 line-clamp-2">{title}</div>
          <div className="line-clamp-1">{channelTitle}</div>
          <div>{statistics.viewCount} Views</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
