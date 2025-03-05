import React, { useContext } from "react";
//import context
import { MovieContext } from "../context/MovieContext";
//import moviecard
import MovieCard from "./MovieCard";

const MovieList = () => {
  //lấy dữ liệu từ context
  const { popularMovies, recommendedMovies, nowPlayingMovies } =
    useContext(MovieContext);
  //object chứa danh sách phim
  const movieData = {
    popularMovies,
    recommendedMovies,
    nowPlayingMovies,
  };
  // mảng chứa ds các phim cần hiển thị
  const categories = [
    { title: "Phim phổ biến", key: "popularMovies" },
    { title: "Phim đề xuất", key: "recommendedMovies" },
    { title: "Phim đang chiếu", key: "nowPlayingMovies" },
  ];

  return (
    <div className="px-8 py-6 space-y-10">
      {categories.map((category) => (
        <div key={category.key}>
          <div className="uppercase font-bold text-xl mb-4">
            {category.title}
          </div>
          <div className="grid grid-cols-6 gap-6">
            {movieData[category.key].slice(0, 6).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default MovieList;
{
  /* <div className="uppercase font-bold  text-xl mb-4">Danh sách Phim</div>
      <div className="grid grid-cols-6 gap-6">
        {movies.slice(0, 6).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div> */
}
