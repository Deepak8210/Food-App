import React from "react";

import ShopCarousel from "./ShopCarousel";

const ShopHome = () => {
  return (
    <div className="w-full min-h-screen font-Roboto mb-8 flex flex-col justify-center">
      <div className="w-full h-full px-4 md:px-[9%]">
        <h1 className="font-bold text-[2.5rem] text-center lg:text-left">
          Shop our favourites
        </h1>
      </div>
      <ShopCarousel />
    </div>
  );
};

export default ShopHome;
