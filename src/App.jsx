
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Banner from './Components/Banner'
import Movies from './Components/Movies'
import Watchlist from './Components/Watchlist'
import MovieDetails from './Components/MovieDetails'
import { useEffect, useState } from 'react'
import { MovieContextWrapper } from './Components/MovieContext'

function App() {


//   const[watchList,setWatchList] = useState([]);

//  const handleAddtoWatchList = (movieObj)=>{
//  const newWatchList = [...watchList,movieObj];
//  localStorage.setItem('movies',JSON.stringify(newWatchList));
//  setWatchList(newWatchList);
//  }
 
//  const handleRemoveFromWatchList = (movieObj)=>{
//   const updatedWatchList = watchList.filter((movie) => movie.id != movieObj.id);
//   setWatchList(updatedWatchList);
//   localStorage.setItem('movies',JSON.stringify(updatedWatchList));
//  }

//  useEffect(()=>{
//    let value = localStorage.getItem('movies');
//    if(!value){
//     return;
//    }
//    setWatchList(JSON.parse(value));
//  },[])
 
  return (
    <>
    <BrowserRouter >
    <MovieContextWrapper>
    {/* <MovieContext.Provider  value = {{handleAddtoWatchList, setWatchList, watchList, handleRemoveFromWatchList, handleAddtoWatchList}}> */}
    <NavBar/>
     <Routes>
     
      <Route path='/' element={ <> <Banner/> <Movies />  </>}></Route>

       <Route path='/watchlist' element={<Watchlist/>}/>
       <Route path='/movie-details/:id' element={<MovieDetails/>}/>
      
     </Routes>
     {/* </MovieContext.Provider> */}
     </MovieContextWrapper>
      </BrowserRouter>
      {/* <Routes>
        <Route path='/movie-details' element={<MovieDetails/>}/>
      </Routes> */}
    </>
  )
}

export default App
