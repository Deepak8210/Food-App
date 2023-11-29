import React, { useRef, useEffect } from "react";

import { FaShoppingBasket, FaHeart } from "react-icons/fa";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { shopCaro } from "../FoodData";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const ShopCarousel = () => {
  const dispatch = useDispatch();
  //custom btn functionality
  const splideRef = useRef(null);
  const nextBtnClickHandler = () => {
    splideRef.current.splide.go("+1");
  };

  const prevBtnClickHandler = () => {
    splideRef.current.splide.go("-1");
  };

  useEffect(() => {
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    nextBtn.addEventListener("click", nextBtnClickHandler);
    prevBtn.addEventListener("click", prevBtnClickHandler);

    return () => {
      nextBtn.removeEventListener("click", nextBtnClickHandler);
      prevBtn.removeEventListener("click", prevBtnClickHandler);
    };
  }, []);

  return (
    <div>
      <div className="flex gap-8 px-4 lg:px-[10%] lg:justify-end justify-center py-1">
        <button
          className=" rounded-full border-2  hover:bg-foodYellow"
          id="prevBtn"
        >
          <RiArrowLeftDoubleFill className="text-2xl" />
        </button>
        <button
          className=" rounded-full border-2  hover:bg-foodYellow"
          id="nextBtn"
        >
          <RiArrowRightDoubleFill className="text-2xl" />
        </button>
      </div>
      <Splide
        ref={splideRef}
        className="w-full px-[7%] min-h-[450px]"
        options={{
          type: "loop",
          autoplay: true,
          pagination: false,
          arrows: false,
          perPage: 4,
          perMove: 1,
          breakpoints: {
            1025: {
              perPage: 3,
            },
            769: {
              perPage: 2,
            },

            480: {
              perPage: 1,
            },
          },
        }}
      >
        {shopCaro.map(({ id, name, rating, price, img, desc }) => (
          <SplideSlide className="" key={id}>
            <div className="flex items-center justify-center h-full">
              <div className="w-[90%] border flex flex-col p-2 rounded-[28px] group h-full">
                <div className="flex rounded-[20px] p-12 relative">
                  <div className="w-full h-[50%] bg-yellow-300 absolute top-1/2 left-0 opacity-20  rounded-[24px] group-hover:h-full group-hover:opacity-100 group-hover:top-0 duration-[400ms]  ease-in-out "></div>
                  <FaHeart className="absolute top-3 right-3 text-red-500 text-xl" />
                  <img
                    src={img}
                    alt=""
                    className="w-full object-contain drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)] group-hover:scale-125 duration-[400ms] ease-in-out"
                  />
                </div>
                <div className="flex flex-col m-2 mt-3 gap-1">
                  <div className="flex">
                    {[...Array(rating)].map((_, index) => (
                      <div key={index} className="text-foodYellow text-xl">
                        ★
                      </div>
                    ))}
                    {[...Array(5 - rating)].map((_, index) => (
                      <div key={index} className="text-foodYellowz text-xl">
                        ☆
                      </div>
                    ))}
                  </div>
                  <h3 className="font-semibold text-lg">{name}</h3>
                  <p className="text-sm font-thin font-OpenSans">
                    {desc.slice(0, 52) + "..."}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xl font-semibold text-[#FFC222]">
                      ${price}
                    </span>
                    <FaShoppingBasket
                      onClick={() =>
                        dispatch(addToCart({ id, name, img, price, qty: 1 }))
                      }
                      className="text-4xl rounded-2xl bg-yellow-300 p-2 hover:text-white hover:bg-yellow-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ShopCarousel;
