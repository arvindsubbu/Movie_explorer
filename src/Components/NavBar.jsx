import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="flex flex-wrap gap-4 sm:space-x-8 items-center p-4">
      <Link to="/">
        <img className="w-[50px] sm:w-[50px]" src={Logo} alt="Logo"/>
      </Link>
      <Link to="/" className="text-blue-500 font-bold text-xl sm:text-2xl md:text-3xl">
        Movies
      </Link>
      <Link to="/watchlist" className="text-blue-500 font-bold text-xl sm:text-2xl md:text-3xl">
        WatchList
      </Link>
    </div>
  );
}

export default NavBar;
