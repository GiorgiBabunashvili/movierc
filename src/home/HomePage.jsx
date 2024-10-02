import React, { useState } from "react";
import Homes from "../components/homes/Homes";
import Upcomming from "../components/upcomming/Upcomming";
import { latest, recommended, upcome } from "../dummyData";
import Trending from "../components/trending/Trending";

const HomePage = () => {
  const [items, setItems] = useState(upcome);
  const [item, setLatest] = useState(latest);
  const [rec, setRec] = useState(recommended);

  return (
    <>
      <Homes />
      <Upcomming item={items} title="Upcomming Movies" />
      <Upcomming item={item} title="Latest Movies" />
      <Trending />
      <Upcomming item={rec} title="Recomended Movies" />
    </>
  );
};

export default HomePage;
