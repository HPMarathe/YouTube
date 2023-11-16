import React, { useEffect } from "react";
import { VIDEO_DETAILS_API } from "../utils/constants";

const WatchPageVideoDetails = ({ videoId }) => {
  useEffect(() => {
    fetchVideoDetails();
  }, [videoId]);

  const fetchVideoDetails = async () => {
    const data = await fetch(VIDEO_DETAILS_API + videoId);
    const json = await data.json();
    console.log(json);
  };

  return <div></div>;
};

export default WatchPageVideoDetails;
