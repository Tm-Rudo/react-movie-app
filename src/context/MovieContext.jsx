import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const key_api = "4572f2a3e2f723b3f25963314ba0dd22";
//1. khởi tạo context
export const MovieContext = createContext();

//2. tạo provider context cung cấp dữ liệu
export const MovieProvider = ({ children }) => {
  //children: các components con được bao bọc trong movieProvider

  //lưu ds phim ban đầu
  const [movies, setMovies] = useState([]);
  //kiểm tra trạng thái dữ liệu tải xong chưa
  //   const [loading, setLoading] = useState(true);
  //phim đề xuất
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  // phim phổ biến
  const [popularMovies, setPopularMovies] = useState([]);
  // đang chiếu
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  // Thêm state mới cho chi tiết phim
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieTrailer, setMovieTrailer] = useState(null);

  // tìm kiếm
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Hàm fetch chi tiết phim
  const fetchMovieDetails = async (movieId) => {
    try {
      // Lấy thông tin chi tiết phim
      const detailResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key_api}`
      );

      // Lấy trailer phim
      const trailerResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key_api}`
      );

      // Tìm trailer YouTube đầu tiên
      const youtubeTrailer = trailerResponse.data.results.find(
        (video) => video.site === "YouTube" && video.type === "Trailer"
      );

      setSelectedMovie(detailResponse.data);
      setMovieTrailer(youtubeTrailer);
    } catch (error) {
      console.error("Lỗi khi tải chi tiết phim:", error);
    }
  };

  // Hàm đóng popup chi tiết phim
  const closeMovieDetail = () => {
    setSelectedMovie(null);
    setMovieTrailer(null);
  };

  // Hàm tìm kiếm phim mới
  const searchMovies = async (query) => {
    if (!query) {
      // Nếu query rỗng, reset về danh sách ban đầu
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    try {
      setIsSearching(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key_api}&query=${encodeURIComponent(
          query
        )}`
      );

      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Lỗi khi tìm kiếm phim:", error);
      setSearchResults([]);
    }
  };

  //3. call api lấy ds phim
  //useeffects: gọi api sau khi component đc render lần đầu tiên
  // useEffect(() => {
  //   //hàm bất đồng bộ async
  //   const fetchMovies = async () => {
  //     try {
  //       const res = await axios.get(
  //         `https://api.themoviedb.org/3/movie/popular?api_key=${key_api}`
  //       );
  //       setMovies(res.data.results); //lưu danh sách vào state
  //     } catch (e) {
  //       console.log("Lỗi: ", e);
  //     }
  //     //   finally {
  //     //     setLoading(false); //Tắt trạng thái loading khi API hoàn thành
  //     //   }
  //   };
  //   fetchMovies(); // GỌI LẠI HÀM ĐỂ CHẠY NGAY KHI COMPONENT ĐƯỢC RENDER
  // }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [popularRes, recommendedRes, nowPlayingRes] = await Promise.all([
          axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${key_api}`
          ),
          axios.get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${key_api}`
          ),
          axios.get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${key_api}`
          ),
        ]);
        //lưu kết quả vào state
        setPopularMovies(popularRes.data.results);
        setRecommendedMovies(recommendedRes.data.results);
        setNowPlayingMovies(nowPlayingRes.data.results);
      } catch (e) {
        console.log("Lỗi: ", e);
      }
    };
    fetchMovies();
  }, []);

  //4. cung cấp dữ liệu phim toàn ứng dụng
  return (
    <MovieContext.Provider
      value={{
        popularMovies,
        recommendedMovies,
        nowPlayingMovies,
        selectedMovie,
        movieTrailer,
        searchResults,
        isSearching,
        fetchMovieDetails,
        closeMovieDetail,
        searchMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
