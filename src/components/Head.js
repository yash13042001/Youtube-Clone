import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  /**
   *  searchCache = {
   *     "iphone" : ["iphone11","iphone 14"]
   * }
   *
   *  searchQuery = iphone
   */

  useEffect(() => {
    // Api Call
    // console.log(searchQuery);
    // Make an Api call after exery key press
    // but if the difference between two api calls < 200 ms
    // decline the api calls
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   *
   * key-i
   * - render the component
   * - useEffect();
   * - start timer  => make api call after 200ms
   *
   * key-ip
   * - destroy the component(useEffect return method)
   * - rerenders the component
   * - useEffec();
   * - start timer => make api call after 200 ms
   */

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSuggestions(json[1]);

    // Update the cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

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
      <div className="col-span-10 px-32">
        <div className="flex">
          <input
            className="w-1/2 px-4 py-2 border border-gray-400 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            <img
              className="h-6"
              alt="search-icon"
              src="https://www.shareicon.net/data/512x512/2015/09/01/94156_search_512x512.png"
            />
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white px-3 py-2 w-[27rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="flex py-2 shadow-sm hover:bg-gray-100">
                  <img
                    className="h-6"
                    alt="search-icon"
                    src="https://www.shareicon.net/data/512x512/2015/09/01/94156_search_512x512.png"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
