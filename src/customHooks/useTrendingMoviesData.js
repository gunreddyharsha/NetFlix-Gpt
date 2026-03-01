import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/Consts';
import { addTrendingMovies } from '../utils/MovieSlice';

const useTrendingMoviesData = () => {
 const dispatch = useDispatch();

 const getTrendingmoviesData = async () => {
   const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
   let data = await fetch(url, API_OPTIONS);

   let moviesData = await data.json();
  
   dispatch(addTrendingMovies(moviesData.results));
 };

 useEffect(() => {
   getTrendingmoviesData();
 }, []);
}

export default useTrendingMoviesData
