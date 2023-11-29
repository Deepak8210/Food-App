import React, { useEffect } from "react";
import images from "../utils/images.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-full mt-20 text-white">
      <Splide
        options={{
          rewind: true,
          gap: 0,
          type: "loop",
          pagination: false,
          autoplay: true,
          pauseOnHover: false,
          arrows: false,
        }}
      >
        <SplideSlide
          style={{
            backgroundImage: `url(${images.homeBg_1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "100vh",
            paddingLeft: "7%",
            paddingRight: "6%",
            position: " relative",
          }}
        >
          <div className="absolute right-0 bottom-0 flex w-[min(20vw,10rem)]">
            <img
              src={images.decor_1}
              alt=""
              className="object-contain w-full"
            />
          </div>
          <div className="absolute left-6 top-10 flex w-[min(20vw,8rem)]">
            <img
              src={images.decor_2}
              alt=""
              className="object-contain w-full"
            />
          </div>
          <div className="absolute right-0 top-0 flex w-[min(20vw,12rem)]">
            <img
              src={images.decor_3}
              alt=""
              className="object-contain w-full"
            />
          </div>

          <div className="absolute left-0 z-50 bottom-[32%] flex w-[min(20vw,10rem)]">
            <img
              src={images.decor_4}
              alt=""
              className="object-contain w-full"
            />
          </div>
          <div className="absolute left-[30%] z-50 bottom-0 flex w-[min(20vw,10rem)]">
            <img
              src={images.decor_7}
              alt=""
              className="object-contain w-full"
            />
          </div>

          <div className="w-full h-full grid lg:grid-cols-2 md:px-[2%] px-4 lg:py-[5%] relative lg:pb-[7%]">
            <div className=" flex flex-col text-center lg:text-left h-full pt-[50%] md:pt-[20%] lg:pt-0 lg:justify-center relative">
              <div
                id="foodmenu"
                className="flex w-full justify-center lg:justify-start "
              >
                <h2 className="text-foodYellow font-Norican text-[min(9.5vw,2.5rem)] mr-1">
                  Super Delicious
                </h2>
                <img src={images.styling} alt="flower" className="" />
              </div>

              <h1
                id="foodmenu"
                className="font-[800] font-Roboto text-[min(12.5vw,5.3rem)] uppercase lg:text-left"
              >
                food menu
              </h1>
              <h2
                id="foodmenu"
                className="text-foodGreen font-bold text-[min(8vw,2.2rem)] lg:text-left"
              >
                Unlimited time offer
              </h2>
              <p className="text-lg font-[500] mt-1 leading-6 lg:text-left">
                Enjoy free delivery with min, purchase of{" "}
                <span className="text-foodYellow uppercase">super50</span>
              </p>
              <div className="w-full flex justify-center lg:justify-start mt-3">
                <button
                  onClick={() => navigate("/shop")}
                  className="bg-foodYellow uppercase py-2.5 rounded-md px-4 w-fit font-[500] lg:mt-8 text-black "
                >
                  order now
                </button>
              </div>
              <div className="absolute right-[5%] z-50 top-[20%] flex w-[min(20vw,12rem)]">
                <img
                  src={images.decor_6}
                  alt=""
                  className="object-contain w-full"
                />
              </div>
            </div>
            <div className=" w-full h-full  pb-[40%] md:pb-[15%] lg:pb-0 md:mt-4 relative">
              <img
                src={images.hero_1}
                alt=""
                className="w-[min(60vw,70rem)] mx-auto mt-3 drop-shadow-[10px_20px_10px_rgba(0,0,0,0.5)]"
              />
              <div className="absolute -right-[7%] z-50 top-[15%] flex w-[min(20vw,10rem)]">
                <img
                  src={images.decor_5}
                  alt=""
                  className="object-contain w-full"
                />
              </div>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide
          style={{
            backgroundImage: `url(${images.homeBg_2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "100vh",
            paddingLeft: "7%",
            paddingRight: "6%",
            position: " relative",
          }}
        >
          <div className="absolute right-0 bottom-0 flex w-[min(20vw,10rem)]">
            <img
              src={images.decor_1}
              alt=""
              className="object-contain w-full"
            />
          </div>
          <div className="absolute left-6 top-10 flex w-[min(20vw,8rem)]">
            <img
              src={images.decor_2}
              alt=""
              className="object-contain w-full"
            />
          </div>
          <div className="absolute right-0 top-0 flex w-[min(20vw,12rem)]">
            <img
              src={images.decor_3}
              alt=""
              className="object-contain w-full"
            />
          </div>

          <div className="absolute left-0 z-50 bottom-[32%] flex w-[min(20vw,10rem)]">
            <img
              src={images.decor_4}
              alt=""
              className="object-contain w-full"
            />
          </div>
          <div className="absolute left-[30%] z-50 bottom-0 flex w-[min(20vw,10rem)]">
            <img
              src={images.decor_7}
              alt=""
              className="object-contain w-full"
            />
          </div>

          <div className="w-full h-full grid lg:grid-cols-2 md:px-[2%] px-4 lg:py-[5%] relative lg:pb-[7%]">
            <div className=" flex flex-col text-center lg:text-left h-full pt-[50%] md:pt-[20%] lg:pt-0 lg:justify-center relative">
              <div className="flex w-full justify-center lg:justify-start ">
                <h2 className="text-foodYellow font-Norican text-[min(9.5vw,2.5rem)] mr-1">
                  Hot and Fresh
                </h2>
                <img src={images.styling} alt="flower" className="" />
              </div>
              <h1 className="font-[800] font-Roboto text-[min(12.5vw,5.3rem)] uppercase lg:text-left">
                italian food
              </h1>
              <h2 className="text-foodGreen font-bold text-[min(8vw,2.2rem)] lg:text-left">
                With Special Sauce
              </h2>
              <p className="text-lg font-[500] mt-1 leading-6 lg:text-left">
                Enjoy free delivery with min, purchase of{" "}
                <span className="text-foodYellow uppercase">hot30</span>
              </p>
              <div className="w-full flex justify-center lg:justify-start mt-3">
                <button
                  onClick={() => navigate("/shop")}
                  className="bg-foodYellow uppercase py-2.5 rounded-md px-4 w-fit font-[500] lg:mt-8 text-black "
                >
                  order now
                </button>
              </div>
              <div className="absolute right-[5%] z-50 top-[20%] flex w-[min(20vw,12rem)]">
                <img
                  src={images.decor_6}
                  alt=""
                  className="object-contain w-full"
                />
              </div>
            </div>
            <div className=" w-full h-full  pb-[40%] md:pb-[15%] lg:pb-0 md:mt-4 relative">
              <img
                src={images.hero_2}
                alt=""
                className="w-[min(60vw,70rem)] mx-auto mt-3"
              />
              <div className="absolute -right-[7%] z-50 top-[15%] flex w-[min(20vw,10rem)]">
                <img
                  src={images.decor_5}
                  alt=""
                  className="object-contain w-full"
                />
              </div>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide
          style={{
            backgroundImage: `url(${images.homeBg_3})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "100vh",
            paddingLeft: "7%",
            paddingRight: "6%",
            position: " relative",
          }}
        >
          <div className="absolute right-0 bottom-0 flex w-[min(20vw,10rem)]">
            <img
              src={images.decor_1}
              alt=""
              className="object-contain w-full"
            />
          </div>
          <div className="absolute left-6 top-10 flex w-[min(20vw,8rem)]">
            <img
              src={images.decor_2}
              alt=""
              className="object-contain w-full"
            />
          </div>
          <div className="absolute right-0 top-0 flex w-[min(20vw,12rem)]">
            <img
              src={images.decor_3}
              alt=""
              className="object-contain w-full"
            />
          </div>

          <div className="absolute left-0 z-50 bottom-[32%] flex w-[min(20vw,10rem)]">
            <img
              src={images.decor_4}
              alt=""
              className="object-contain w-full"
            />
          </div>
          <div className="absolute left-[30%] z-50 bottom-0 flex w-[min(20vw,10rem)]">
            <img
              src={images.decor_7}
              alt=""
              className="object-contain w-full"
            />
          </div>

          <div className="w-full h-full grid lg:grid-cols-2 md:px-[2%] px-4 lg:py-[5%] relative lg:pb-[7%]">
            <div className=" flex flex-col text-center lg:text-left h-full pt-[50%] md:pt-[20%] lg:pt-0 lg:justify-center relative">
              <div className="flex w-full justify-center lg:justify-start ">
                <h2 className="text-foodYellow font-Norican text-[min(9.5vw,2.5rem)] mr-1">
                  Best Quality
                </h2>
                <img src={images.styling} alt="flower" className="" />
              </div>
              <h1 className="font-[800] font-Roboto text-[min(12.5vw,5.3rem)] uppercase lg:text-left">
                options of
              </h1>
              <h2 className="text-foodGreen font-bold text-[min(8vw,2.2rem)] lg:text-left">
                The Day In Your Town
              </h2>
              <p className="text-lg font-[500] mt-1 leading-6 lg:text-left">
                Enjoy free delivery with min, purchase of{" "}
                <span className="text-foodYellow uppercase">feast40</span>
              </p>
              <div className="w-full flex justify-center lg:justify-start mt-3">
                <button
                  onClick={() => navigate("/shop")}
                  className="bg-foodYellow uppercase py-2.5 rounded-md px-4 w-fit font-[500] lg:mt-8  "
                >
                  order now
                </button>
              </div>
              <div className="absolute right-[5%] z-50 top-[20%] flex w-[min(20vw,12rem)]">
                <img
                  src={images.decor_6}
                  alt=""
                  className="object-contain w-full"
                />
              </div>
            </div>
            <div className=" w-full h-full  pb-[40%] md:pb-[15%] lg:pb-0 md:mt-4 relative">
              <img
                src={images.hero_4}
                alt=""
                className="w-[min(60vw,70rem)] mx-auto mt-3 drop-shadow-[10px_20px_10px_rgba(0,0,0,0.5)]"
              />
              <div className="absolute -right-[2%] z-50 top-[20%] flex w-[min(20vw,10rem)]">
                <img
                  src={images.decor_5}
                  alt=""
                  className="object-contain w-full"
                />
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Hero;
