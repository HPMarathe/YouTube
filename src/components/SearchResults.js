import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import SearchVideoCard from "./SearchVideoCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchVideos, setSearchVideos] = useState([]);

  let searchQuery = searchParams.get("search_query");
  // console.log(searchQuery);

  useEffect(() => {
    getSearchResultVideoList();
  }, [searchQuery]);

  const getSearchResultVideoList = async () => {
    const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSearchVideos(json?.items);
    // console.log(json.items[(0, 1)]);
  };

  return (
    <div className="justify-center">
      <div className="py-2 ">
        {searchVideos?.map((video) =>
          // Only show videos (no channels)
          video.id.videoId ? (
            <Link
              key={video?.id?.videoId || video?.id?.playlistId}
              to={"/watch?v=" + (video?.id?.videoId || video?.id?.playlistId)}
            >
              <SearchVideoCard video={video} />
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};

export default SearchResults;
