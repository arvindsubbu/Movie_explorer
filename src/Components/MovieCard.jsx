import React from "react";
import { useContext } from "react";
import { MovieContext } from "./MovieContext";
import { useNavigate } from "react-router-dom";
function MovieCard({ movieObject }) {
  const { watchList, handleRemoveFromWatchList, handleAddtoWatchList } =
    useContext(MovieContext);

  function doesContain() {
    for (let movie of watchList) {
      if (movie.id === movieObject.id) {
        return true;
      }
    }
    return false;
  }
  const navigate = useNavigate();
  function openDetails(id) {
    navigate(`/movie-details/${id}`);
  }
  // console.log('movieobj',movieObject.id);
  return (
    <div
      className="h-[40vh] w-[70%] sm:w-[45%] md:w-[30%] lg:w-[200px] bg-cover bg-center rounded-lg cursor-pointer hover:scale-110 duration-300 flex items-end flex-col justify-between"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObject.poster_path})`,
      }}
      onClick={() => openDetails(movieObject.id)}
    >
      {doesContain() ? (
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveFromWatchList(movieObject);
          }}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleAddtoWatchList(movieObject);
          }}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="text-white w-full text-center text-base sm:text-lg md:text-xl p-2 bg-gray-900/60 rounded-lg hover:bg-black">
        {movieObject.title}
      </div>
    </div>
  );
}

export default MovieCard;
