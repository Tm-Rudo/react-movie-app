// // import React from "react";

// // const MovieCard = ({ movie }) => {
// //   return (
// //     // w-52 h-60 bg-amber-200 rounded-sm
// //     <div className=" rounded-sm shadow-md transform transition-transform duration-300 hover:scale-110 border-1 border-gray-400">
// //       <img
// //         src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
// //         alt={movie.title}
// //         title={movie.title}
// //         className="w-full  object-cover cursor-pointer"
// //       />
// //     </div>
// //   );
// // };

// // export default MovieCard;

// import React from "react";
// import { MovieContext } from "../context/MovieContext";
// const MovieCard = ({ movie }) => {
//   const { fetchMovieDetails } = useContext(MovieContext);

//   const handleMovieClick = () => {
//     fetchMovieDetails(movie.id);
//   };
//   return (
//     <div
//       className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 group"
//       onClick={handleMovieClick}
//     >
//       {/* Poster phim */}
//       <img
//         src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//         alt={movie.title}
//         title={movie.title}
//         className="w-full object-cover cursor-pointer"
//       />

//       {/* Viền sáng nhẹ khi hover */}
//       <div className="absolute inset-0 ring-1 ring-gray-400/30 group-hover:ring-red-500/50 rounded-lg transition-all duration-300"></div>

//       {/* Hiệu ứng glow khi hover */}
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300"></div>

//       {/* Thông tin phim (tùy chọn) */}
//       <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//         <h3 className="text-white font-medium text-sm truncate">
//           {movie.title}
//         </h3>
//         <p className="text-gray-300 text-xs mt-1 opacity-80">
//           {movie.release_date?.substring(0, 4)}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;

import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const MovieCard = ({ movie }) => {
  const { fetchMovieDetails } = useContext(MovieContext);

  const handleMovieClick = () => {
    fetchMovieDetails(movie.id);
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 group cursor-pointer"
      onClick={handleMovieClick}
    >
      {/* Poster phim */}
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        title={movie.title}
        className="w-full object-cover"
      />

      {/* Viền sáng nhẹ khi hover */}
      <div className="absolute inset-0 ring-1 ring-gray-400/30 group-hover:ring-red-500/50 rounded-lg transition-all duration-300"></div>

      {/* Hiệu ứng glow khi hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300"></div>

      {/* Thông tin phim */}
      <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white font-medium text-sm truncate">
          {movie.title}
        </h3>
        <p className="text-gray-300 text-xs mt-1 opacity-80">
          {movie.release_date?.substring(0, 4)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
