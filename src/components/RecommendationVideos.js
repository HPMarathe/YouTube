import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RECOMMENDATION_VIDEOS_API } from "../utils/constants";

const RecommendationVideos = () => {
  const channelId = useSelector((store) => store.video.channelId);
  const [recommendationVideos, setRecommendationVideos] = useState(null);

  // console.log(channelId);

  const fetchVideoRecommendations = async () => {
    const data = await fetch(RECOMMENDATION_VIDEOS_API + channelId);
    const json = await data.json();
    setRecommendationVideos(json?.items[1]);
  };

  useEffect(() => {
    // if we didnt give if conditions we will get error as it will fetch undefined as channelid & will give fetch error
    if (channelId != null) {
      fetchVideoRecommendations();
    }
  }, [channelId]);

  if (recommendationVideos == null && channelId == null) return;
  // console.log(recommendationVideos);

  // if we dont give || {} we will have following error - RecommendationVideos.js:31 Uncaught TypeError: Cannot destructure property 'channelTitle' of '(intermediate value)(intermediate value)(intermediate value)' as it is undefined.

  const { channelTitle, publishedAt, thumbnails, title } =
    recommendationVideos?.snippet || {};

  return (
    <div className=" flex flex-row m-2 shadow-lg rounded-xl border border-gray-100">
      <img
        className="w-56  aspect-video rounded-xl"
        src={thumbnails?.medium?.url}
        alt=""
      />
      <div className="flex flex-col px-2">
        <div className="font-bold line-clamp-2 m-1 ">{title}</div>
        <div className="text-sm line-clamp-1 m-1">{channelTitle}</div>
        <div className="text-sm m-1">{publishedAt}</div>
      </div>
    </div>
  );
};

export default RecommendationVideos;
