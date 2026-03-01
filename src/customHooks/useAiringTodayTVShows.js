import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/Consts';
import { addAiringShows } from '../utils/TVShowsSlice';

const useAiringTodayTVShows = () => {
  const dispatch = useDispatch();
  const getVideoTrailer = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1',
      API_OPTIONS,
    );
    const json = await data.json();
  
    dispatch(addAiringShows(json.results));
  };

  useEffect(() => {
    getVideoTrailer();
  }, []);
}

export default useAiringTodayTVShows

