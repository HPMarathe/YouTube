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
      <div className="px-5 flex ">
        <div>
          <iframe
            className="rounded-lg"
            width="1100"
            height="600"
            src={"https://www.youtube.com/embed/" + VideoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <WatchPageVideoDetails videoId={VideoId} />
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
