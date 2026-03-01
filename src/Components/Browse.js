import Header from "./Header";
import MainContainer from "./MainContainer";
import useTopMoviesdata from "../customHooks/useTopMoviesdata";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import usePopularMoviesData from "../customHooks/usePopularMoviesData";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import useTrendingMoviesData from "../customHooks/useTrendingMoviesData";
import useAiringTodayTVShows from "../customHooks/useAiringTodayTVShows";
import usePopularTVShows from "../customHooks/usePopularTVShows";
import useUpcomingTvShows from "../customHooks/useUpcomingTvShows";
import useTopRatedTvShows from "../customHooks/useTopRatedTvShows";

const Browse = () => {
  const gptPage = useSelector((store) => store.gpt?.openGptPage);

  useTopMoviesdata();
  usePopularMoviesData();
  useUpcomingMovies();
  useTrendingMoviesData();

  useAiringTodayTVShows();
  usePopularTVShows();
  useTopRatedTvShows();
  useUpcomingTvShows();
  
  return (
    <div>
      <Header />
      {gptPage ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
