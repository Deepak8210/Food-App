import React from "react";
import newsDecor1 from "../assets/images/news_decor.png";
import newsDecor2 from "../assets/images/news_decor2.png";
import newsDecor3 from "../assets/images/news_decor3.png";

const Newsletter = () => {
  return (
    <div
      id="newsletter"
      className="w-full h-[30rem] relative flex items-center justify-center flex-col px-2 lg:px-[7%]"
    >
      <img
        src={newsDecor1}
        alt=""
        className="absolute md:bottom-0 md:right-0 -bottom-10  -z-10"
      />
      <img
        src={newsDecor2}
        alt=""
        className="absolute md:bottom-[20%] md:left-0 -top-28 -left-42 -z-10"
      />
      <img
        src={newsDecor3}
        alt=""
        className="absolute md:bottom-[2%] md:left-[5%] -z-10 md:block hidden"
      />
      <h2 className="text-foodGreen text-[2.5rem] font-Norican drop-shadow-lg">
        Newsletter
      </h2>
      <h2 className="font-semibold font-Poppins text-[2.3rem] text-center drop-shadow-xl">
        Get <span className="text-foodYellow">10%</span> off your order!
      </h2>
      <p className="text-gray-500 font-Poppins font-[200] text-center ">
        Enter your email and receive a 10% discount on your next order!
      </p>
      <div className="border p-1.5 rounded-md lg:w-[50%] md:w-3/4 flex mt-8 bg-white">
        <input
          type="text"
          className="w-full outline-none font-Poppins font-[200] bg-transparent"
          placeholder="enter your email here"
        />
        <button className="bg-foodYellow py-2 px-4 uppercase rounded-[0.2rem] font-semibold">
          subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
