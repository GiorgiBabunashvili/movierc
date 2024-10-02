import React, { useState } from "react";
import Homes from "../components/homes/Homes";
import Upcomming from "../components/upcomming/Upcomming";
import { latest, upcome } from "../dummyData";

const HomePage = () => {
  const [items, setItems] = useState(upcome);
  const [item, setItem] = useState(latest);

  return (
    <>
      <Homes />
      <Upcomming item={items} title="Upcomming Movies" />
      <Upcomming item={item} title="Latest Movies" />
    </>
  );
};

export default HomePage;
