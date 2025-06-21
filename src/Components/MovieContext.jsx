import React from "react";
import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const MovieContext = createContext();

export const  MovieContextWrapper  = ({ children })=> {
  const [watchList, setWatchList] = useState([]);

  const handleAddtoWatchList = (movieObj) => {
    const newWatchList = [...watchList, movieObj];
    localStorage.setItem("movies", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  const handleRemoveFromWatchList = (movieObj) => {
    const updatedWatchList = watchList.filter(
      (movie) => movie.id != movieObj.id
    );
    setWatchList(updatedWatchList);
    localStorage.setItem("movies", JSON.stringify(updatedWatchList));
  };

  useEffect(() => {
    let value = localStorage.getItem("movies");
    if (!value) {
      return;
    }
    setWatchList(JSON.parse(value));
  }, []);

  //test
  const[movies, setMovie] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  //console.log(movies);
  
 
 const nextPage = () => setPageNo(pageNo + 1);
 const prevPage = () =>{
  if(pageNo == 1){
    return 
  }
  setPageNo(pageNo - 1);
 }  
 useEffect(() =>{
  axios
  .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=19ce58e98478e0ca1a147edde0568ebe&language=en-US&page=${pageNo}`)
  .then(function (res) {
    // console.log(res.data.results);
    setMovie(res.data.results);
  });
  
 },[pageNo])
 
 //console.log(movies);
 
 
//test end
  return (
    <MovieContext.Provider
      value={{
        handleAddtoWatchList,
        setWatchList,
        watchList,
        handleRemoveFromWatchList,
        movies,
        nextPage,
        prevPage,
        pageNo
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
