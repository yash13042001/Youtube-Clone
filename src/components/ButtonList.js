import React from "react";
import Button from "./Button";

const namesList = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "News",
  "Motivation",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {namesList.map((buttonName) => (
        <Button key={buttonName} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
