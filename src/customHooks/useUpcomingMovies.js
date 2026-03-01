import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Consts";
import { addupcomingMovies } from "../utils/MovieSlice";
import { useEffect } from "react";


const useUpcomingMovies = () => {
 const dispatch = useDispatch();

 const getupcomingmoviesData = async () => {
   const url =
     "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
   let data = await fetch(url, API_OPTIONS);

   let moviesData = await data.json();
  
   dispatch(addupcomingMovies(moviesData.results));
 };

 useEffect(() => {
   getupcomingmoviesData();
 }, []);
}

export default useUpcomingMovies

