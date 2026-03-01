import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/Consts';
import { addTopRatedTvShows } from '../utils/TVShowsSlice';

const useTopRatedTvShows = () => {
   const dispatch = useDispatch();

   const getTopmoviesData = async () => {
     const url =
       "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";
     let data = await fetch(url, API_OPTIONS);

     let moviesData = await data.json();

     dispatch(addTopRatedTvShows(moviesData.results));
   };

   useEffect(() => {
     getTopmoviesData();
   }, []);
}

export default useTopRatedTvShows
