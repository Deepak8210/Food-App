import React from "react";
import images from "../utils/images";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full px-4 lg:px-[7%] min-h-[calc(100vh-5rem)] border-b-green-100 border-b-2 flex items-center justify-center flex-col mb-4"
      style={{
        backgroundImage: `url(${images.serv_Bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center mb-8">
        <h1 className="text-foodYellow text-[min(8.2vw,2.8rem)] font-Norican">
          Our Services
        </h1>
        <h1 className=" font-Poppins font-semibold tracking-tight text-[min(9vw,2.8rem)]">
          Fastest delivery and easy pickup
        </h1>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-2">
        <div className=" w-full justify-center items-center flex">
          <div className="flex items-center justify-center flex-col">
            <div className="bg-[#7AAC82] w-24 h-24 rounded-full flex p-6 hover:scale-110 duration-200">
              <img
                src={images.serv_6}
                alt=""
                className="object-contain h-full drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)]"
              />
            </div>

            <h4 className="font-semibold text-lg mt-2 font-Poppins tracking-tight">
              Easy To Order
            </h4>
            <p className="font-thin text-gray-700 text-center">
              You only need a few steps in ordering food.
            </p>
          </div>
        </div>

        <div className=" w-full justify-center flex">
          <div className="flex items-center justify-center flex-col">
            <div className="bg-[#53A8AB] w-24 h-24 rounded-full flex p-6 hover:scale-110 duration-200">
              <img
                src={images.serv_9}
                alt=""
                className="object-contain h-full drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)]"
              />
            </div>

            <h4 className="font-semibold text-lg mt-2 font-Poppins tracking-tight">
              Fast Delivery
            </h4>
            <p className="font-thin text-gray-700 text-center">
              You just order and relax we deliver to you.
            </p>
          </div>
        </div>

        <div className=" w-full justify-center flex">
          <div className="flex items-center justify-center flex-col">
            <div className="bg-[#AE6967] w-24 h-24 rounded-full flex p-6 hover:scale-110 duration-200">
              <img
                src={images.serv_8}
                alt=""
                className="object-contain h-full drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)]"
              />
            </div>
            <h4 className="font-semibold text-lg mt-2 font-Poppins tracking-tight">
              Easy Pickup
            </h4>
            <p className="font-thin text-gray-700 text-center">
              Pickup delivery at your doorstep.
            </p>
          </div>
        </div>

        <div className=" w-full justify-center flex">
          <div className="flex items-center justify-center flex-col">
            <div className="bg-[#A7916F] w-24 h-24 rounded-full flex p-6 hover:scale-110 duration-200">
              <img
                src={images.serv_7}
                alt=""
                className="object-contain h-full drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)]"
              />
            </div>

            <h4 className="font-semibold text-lg mt-2 font-Poppins tracking-tight">
              Dine In
            </h4>
            <p className="font-thin text-gray-700 text-center">
              Enjoy your food fresh crispy and hot.
            </p>
          </div>
        </div>

        <div className=" w-full justify-center flex">
          <div className="flex items-center justify-center flex-col">
            <div className="bg-[#657D4D] w-24 h-24 rounded-full flex p-6 hover:scale-110 duration-200">
              <img
                src={images.serv_5}
                alt=""
                className="object-contain h-full drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)]"
              />
            </div>

            <h4 className="font-semibold text-lg mt-2 font-Poppins tracking-tight">
              Best Quality
            </h4>
            <p className="font-thin text-gray-700 text-center">
              Not only fast for us quality is also number one.
            </p>
          </div>
        </div>

        <div className=" w-full justify-center flex">
          <div className="flex items-center justify-center flex-col">
            <div className="bg-[#DEAE30] w-24 h-24 rounded-full flex p-2 hover:scale-110 duration-200">
              <img
                src={images.serv_4}
                alt=""
                className="object-contain h-full drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)]"
              />
            </div>

            <h4 className="font-semibold text-lg mt-2 font-Poppins tracking-tight">
              24x7 Service
            </h4>
            <p className="font-thin text-gray-700 text-center">
              We are looking for your hunger 24x7.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
