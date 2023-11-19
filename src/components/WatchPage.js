import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import WatchPageVideoDetails from "./WatchPageVideoDetails";

const WatchPage = () => {
  const dispatch = useDispatch();

  //   const params = useParams();
  //   console.log(params);
  // you will get empty object if you get normal params
  // URLSearchParams - read

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  const VideoId = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full ">
        <div className="w-8/12">
          <iframe
            className="rounded-lg aspect-video w-full"
            src={"https://www.youtube.com/embed/" + VideoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <WatchPageVideoDetails videoId={VideoId} />
          <CommentsContainer />
        </div>
        <div className="w-4/12">
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
