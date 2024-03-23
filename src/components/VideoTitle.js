import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>

      <p className="w-1/3 py-6">{overview}</p>
      <div>
        <button className="bg-white text-black  rounded-lg p-4 px-6 hover:bg-opacity-40">
          ▶️ Play
        </button>
        <button className="mx-3 bg-white text-black rounded-lg p-4 px-6">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
