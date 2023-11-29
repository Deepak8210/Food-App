import React from "react";
import abstract from "../assets/images/abstract.png";
import images from "../utils/images.js";
import offerbg from "../assets/images/offerbg.jpeg";
import offerBurger from "../assets/images/offer-burger.png";
import offerCircle from "../assets/images/offer-circle.png";
import decorOnion from "../assets/images/decor-onion.png";
import decorLeaf from "../assets/images/decor-leaf.png";
import { useDispatch } from "react-redux";
import { setCategroy } from "../redux/slices/MenuCategory.js";
import { useNavigate } from "react-router-dom";

const Offer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      className="w-full min-h-full mt-20 text-white bg-[#FAF7F2]  "
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
      <img src={decorOnion} alt="" className="absolute right-0 top-10  " />

      <img src={decorLeaf} alt="" className="absolute top-10 " />

      <div className="w-full h-full grid lg:grid-cols-2 md:px-[2%] px-4 lg:py-[5%] relative lg:pb-[7%] ">
        <div className=" flex flex-col text-center lg:text-left h-full pt-[50%] md:pt-[20%] lg:pt-0 lg:justify-center relative">
          <div
            id="foodmenu"
            className="flex w-full justify-center lg:justify-start "
          >
            <h2 className=" font-Roboto font-bold text-black text-[min(12vw,4.5rem)] uppercase">
              American
            </h2>
          </div>

          <h1
            id="foodmenu"
            className="font-[700] font-Roboto text-[min(20vw,7.5rem)] uppercase lg:text-left text-foodYellow leading-[4.2rem]"
          >
            Burger
          </h1>
          <h2
            id="foodmenu"
            className="text-foodGreen font-bold text-[min(8vw,2.2rem)] lg:text-left mt-2"
          >
            Burger that suits your hunger!
          </h2>
          <p className="text-sm mt-1 leading-6 lg:text-left text-gray-600">
            *Additional charge for premium toppings. Minimum of 2 required.
          </p>
          <div className="w-full flex flex-col lg:flex-row items-center lg:justify-start mt-3 gap-2">
            <button
              onClick={() => {
                navigate("/shop");
                dispatch(setCategroy("burger"));
              }}
              className="bg-foodYellow uppercase py-2.5 rounded-full px-6 w-fit font-[500] lg:mt-8 text-black "
            >
              Grab yours
            </button>
            <h2 className="text-4xl text-foodGreen font-Roboto font-bold lg:mt-8">
              $12.99{" "}
              <span className="line-through text-gray-400 text-2xl">
                {" "}
                $19.99
              </span>
            </h2>
          </div>
          <div className="absolute right-[5%] z-50 top-[20%] flex w-[min(20vw,12rem)]">
            <img
              src={images.decor_6}
              alt=""
              className="object-contain w-full"
            />
          </div>
        </div>
        <div className=" w-full h-full pb-[30%]  md:pb-[15%] lg:pb-0 md:mt-4 relative">
          <img
            src={offerBurger}
            alt=""
            className="w-[min(60vw,70rem)] mx-auto mt-3 z-50 drop-shadow-[10px_20px_10px_rgba(0,0,0,0.5)]"
          />
          <div className="absolute -right-[7%] z-50 top-[15%] flex w-[min(20vw,10rem)]"></div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
