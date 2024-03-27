import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 pr-4 flex">
      <img alt="movie img" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
