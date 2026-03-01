import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/Consts';
import { addTvShowTrailer } from '../utils/TVShowsSlice';

const useTvShowVideo = (Tvshowid) => {
  const dispatch = useDispatch();
  const getVideoTrailer = async () => {
    "https://api.themoviedb.org/3/tv/series_id/videos?language=en-US";
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/" + Tvshowid + "/videos?language=en-US",

      API_OPTIONS,
    );
    const json = await data.json();
    let movieTrailer = json.results.filter((each) => each.type === "Trailer");
    const finalTrailer = movieTrailer[0];
    dispatch(addTvShowTrailer(finalTrailer));
  };

  useEffect(() => {
    getVideoTrailer();
  }, []);
};

export default useTvShowVideo
