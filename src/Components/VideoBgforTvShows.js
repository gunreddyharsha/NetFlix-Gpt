import React from 'react'
import { useSelector } from 'react-redux';
import useTvShowVideo from '../customHooks/useTvShowVideo';

const VideoBgforTvShows = ({ Tvshowid }) => {
  const tvShowDetails = useSelector((store) => store.TVShows?.TvshowTrailer);
  useTvShowVideo(Tvshowid);
  //absolute top-1/2 left-1/2 min-w-full min-h-full-translate-x-1/2 -translate-y-1/2 scale-150 pointer-events-none
  return (
    <div className="min-w-full min-h-full ">
      <iframe
        className=" min-w-full min-h-full  aspect-video  "
        src={`https://www.youtube.com/embed/${tvShowDetails?.key}?autoplay=1&mute=1&controls=0&loop=10&playlist=${tvShowDetails?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBgforTvShows

