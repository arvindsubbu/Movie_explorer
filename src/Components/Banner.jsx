import React, { useEffect, useState } from "react";
import { MovieContext } from "./MovieContext";
import { useContext } from "react";

function Banner() {
  const { movies } = useContext(MovieContext);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setNext();
    }, 3000);
    return () => clearInterval(timerId);
  }, [current, movies]);

  const setNext = () => {
    const nxt = (current + 1) % movies.length;
    setCurrent(nxt);
    // console.log(movies[current].title);
  };

  const setPrev = () => {
    setCurrent(current == 0 ? movies.length - 1 : current - 1);
  };
  // console.log(current);

  if (movies.length == 0 || !movies[current]) {
    return (
      <div className="h-[20vh] flex justify-center items-center text-white">
        Loading...
      </div>
    );
  }
  return (
    <>
      <div
        className="relative h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end transition-all duration-2000 ease-in-out"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies[current].backdrop_path})`,
        }}
      >
        <button
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl sm:text-6xl hover:text-black z-10"
          onClick={setPrev}
        >
          <i class="fa-solid fa-circle-arrow-left"></i>
        </button>
        <div className="text-white w-full text-center text-lg sm:text-2xl md:text-3xl bg-black/60 p-2">
          {movies[current].title}
        </div>
        <button
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl sm:text-6xl hover:text-black z-10"
          onClick={setNext}
        >
          <i class="fa-solid fa-circle-arrow-right"></i>
        </button>
      </div>
    </>
  );
}

export default Banner;
