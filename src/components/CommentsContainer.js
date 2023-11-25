import React, { useEffect } from "react";
import CommentsList from "./CommentsList";
import { VIDEO_COMMENTS_API } from "../utils/constants";

const commentsData = [
  {
    name: "Hrushikesh Marathe",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Hrushikesh Marathe",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Hrushikesh Marathe",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Hrushikesh Marathe",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Hrushikesh Marathe",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Hrushikesh Marathe",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Hrushikesh Marathe",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Hrushikesh Marathe",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Hrushikesh Marathe",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Hrushikesh Marathe",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Hrushikesh Marathe",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Hrushikesh Marathe",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Hrushikesh Marathe",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const CommentsContainer = ({ videoId }) => {
  useEffect(() => {
    fetchComments();
  }, [videoId]);

  const fetchComments = async () => {
    const data = await fetch(VIDEO_COMMENTS_API + videoId);
    const json = await data.json();
    console.log(json);
  };
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
