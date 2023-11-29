import React from "react";
import menuBg from "../assets/images/menuBg.jpeg";
import Navbar from "../components/Navbar";
import { FaShoppingBasket, FaHeart } from "react-icons/fa";
import MenuCarousel from "../components/MenuCarousel";
import { menuData } from "../FoodData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const MenuFull = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.search);
  const selectedCategory = useSelector((state) => state.menu.category);

  const handleToast = (name) => toast.success("Added " + name);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full min-h-screen mt-20">
        <Navbar />

        <div
          className="min-h-[12rem] border flex items-center justify-center flex-col gap-3"
          style={{
            backgroundImage: `url(${menuBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h1 className="font-[700] font-Poppins text-[min(9vw,2.6rem)]">
            Shop
          </h1>
          <div className="flex text-gray-500 ">
            <Link to={"/"} className="text-gray-300">
              Home
            </Link>
            <button>{" >"}Shop</button>
          </div>
        </div>
        <div className="text-center my-8">
          <h1 className="font-Norican font-[600] text-foodYellow text-[min(9vw,2.6rem)] drop-shadow-lg">
            Our Delicious Menu
          </h1>
        </div>
        <MenuCarousel />
        <div className=" w-full h-full grid md:grid-cols-3 xl:grid-cols-4 lg:px-[7%] px-4 gap-8 mb-12">
          {menuData
            .filter((food) => {
              if (
                selectedCategory === "all products" ||
                selectedCategory === "all"
              )
                return food.name.toLowerCase().includes(search.toLowerCase());
              else return selectedCategory === food.category;
            })

            // .filter((food) =>
            //   food.name.toLowerCase().includes(search.toLowerCase())
            // )
            .map(({ id, name, rating, price, img, desc }) => (
              <div key={id} className="flex items-center justify-center h-full">
                <div className="w-full border flex flex-col p-2 rounded-[28px] group h-full">
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
                        onClick={() => {
                          dispatch(addToCart({ id, name, price, img, qty: 1 }));
                          handleToast(name);
                        }}
                        className="text-4xl rounded-2xl bg-yellow-300 p-2 hover:text-white hover:bg-yellow-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MenuFull;
