

const PopupCard = ({ each, close }) => {
   const { original_title, overview, name } = each;
  let title;
  if (name === undefined) {
    title = original_title;
  } else {
    title = name;
  }

  return (
    <div className=" h-1/2 relative">
      <div className="flex justify-end mr-3 ">
        <button
          type="button"
          className="trigger-button   absolute text-right  hover:bg-white py-2 px-2 my-1 rounded-lg"
          onClick={() => close()}
        >
          ❌
        </button>
      </div>
      {each.backdrop_path!==null?
       <img
        className="w-[600px] h-[300px] rounded-t-lg "
        src={`https://image.tmdb.org/t/p/w200/${each.backdrop_path}.png`}
        alt="movie Poster"
      />:
      <div>no poster </div>
      }
    
      <div className="p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="py-4  font-normal">{overview}</p>
        <div>
          <button className="bg-white px-8 py-2 rounded-lg mr-4 text-black hover:bg-opacity-80">
            Play
          </button>
          <button className="bg-white px-8 py-2 rounded-lg mr-3 text-black">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
