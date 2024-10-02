import React from "react";

const Ucard = ({ item: { id, cover, name, time } }) => {
  return (
    <>
      <div className="MovieBox">
        <div className="img">
          <img src={cover} alt="img" />
        </div>
      </div>
    </>
  );
};

export default Ucard;
