import React, { useEffect, useState } from "react";
import { CHANNEL_DATA_API } from "../utils/constants";

const ChannelDetails = ({ channelId, channelTitle }) => {
  const [channelDetails, setChannelDetails] = useState(null);

  useEffect(() => {
    getChannelData();
  }, []);

  // Getting Channel Data with Channel Id
  const getChannelData = async () => {
    const data = await fetch(CHANNEL_DATA_API + channelId);

    const json = await data.json();
    setChannelDetails(json);
  };

  if (channelDetails == null) return;

  const channelLogoImg =
    channelDetails?.items[0]?.snippet?.thumbnails?.default?.url;

  const subscriberCount = channelDetails?.items[0]?.statistics?.subscriberCount;

  return (
    <div className="flex p-2">
      <img
        className="w-12 h-12 mx-2 rounded-full"
        src={channelLogoImg}
        alt="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className=" flex flex-col  pr-4">
        <p className="font-bold text-lg">{channelTitle}</p>
        <p className="text-sm">{subscriberCount} subscribers</p>
      </div>
      <button className="px-6 rounded-3xl text-lg bg-slate-300  font-medium">
        Join
      </button>
      <button className="px-6 ml-2 rounded-3xl text-lg bg-black txt text-white font-medium">
        Subscribe
      </button>
    </div>
  );
};

export default ChannelDetails;
