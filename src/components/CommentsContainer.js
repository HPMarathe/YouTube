import React, { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import { VIDEO_COMMENTS_API } from "../utils/constants";
import Comment from "./Comment";

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
  const [comments, setComments] = useState(commentsData);

  useEffect(() => {
    if (videoId != null) {
      fetchComments();
    }
  }, [videoId]);

  const fetchComments = async () => {
    const data = await fetch(VIDEO_COMMENTS_API + videoId);
    const json = await data.json();
    // console.log(json?.items);
    setComments(json?.items);
  };

  if (comments == commentsData) {
    return (
      <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments:</h1>
        <CommentsList comments={comments} />
      </div>
    );
  } else {
    return (
      <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments:</h1>
        {comments.map((comment, index) => (
          <div key={index}>
            <Comment data={comment} />
          </div>
        ))}
      </div>
    );
  }
};

export default CommentsContainer;
