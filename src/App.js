import React, { useEffect, useState } from "react";
import "./App.css";
import { FaSearch } from "react-icons/fa";
import MovieCard from "./MovieCard";

//663984e4

const API_URL = "http://www.omdbapi.com/?apikey=663984e4";

// const movie1 = {
//   Title: "Pendekar bujang lapok",
//   Year: "1959",
//   imdbID: "tt0277950",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BYzZjYjZmMzUtOWUzYy00MDkwLThhMWMtMDdiYjJjNzcyNzRhXkEyXkFqcGdeQXVyMTA3NTk1MQ@@._V1_SX300.jpg",
// };

const App = () => {

  const [ movies,setMovies] = useState([])

  const [searchterm, setSearchterm] = useState("")

  useEffect(() => {
    searchMovies("title");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };


  return (
    <div className="app">
      <h1>Movie Search</h1>
      <div className="search">
        <input
          placeholder="search your movie"
          value={searchterm}
          onChange={(e) => {setSearchterm(e.target.value)}}
        />
        <FaSearch className="faIcon" onClick={() => {searchMovies(searchterm)}} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
