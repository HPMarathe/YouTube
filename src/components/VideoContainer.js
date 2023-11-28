import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerVideo from "./ShimmerVideo";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_API_KEY);
    const json = await data.json();
    // console.log(json);
    setVideos(json?.items);
  };

  // if (videos == null) return;
  if (videos == null) return <ShimmerVideo />;

  return (
    <div className=" flex justify-center">
      <div className="flex flex-wrap w-10/12 ">
        {videos?.map((video) => (
          <Link to={"/watch?v=" + video?.id} key={video?.id}>
            {" "}
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
