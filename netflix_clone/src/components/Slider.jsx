import React from "react";
import { CardSlider } from "./CardSlider";

export default function Slider({ movies }) {
  const getMoviesWithRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <div>
      <CardSlider title="Trending Now" data={getMoviesWithRange(0, 10)} />
      <CardSlider title="New Releases" data={getMoviesWithRange(10, 20)} />
      <CardSlider
        title="Blockbuster Movies"
        data={getMoviesWithRange(20, 30)}
      />
      <CardSlider title="Populer Now " data={getMoviesWithRange(30, 40)} />
      <CardSlider title="Action Movies" data={getMoviesWithRange(40, 50)} />
      <CardSlider title="Epics" data={getMoviesWithRange(50, 60)} />
    </div>
  );
}
