import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { searchMovies } = useContext(MovieContext);

  const handleSearch = () => {
    searchMovies(searchQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMovies(searchQuery);
    }
  };

  return (
    <div className="h-20 flex items-center bg-gray-800 px-10">
      <div className="uppercase font-extrabold text-5xl pl-10 bg-gradient-to-r from-red-500 to-red-300 text-transparent bg-clip-text">
        Movie
      </div>
      <div className="flex items-center ml-auto gap-4">
        <input
          type="text"
          className="bg-white h-10 w-64 rounded-sm px-4 focus:outline-none placeholder:text-gray-400 text-black"
          placeholder="Nhập tên phim..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="bg-gray-500 text-white hover:bg-gray-400 font-semibold rounded-sm h-10 w-24"
          onClick={handleSearch}
        >
          Tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default Header;
