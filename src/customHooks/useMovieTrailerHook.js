import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Consts';
import { addMovieTrailer } from '../utils/MovieSlice';
import { useDispatch } from 'react-redux';

const useMovieTrailerHook = (movieId) => {
 const dispatch=useDispatch()
  const getVideoTrailer = async () => {
    
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
      movieId +
      "/videos?language=en-US",
      API_OPTIONS,
    );
    const json = await data.json();
    let movieTrailer = json.results.filter((each) => each.type === "Trailer");
    const finalTrailer = movieTrailer[0];
    dispatch(addMovieTrailer(finalTrailer));
  };

  useEffect(() => {
    getVideoTrailer();
  }, []);
}

export default useMovieTrailerHook
