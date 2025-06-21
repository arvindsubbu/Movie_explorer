import React from 'react'
import { useContext } from 'react'
import { MovieContext } from './MovieContext'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

function MovieDetails() {
  const {movies} = useContext(MovieContext);
  const{id} = useParams();
  //console.log('details');
  const[currMovie,setCurrMovie] = useState(null);
  useEffect(()=>{
    for(const movie of movies){
      if(movie.id == id){
          setCurrMovie(movie);
          break;
      }
    }
  },[id,movies]);
  
 // console.log(currMovie);
return (
  <div>
    <div
      className="h-[30vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${
          currMovie == null ? "Loading..." : currMovie.backdrop_path
        })`,
      }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start m-4 md:m-20">
        {/* Poster */}
        <div
          className="h-[40vh] w-[20vw] md:h-[40vh] md:w-[200px] bg-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${
              currMovie == null ? "Loading..." : currMovie.poster_path
            })`,
          }}
        ></div>

        {/* Title */}
        <div className="h-[15vh] w-[90vw] text-white text-3xl font-bold ml-8 mt-4 md:mt-0">
          {currMovie == null ? "Loading..." : currMovie.title}
          <div className='text-sm md:text-base mt-2'>
               Overview: {currMovie == null ? "Loading..." : currMovie.overview}  
          </div>
          <div className='text-sm md:text-base mt-2'>
               Release Date: {currMovie == null ? "Loading..." : currMovie.release_date}  
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default MovieDetails