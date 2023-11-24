import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import WatchPageVideoDetails from "./WatchPageVideoDetails";
import RecommendationVideos from "./RecommendationVideos";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [showChat, setShowChat] = useState(false);
  //   const params = useParams();
  //   console.log(params);
  // you will get empty object if you get normal params
  // URLSearchParams - read

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  const videoId = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full ">
        <div className="w-8/12">
          <iframe
            className="rounded-lg aspect-video w-full"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <WatchPageVideoDetails videoId={videoId} />
          <CommentsContainer />
        </div>
        <div className="w-4/12">
          {showChat && <LiveChat />}
          <button
            className="w-full rounded-2xl p-2 bg-gray-200 m-2"
            onClick={() => setShowChat(!showChat)}
          >
            {showChat ? "Hide Chat" : "Show Chat"}
          </button>
          <RecommendationVideos />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
