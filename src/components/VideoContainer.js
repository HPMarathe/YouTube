import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerVideo from "./ShimmerVideo";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    // Adding event listener for scroll & trigger infiniteScroll when scroll event trigger.
    window.addEventListener("scroll", handleInfiniteScroll, true);
    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll, true);
    };
  }, [nextPageToken]);

  const getVideos = async () => {
    try {
      // if nextPageToken!= "" then use pageToken parmeter in api as provided by youtube else just use normal api without pageToken.
      const url =
        nextPageToken !== ""
          ? `${YOUTUBE_POPULAR_API_KEY}&pageToken=${nextPageToken}`
          : YOUTUBE_POPULAR_API_KEY;
      const data = await fetch(url);
      const json = await data?.json();
      // fetch nextpage token & refer it to setNextPageToken
      setNextPageToken(json?.nextPageToken);
      // Use spread to destructure array & merge videos & newly fetched json.items
      setVideos([...videos, ...json?.items]);
    } catch (e) {
      console.error(e);
    }
  };

  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + Math.round(document.documentElement.scrollTop) + 1 >=
        document.documentElement.scrollHeight &&
      nextPageToken != null
    ) {
      getVideos();
    }
  };

  if (!videos?.length) return <ShimmerVideo />;

  return (
    <div className=" flex justify-center">
      <div className="flex flex-wrap w-10/12 ">
        {videos?.map((video) => (
          <Link to={"/watch?v=" + video?.id} key={video?.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
