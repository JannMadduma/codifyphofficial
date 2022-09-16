import React from "react";

const Banner = ({}) => {
  return (
    <div
      className="row"
      style={{
        backgroundImage: `url("/img/bannerBackground.png")`,
        height: 600,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="col">
        <img src={"/img/logoRoof.png"} />
        <h2>Estate Window Shopping</h2>
        <p>Find your new home.</p>
      </div>
      <div className="col">
        <input value="Search Homes"></input>
        <br />
        <button>See Current Listings</button>
      </div>
    </div>
  );
};

export default Banner;
