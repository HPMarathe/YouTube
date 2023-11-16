import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import SearchVideoCard from "./SearchVideoCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchVideos, setSearchVideos] = useState([]);

  let searchQuery = searchParams.get("search_query");
  console.log(searchQuery);

  useEffect(() => {
    getSearchResultVideoList();
  }, [searchQuery]);

  const getSearchResultVideoList = async () => {
    const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSearchVideos(json?.items);
    console.log(json.items[0]);
  };

  return (
    <div className="justify-center">
      <div className="py-2 ">
        {searchVideos?.map((video) => (
          <Link
            key={video?.id?.videoId}
            to={"/watch?v=" + (video?.id?.videoId || video?.id?.playlistId)}
          >
            <SearchVideoCard video={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
