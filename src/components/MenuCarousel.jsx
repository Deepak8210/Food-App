import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { category } from "../FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategroy } from "../redux/slices/MenuCategory";

const MenuCarousel = () => {
  const dispatch = useDispatch();

  return (
    <Splide
      className="w-full md:px-[7%]"
      options={{
        height: "250px",
        perPage: 4,
        perMove: 1,
        autoplay: true,
        type: "loop",
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
      {category.map(({ name, img, bg, products }, index) => (
        <SplideSlide key={index}>
          <div
            onClick={() => dispatch(setCategroy(name.toLowerCase()))}
            className="flex items-center justify-center h-full text-white"
          >
            <div
              className={` w-[90%] flex rounded-md justify-around ${bg} p-1 group`}
            >
              <div className="flex flex-col justify-center gap-1">
                <h1 className="font-bold ">{name}</h1>
                <span className="text-xs">{products + " "} Products</span>
              </div>
              <div className="flex items-center justify-center group-hover:scale-110 duration-300">
                <img
                  src={img}
                  alt="food"
                  className="drop-shadow-[10px_15px_10px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[10px_15px_5px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default MenuCarousel;
