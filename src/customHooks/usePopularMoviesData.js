import React from "react";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Consts";
import { useDispatch } from "react-redux";
import { addpopularMovies } from "../utils/MovieSlice";

const usePopularMoviesData = () => {

  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const url ="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    
    dispatch(addpopularMovies(json.results));
  }

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMoviesData;
