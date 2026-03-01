import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopMovies } from "../utils/MovieSlice";
import { API_OPTIONS } from "../utils/Consts";

const useTopMoviesdata = () => {
  const dispatch = useDispatch();

  const getTopmoviesData = async () => {
    const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
    let data = await fetch(url, API_OPTIONS);

    let moviesData = await data.json();

    dispatch(addTopMovies(moviesData.results));
  };

  useEffect(() => {
    getTopmoviesData();
  }, []);
};
export default useTopMoviesdata;
