import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "./MovieCard";

const ScrollableMovieSection = ({ title, movies }) => {
  return (
    <div className="mb-8">
      <h2 className="uppercase font-bold text-xl mb-4 text-white">{title}</h2>
      <div className="relative group">
        <div
          className="flex overflow-x-scroll space-x-4 pb-4 scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 w-48">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

        {/* Nút scroll trái */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          ←
        </button>

        {/* Nút scroll phải */}
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          →
        </button>
      </div>
    </div>
  );
};

const MovieList = () => {
  const {
    popularMovies,
    recommendedMovies,
    nowPlayingMovies,
    searchResults,
    isSearching,
  } = useContext(MovieContext);

  // Nếu đang tìm kiếm, hiển thị kết quả tìm kiếm
  if (isSearching) {
    return (
      <div className="px-8 py-6 bg-gray-900">
        <ScrollableMovieSection
          title="Kết quả tìm kiếm"
          movies={searchResults}
        />
      </div>
    );
  }

  // Nếu không tìm kiếm, hiển thị danh sách phim ban đầu
  return (
    <div className="px-8 py-6 bg-gray-900">
      <ScrollableMovieSection title="Phim phổ biến" movies={popularMovies} />
      <ScrollableMovieSection title="Phim đề xuất" movies={recommendedMovies} />
      <ScrollableMovieSection
        title="Phim đang chiếu"
        movies={nowPlayingMovies}
      />
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
