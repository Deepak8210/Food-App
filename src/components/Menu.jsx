import React, { useState } from "react";
import shopCaro from "../assets/images/shop/shopCaro-1.png";
import { FaShoppingBasket } from "react-icons/fa";
import images from "../utils/images";

import { homeMenuData } from "../FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategroy } from "../redux/slices/CategorySlice";
import { addToCart } from "../redux/slices/CartSlice";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <section
      id="shortMenu"
      className="min-h-screen w-full px-4 lg:px-[7%] mt-16 pb-8"
      style={{
        backgroundImage: `url(${images.serv_Bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className=" text-center">
        <h1 className="text-foodYellow text-[min(8.2vw,2.8rem)] font-Norican drop-shadow-xl">
          Our Menu
        </h1>
        <h1 className=" font-Poppins font-semibold tracking-tight drop-shadow-xl text-[min(9vw,2.8rem)] text-center md:leading-[3.5rem] leading-8">
          Menu that always make <br /> you fall in love
        </h1>
        <div className="w-full flex flex-col md:flex-row md:gap-6 gap-2 justify-center mt-4 mb-12">
          <button
            onClick={() => dispatch(setCategroy("breakfast"))}
            className={`${
              selectedCategory === "breakfast" ? "bg-foodYellow" : ""
            }  active:scale-95 border shadow-lg hover:bg-foodYellow duration-300 uppercase text-lg font-semibold md:py-3 py-2 px-8 rounded-full`}
          >
            Breakfast
          </button>
          <button
            onClick={() => dispatch(setCategroy("lunch"))}
            className={`${
              selectedCategory === "lunch" ? "bg-foodYellow" : ""
            }  active:scale-95 border shadow-lg hover:bg-foodYellow duration-300 uppercase text-lg font-semibold md:py-3 py-2 px-8 rounded-full`}
          >
            Lunch
          </button>
          <button
            onClick={() => dispatch(setCategroy("dinner"))}
            className={`${
              selectedCategory === "dinner" ? "bg-foodYellow" : ""
            }  active:scale-95 border shadow-lg hover:bg-foodYellow duration-300 uppercase text-lg font-semibold md:py-3 py-2 px-8 rounded-full`}
          >
            Dinner
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {homeMenuData
          .filter((food) => selectedCategory === food.category)
          .map(({ id, name, img, rating, price }) => (
            <div
              className="border flex w-full h-full p-2 rounded-[1.5rem]"
              key={id}
            >
              <div className="flex bg-[rgba(255,194,34,0.2)] rounded-[1rem] w-full items-center gap-3 relative">
                {" "}
                <div className="flex lg:h-32 lg:w-32 h-28 w-28 items-center">
                  <img
                    src={img}
                    alt=""
                    className="object-contain w-full scale-105 drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)]"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-semibold text-lg">{name}</h4>
                  <div> ★ ★ ★ ★ ☆</div>
                  <h6 className="font-bold text-foodYellow">${price}</h6>
                </div>
                <FaShoppingBasket
                  onClick={() =>
                    dispatch(addToCart({ id, name, img, price, qty: 1 }))
                  }
                  className="text-[2.5rem]  rounded-2xl bg-foodYellow p-3 hover:text-white hover:brightness-95 absolute right-2 bottom-2"
                />
              </div>
            </div>
          ))}
      </div>
      <div className="w-full flex justify-center mt-4">
        <button
          onClick={() => navigate("/shop")}
          className="active:scale-95 duration-200 shadow-lg w-fit py-2 px-4 bg-foodYellow rounded-lg font-semibold uppercase font-Roboto"
        >
          view full menu
        </button>
      </div>
    </section>
  );
};

export default Menu;
