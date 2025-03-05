import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const MovieDetail = () => {
  const { selectedMovie, movieTrailer, closeMovieDetail } =
    useContext(MovieContext);

  if (!selectedMovie) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={closeMovieDetail}
    >
      <div
        className="bg-gray-900/90 rounded-lg max-w-4xl w-full max-h-[90vh] flex overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hình ảnh poster */}
        <div className="w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
            alt={selectedMovie.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thông tin chi tiết */}
        <div className="w-2/3 p-6 overflow-y-auto text-white">
          <h2 className="text-3xl font-bold mb-4">{selectedMovie.title}</h2>

          <div className="mb-4 flex space-x-4">
            <span>Năm: {selectedMovie.release_date?.substring(0, 4)}</span>
            <span>Điểm: {selectedMovie.vote_average?.toFixed(1)}/10</span>
          </div>

          <p className="mb-6 text-gray-300">{selectedMovie.overview}</p>

          {/* Trailer YouTube */}
          {movieTrailer && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Trailer</h3>
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${movieTrailer.key}`}
                title="Movie Trailer"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* Nút đóng */}
          <button
            onClick={closeMovieDetail}
            className="absolute top-4 right-4 text-white text-2xl hover:text-red-500"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
