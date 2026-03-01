import React from "react";
import MovieCaed from "./MovieCaed";
import Popup from "reactjs-popup";
import PopupCard from "./PopupCard";



const MoviesList = (props) => {
  const { title, movies } = props;

  return (
    <div className={`pl-6`}>
      <h1 className="text-2xl font-bold text-white py-3  ">{title}</h1>

      <div className={""}>
        <div className="flex  overflow-x-scroll scrollbar-hide">
          {movies.map((each) => (
            each?.backdrop_path&&
            <Popup
              modal
              lockScroll
              trigger={
                <button type="button" className={`trigger-button`}>
                  <MovieCaed each={each} />
                </button>
              }
              key={each.id}
            >
              {(close) => (
                <div className="flex justify-center ">
                  <div className="w-[600px] bg-black text-white rounded-t-lg">
                      <PopupCard each={each} close={close} />
                  </div>
                </div>
              )}
            </Popup>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
