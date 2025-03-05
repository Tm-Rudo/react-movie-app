import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./components/MovieDetail";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-800 text-white overflow-x-hidden ">
      <Header />
      <Banner />
      <MovieList />
      {/* <MovieCard /> */}
      <MovieDetail />
    </div>
  );
};

export default App;
