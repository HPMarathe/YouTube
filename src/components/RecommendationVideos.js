import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RECOMMENDATION_VIDEOS_API } from "../utils/constants";
import RecommendationVideoCard from "./RecommendationVideoCard";
import RecVideoShimmer from "./RecVideoShimmer";

const RecommendationVideos = () => {
  const channelId = useSelector((store) => store.video.channelId);
  const [recommendationVideos, setRecommendationVideos] = useState(null);

  // console.log(channelId);

  const fetchVideoRecommendations = async () => {
    const data = await fetch(RECOMMENDATION_VIDEOS_API + channelId);
    const json = await data.json();
    setRecommendationVideos(json?.items);
  };

  useEffect(() => {
    // if we didnt give if conditions we will get error as it will fetch undefined as channelid & will give fetch error
    if (channelId != null) {
      fetchVideoRecommendations();
    }
  }, [channelId]);

  if (recommendationVideos == null) return <RecVideoShimmer />;

  // console.log(recommendationVideos);

  return (
    <div>
      {recommendationVideos?.map((recommendationVideo, index) =>
        // Dont show channel card as we have not develeoped channelpage.
        recommendationVideo?.contentDetails?.subscription ? null : (
          <div key={index}>
            <RecommendationVideoCard
              recommendationVideo={recommendationVideo}
            />
          </div>
        )
      )}
    </div>
  );
};

export default RecommendationVideos;
