import React, { useContext } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination';
import { MovieContext } from './MovieContext';

function Movies() {
const {movies} = useContext(MovieContext);
 
  return (
    <div>
    <div className=' text-center text-2xl sm:text-3xl font-bold my-6'>
       <h1>Trending Movies</h1> 
    </div>
    <div className='flex flex-wrap gap-8 justify-evenly '>
      {
        movies.map((movieObj,index) => 
         <MovieCard key={index} movieObject = {movieObj}/>
       )
      }
    </div>
    <Pagination />
    </div>
  )
}

export default Movies