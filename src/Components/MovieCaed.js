

const MovieCaed = ({ each }) => {
    
   if (!each?.poster_path) return ; 
   
  return (
    <div className={`w-36 flex-shrink-0 mr-5 mt-3 `}>
      <img
        //src={`https://image.tmdb.org/t/p/original/${each?.poster_path}.svg`}
        className="rounded-lg"
        src={`https://image.tmdb.org/t/p/w500/${each?.poster_path}.jpg`}
        alt="moviePoster"
      />
    </div>
  );
};

export default MovieCaed
