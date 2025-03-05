import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import MovieCard from "./components/MovieCard";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Header />
      <Banner />
      <MovieList />
      {/* <MovieCard /> */}
    </div>
  );
};

export default App;
