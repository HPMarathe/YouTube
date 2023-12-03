import React from "react";

const Comment = ({ data }) => {
  // console.log(data);
  const { authorDisplayName, authorProfileImageUrl, textDisplay } =
    data?.snippet?.topLevelComment?.snippet || {};

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12 rounded-full"
        src={authorProfileImageUrl}
        alt="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{authorDisplayName}</p>
        <p>{textDisplay}</p>
      </div>
    </div>
  );
};

export default Comment;
