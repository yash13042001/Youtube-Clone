import React from "react";

const commentsData = [
  {
    name: "Yash Shukla",
    text: "Dummy text: Its function as a filler or as a tool for comparing the visual impression of different typefaces",
    replies: [
      {
        name: "Yash Shukla",
        text: "Dummy text: Its function as a filler or as a tool for comparing the visual impression of different typefaces",
        replies: [
          {
            name: "Yash Shukla",
            text: "Dummy text: Its function as a filler or as a tool for comparing the visual impression of different typefaces",
            replies: [
              {
                name: "Yash Shukla",
                text: "Dummy text: Its function as a filler or as a tool for comparing the visual impression of different typefaces",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Yash Shukla",
    text: "Dummy text: Its function as a filler or as a tool for comparing the visual impression of different typefaces",
    replies: [
      {
        name: "Yash Shukla",
        text: "Dummy text: Its function as a filler or as a tool for comparing the visual impression of different typefaces",
        replies: [
          {
            name: "Yash Shukla",
            text: "Dummy text: Its function as a filler or as a tool for comparing the visual impression of different typefaces",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Yash Shukla",
    text: "Dummy text: Its function as a filler or as a tool for comparing the visual impression of different typefaces",
    replies: [
      {
        name: "Yash Shukla",
        text: "Dummy text: Its function as a filler or as a tool for comparing the visual impression of different typefaces",
        replies: [],
      },
    ],
  },
  {
    name: "Yash Shukla",
    text: "Dummy text: Its function as a filler or as a tool for comparing the visual impression of different typefaces",
    replies: [],
  },
  {
    name: "Yash Shukla",
    text: "Dummy text: Its function as a filler or as a tool for comparing the visual impression of different typefaces",
    replies: [],
  },
  {
    name: "Yash Shukla",
    text: "Dummy text: Its function as a filler or as a tool for comparing the visual impression of different typefaces",
    replies: [],
  },
  {
    name: "Yash Shukla",
    text: "Dummy text: Its function as a filler or as a tool for comparing the visual impression of different typefaces",
    replies: [],
  },
  {
    name: "Yash Shukla",
    text: "Dummy text: Its function as a filler or as a tool for comparing the visual impression of different typefaces",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 my-2 rounded-lg">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  // never use index as key
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments :</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
