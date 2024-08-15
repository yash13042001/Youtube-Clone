import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg p-5 m-2">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s"
          />
        </a>
      </div>
      <div className="flex col-span-10 px-32">
        <input
          className="w-1/2 px-4 py-2 border border-gray-400 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          <img
            className="h-6"
            alt="search-icon"
            src="https://www.shareicon.net/data/512x512/2015/09/01/94156_search_512x512.png"
          />
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
