import React from 'react'
import Popup from 'reactjs-popup';
import PopupCard from './PopupCard';
import MovieCaed from './MovieCaed';

const TvShowsList = (props) => {
  const { title, TVshows } = props;
  //console.log(TVshows)
  return (
    <div className={`pl-6`}>
      <h1 className="text-2xl font-bold text-white py-3  ">{title}</h1>

      <div className={""}>
        <div className="flex  overflow-x-scroll scrollbar-hide">
          {TVshows.map((each) => (
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
                    {each?.backdrop_path && (
                      <PopupCard each={each} close={close} />
                    )}
                  </div>
                </div>
              )}
            </Popup>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TvShowsList
