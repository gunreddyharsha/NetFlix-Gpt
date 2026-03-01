import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/Consts';
import { addPopularTVShows } from '../utils/TVShowsSlice';

const usePopularTVShows = () => {
    const dispatch = useDispatch();

    const getTopmoviesData = async () => {
      const url =
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1";
      let data = await fetch(url, API_OPTIONS);

      let moviesData = await data.json();

      dispatch(addPopularTVShows(moviesData.results));
    };

    useEffect(() => {
      getTopmoviesData();
    }, []);
}

export default usePopularTVShows
