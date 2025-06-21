import React, { useEffect, useState, useContext } from "react";
import genreids from "../utility/genreids";
import { MovieContext } from "./MovieContext";
import { useNavigate } from "react-router-dom";
function Watchlist() {
  const { watchList, setWatchList } = useContext(MovieContext);
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [currGenre, setCurrGenre] = useState("All Genres");
  const [sortOrder, setSortOrder] = useState(null); // 'asc' or 'desc'

  const handleSearch = (e) => setSearch(e.target.value);

  const DeleteFromWatchList = (movie) => {
    const newList = watchList.filter((movieObj) => movieObj.id !== movie.id);
    setWatchList(newList);
    localStorage.setItem("movies", JSON.stringify(newList));
  };

  const handleAscendingRating = () => {
    const sorted = [...watchList].sort(
      (a, b) => a.vote_average - b.vote_average
    );
    setWatchList(sorted);
    setSortOrder("asc");
  };

  const handleDescendingRating = () => {
    const sorted = [...watchList].sort(
      (a, b) => b.vote_average - a.vote_average
    );
    setWatchList(sorted);
    setSortOrder("desc");
  };

  useEffect(() => {
    let temp = watchList.map((movie) => genreids[movie.genre_ids[0]]);
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchList]);

  const handleChangeInGenre = (genre) => setCurrGenre(genre);
  const navigate = useNavigate();
  // Filtered Movies
  const filteredMovies = watchList
    .filter((movie) =>
      currGenre === "All Genres"
        ? true
        : genreids[movie.genre_ids[0]] === currGenre
    )
    .filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <>
      {/* Genre Filter */}
      <div className="flex justify-center overflow-x-auto whitespace-nowrap p-2">
        {genreList.map((genre) => (
          <div
            key={genre}
            onClick={() => handleChangeInGenre(genre)}
            className={
              currGenre === genre
                ? "mx-2 my-2 scale-105 shadow-lg transition-all duration-300 flex-shrink-0 flex justify-center items-center bg-blue-500 h-[3rem] w-[9rem] text-white font-bold border rounded-xl"
                : "mx-2 my-2 flex-shrink-0 flex justify-center items-center bg-gray-400 h-[3rem] w-[9rem] text-white font-bold border rounded-xl"
            }
          >
            {genre}
          </div>
        ))}
      </div>

      {/* Search Field */}
      <div className="flex justify-center my-10">
        <input
          onChange={handleSearch}
          value={search}
          placeholder="Search for Movie"
          className="border border-slate-600 h-[3rem] w-[18rem] px-4 bg-gray-200 outline-none"
          type="text"
        />
      </div>

      {/* Movie Table */}
      <div className="m-4 overflow-x-auto">
        <table className="min-w-[600px] w-full">
          <thead className="border border-gray-200 bg-gray-200">
            <tr className="text-center">
              <th>Name</th>
              <th>
                <div className="flex items-center justify-center gap-2">
                  <button onClick={handleAscendingRating}>
                    <i className="fa-solid fa-arrow-up"></i>
                  </button>
                  Ratings
                  <button onClick={handleDescendingRating}>
                    <i className="fa-solid fa-arrow-down"></i>
                  </button>
                  {sortOrder === "asc" && <span className="text-sm">🔼</span>}
                  {sortOrder === "desc" && <span className="text-sm">🔽</span>}
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {filteredMovies.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-6">
                  No movies found.
                </td>
              </tr>
            ) : (
              filteredMovies.map((movie) => (
                <tr
                  key={movie.id}
                  className="border border-b-2 text-center cursor-pointer hover:bg-gray-100"
                >
                  <td className="flex items-center px-6 py-4">
                    <img
                      className="h-[8rem] w-[6rem] sm:h-[10rem] sm:w-[8rem] object-cover rounded-lg shadow-md"
                      onClick={() => navigate(`/movie-details/${movie.id}`)}
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <div
                      className="m-4 text-sm sm:text-base"
                      onClick={() => navigate(`/movie-details/${movie.id}`)}
                    >
                      {movie.title}
                    </div>
                  </td>
                  <td className="text-sm sm:text-base">{movie.vote_average}</td>
                  <td className="text-sm sm:text-base">{movie.popularity}</td>
                  <td className="text-sm sm:text-base">
                    {genreids[movie.genre_ids[0]]}
                  </td>
                  <td
                    onClick={() => DeleteFromWatchList(movie)}
                    className="text-red-400 hover:text-red-600 transition-all"
                  >
                    Delete
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
