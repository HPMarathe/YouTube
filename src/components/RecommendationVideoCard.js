import React from "react";
import { Link } from "react-router-dom";
import TimeConverter from "./TimeConverter";
import RecVideoShimmer from "./RecVideoShimmer";

const RecommendationVideoCard = ({ recommendationVideo }) => {
  if (recommendationVideo == null) return <RecVideoShimmer />;
  //   console.log(recommendationVideo);

  // if we dont give || {} we will have following error - RecommendationVideos.js:31 Uncaught TypeError: Cannot destructure property 'channelTitle' of '(intermediate value)(intermediate value)(intermediate value)' as it is undefined.

  const { channelTitle, publishedAt, thumbnails, title } =
    recommendationVideo?.snippet || {};

  const { videoId } =
    recommendationVideo?.contentDetails?.upload ||
    recommendationVideo?.contentDetails?.playlistItem?.resourceId ||
    {};
  //   console.log(videoId);
  return (
    <Link
      to={"/watch?v=" + videoId}
      className=" flex flex-row m-2  rounded-xl border border-gray-100"
    >
      <img
        className="w-56  aspect-video rounded-xl"
        src={thumbnails?.medium?.url}
        alt=""
      />
      <div className="flex flex-col px-2">
        <div className="font-bold line-clamp-2 m-1 ">{title}</div>
        <div className="text-sm line-clamp-1 m-1">{channelTitle}</div>
        <div className="text-sm m-1">
          <TimeConverter utcTimestamp={publishedAt} />
        </div>
      </div>
    </Link>
  );
};

export default RecommendationVideoCard;
