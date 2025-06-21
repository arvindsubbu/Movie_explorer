import React from "react";
import { MovieContext } from "./MovieContext";
import { useContext } from "react";

function Pagination() {
  const { pageNo, nextPage, prevPage } = useContext(MovieContext);
  return (
    <div className="flex justify-center gap-6 mt-6 p-4 bg-gray-200 text-xl rounded-lg">
      <button
        onClick={prevPage}
        className="hover:bg-gray-300 rounded-full p-2 transition-all"
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <div className="font-bold">{pageNo}</div>

      <button
        onClick={nextPage}
        className="hover:bg-gray-300 rounded-full p-2 transition-all"
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Pagination;
