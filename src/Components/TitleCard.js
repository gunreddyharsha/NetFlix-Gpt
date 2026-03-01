import React from 'react'


const TitleCard = (props) => {
  const { original_title, overview } = props;
  //
  return (
    <div className="pt-64 w-full min-h-full absolute aspect-video text-white pl-24 bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{original_title}</h1>
      <p className="py-4 w-1/4 font-normal">{overview}</p>
      <div>
        <button className="bg-white px-8 py-2 rounded-lg mr-4 text-black hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-white px-8 py-2 rounded-lg mr-3 text-black">
          More Info
        </button>
      </div>
    </div>
  );
}

export default TitleCard
