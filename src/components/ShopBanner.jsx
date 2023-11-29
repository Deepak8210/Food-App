import React from "react";
import BannerBg from "../assets/images/banner/BannerBg.jpg";
import banner1 from "../assets/images/banner/banner1.jpg";
import banner2 from "../assets/images/banner/banner2.jpg";
import banner3 from "../assets/images/banner/banner3.jpg";
import offerbg from "../assets/images/offerbg.jpeg";
import discount from "../assets/images/banner/discount.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategroy } from "../redux/slices/MenuCategory";

const ShopBanner = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      className="w-full min-h-screen px-4 lg:px-[7%] bg-gray-100 flex flex-col justify-center py-8"
      style={{
        backgroundImage: `url(${offerbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // minHeight: "100vh",
        paddingLeft: "7%",
        paddingRight: "6%",
        position: " relative",
        overflow: "hidden",
      }}
    >
      <div className="grid xl:grid-cols-2 gap-3">
        <div className="border bg-transparent rounded-3xl h-[31rem] overflow-hidden group relative">
          <img
            src={banner1}
            alt=""
            className="w-full h-full object-cover group-hover:scale-125 duration-[400ms] absolute left-0 top-0"
          />
          <div className="z-100 absolute top-0 left-0 flex text-center flex-col w-full p-2 mt-12">
            <h4 className="font-Norican text-foodYellow text-2xl z-20">
              Today's Best Deal
            </h4>
            <h1 className="uppercase font-[800] font-Roboto text-[min(13vw,3.5rem)] leading-[3rem] drop-shadow-lg text-white mt-6">
              Delicious pizza
            </h1>
            <p className="text-white font-thin text-[1.1rem] md:mt-2">
              The best option of the day in your town
            </p>
          </div>
          <img
            src={discount}
            alt=""
            className="absolute right-0 bottom-[25%] md:bottom-[30%] md:right-[10%] w-[10rem]"
          />
        </div>

        {/* 
       second one */}

        <div className="grid md:grid-cols-2 gap-3">
          <div className="border  rounded-3xl relative h-[31rem] overflow-hidden group">
            {" "}
            <img
              src={banner2}
              alt=""
              className="w-full h-full object-cover group-hover:scale-125 duration-[400ms] absolute left-0 top-0"
            />
            <div className="z-100 absolute bottom-0 left-0 flex text-center flex-col w-full p-2 mb-4">
              <h4 className="font-Norican text-gray-200 text-2xl z-20">
                Crispy & Spicy
              </h4>
              <h1 className="uppercase font-[800] font-Roboto text-[min(13vw,3.5rem)] leading-[3rem] drop-shadow-lg text-white mt-4">
                Fried chicken
              </h1>
              <p className="text-white font-thin text-[1.1rem] md:mt-2">
                Offer till weekend only
              </p>
              <button
                onClick={() => {
                  navigate("/shop");
                  dispatch(setCategroy("chicken"));
                }}
                className="font-semibold py-2 px-4 bg-foodYellow rounded-lg uppercase w-fit mx-auto mt-1"
              >
                shop now
              </button>
            </div>
          </div>
          <div className="border  rounded-3xl relative h-[31rem] overflow-hidden group">
            {" "}
            <img
              src={banner3}
              alt=""
              className="w-full h-full object-cover group-hover:scale-125 duration-[400ms] absolute left-0 top-0"
            />
            <div className="z-100 absolute top-0 left-0 flex text-center flex-col w-full p-2 mt-12">
              <h4 className="font-Norican text-[#CF0000] text-2xl z-20">
                Today's Best Deal
              </h4>
              <h1 className="uppercase font-[800] font-Roboto text-[min(13vw,3rem)] leading-[3rem] drop-shadow-lg text-white mt-4">
                Juicy Pasta
              </h1>
              <p className="text-white font-thin text-[1.1rem] md:mt-2">
                Super Delicious
              </p>
              <button
                onClick={() => {
                  navigate("/shop");
                  dispatch(setCategroy("pasta"));
                }}
                className="font-semibold py-2 px-4 bg-foodYellow rounded-lg uppercase w-fit mx-auto mt-2"
              >
                get now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
