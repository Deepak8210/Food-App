import React, { useRef, useState } from "react";
import navbarBg from "../assets/images/navbar.jpg";
import navbarFull from "../assets/images/navbarFull2.png";
import brand from "../assets/images/brand2.png";
import { Link, useNavigate } from "react-router-dom";
import scooter from "../assets/images/edit.svg";
//react icons
import { FaSearch, FaUser, FaHeart, FaShoppingBasket } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import axios from "axios";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";

import toast, { Toaster } from "react-hot-toast";

import { IoMdClose } from "react-icons/io";

import {
  menuHandler,
  menuBarCloseHandler,
  cartCloseHandler,
  searchCloseHandler,
  searchHandler,
  cartShowHandler,
} from "../utils/menuShow/menuShow";

const Navbar = () => {
  const [credentials, setCredentials] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  //onChangeHandler
  const onChangeHandler = (e) => {
    setCredentials((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/register", {
        fullname: credentials.fullname,
        email: credentials.email,
        password: credentials.password,
      });

      console.log(response);

      // Assuming the response contains JSON data
      // if (response.status === 200) {
      //   console.log("registered");
      //    navigate("/api/v1/login");
      // }
    } catch (error) {
      // Handle errors, such as network issues or server-side errors
      // setErrorMsg(error.response.data.message);
      console.log(error);
    }
  };

  const search = useSelector((state) => state.search.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menuRef = useRef();
  const menuBar = useRef();
  const closeRef = useRef();

  const searchRef = useRef();
  const cartRef = useRef();
  const userRef = useRef();

  //cart logic
  const cartItems = useSelector((state) => state.cart.cart);
  //itemsQty
  const itemsQty = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.qty,
    0
  );
  //subtotal
  const subTotal = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.price * item.qty,
    0
  );

  return (
    <header
      style={{
        backgroundImage: `url(${navbarBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-full h-20 flex justify-between item-center md:px-[7%] px-4 items-center fixed left-0 top-0 z-[1000] border-b-2 border-yellowFlash"
    >
      <div className=" logo-container flex h-full p-1">
        <img src={brand} alt="brand-logo" className="object-cover" />
      </div>
      <div
        style={{
          backgroundImage: `url(${navbarFull})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        ref={menuRef}
        className="text-white lg:border-none border-b-2 border-yellowFlash duration-500 w-full lg:w-1/2 lg:flex grid grid-cols-3 lg:flex-row lg:static  items-center md:justify-center gap-4 absolute top-[101%] -right-[100%] bg-gray-600 lg:bg-transparent font-oswald uppercase tracking-widest"
      >
        <div className="relative w-fit mx-auto">
          <Link
            to={"/"}
            className="text-lg font-semibold link-underline-before w-fit "
          >
            Home
          </Link>
        </div>
        <div className="relative w-fit mx-auto">
          <a
            href="#shortMenu"
            className="text-lg font-semibold link-underline-before w-fit "
          >
            Menu
          </a>
        </div>
        <div className="relative w-fit mx-auto">
          <Link
            to={"/shop"}
            className="text-lg font-semibold link-underline-before w-fit "
          >
            Shop
          </Link>
        </div>
        <div className="relative w-fit mx-auto">
          <a
            href="#services"
            className="text-lg font-semibold link-underline-before w-fit "
          >
            About
          </a>
        </div>

        <div className="relative w-fit mx-auto">
          <a
            href="#newsletter"
            className="text-lg font-semibold link-underline-before w-fit"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="contact h-full hidden xl:flex items-center">
        <div className="flex h-full">
          <img src={scooter} alt="scooter" className="h-full" />
        </div>
        <h2 className="text-2xl font-semibold text-yellowFlash font-OpenSans">
          +91 123-456-7890
        </h2>
      </div>
      <div className="right-menu lg:h-full p-2 flex lg:gap-2 items-center lg:relative fixed gap-4 bottom-0 left-0 w-full lg:w-fit justify-center lg:bg-transparent bg-gray-500">
        <div className="icons-menu flex h-full items-center gap-3 w-full lg:space-x-0 space-x-10 justify-center">
          <div
            onClick={() => searchHandler(cartRef, menuRef, searchRef, userRef)}
            className=" cursor-pointer h-12 w-12 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-[#EEAC00] hover:text-black hover:border-none"
          >
            <FaSearch className="text-xl" />
          </div>
          <div
            onClick={() => navigate("/register")}
            className="cursor-pointer h-12 w-12 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-[#EEAC00] hover:text-black hover:border-none"
          >
            <FaUser className="text-xl" />
          </div>
          <div className=" relative cursor-pointer h-12 w-12 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-[#EEAC00] hover:text-black hover:border-none">
            <FaHeart className="text-xl" />
            <div className="bg-yellow-400 w-5 h-4 font-bold text-black rounded-full flex items-center justify-center text-xs absolute top-1.5 right-1.5">
              0
            </div>
          </div>
          <div
            onClick={() =>
              cartShowHandler(cartRef, menuRef, searchRef, userRef)
            }
            className={`relative cursor-pointer h-12 w-12 border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-[#EEAC00] hover:text-black hover:border-none ${
              cartItems?.length > 0 ? "animate-bounce" : "animate-none"
            }`}
          >
            <FaShoppingBasket className="text-xl" />
            <div className="bg-yellow-400 w-5 h-4 text-black font-bold rounded-full flex items-center justify-center text-xs absolute top-1.5 right-1.5">
              {cartItems.length}
            </div>
          </div>
        </div>
      </div>
      <div
        className="lg:hidden duration-200"
        onClick={() => menuHandler(menuRef, menuBar, closeRef)}
        ref={menuBar}
      >
        <HiMenuAlt3 id="menu" className="hover:text-yellowFlash text-3xl" />
      </div>
      <div
        className="hidden lg:hidden"
        onClick={() => menuBarCloseHandler(menuRef, menuBar, closeRef)}
        ref={closeRef}
      >
        <IoMdClose className="text-3xl" />
      </div>
      <div
        className="duration-200 absolute top-[110%] right-0 origin-top lg:w-fit w-full px-2 h-fit flex  justify-end items-center scale-y-0"
        ref={searchRef}
      >
        <input
          onChange={(e) => dispatch(setSearch(e.target.value))}
          type="text"
          name="search"
          value={search}
          placeholder="search here..."
          id="search-box"
          className=" shadow-md p-2 lg:w-[30rem] w-full  rounded-l-sm outline-none h-fit text-gray-500"
        />
        <button className=" shadow-md w-fit h-fit bg-white text-black p-2 rounded-r-sm">
          <IoMdClose
            className="text-2xl hover:text-red-600"
            onClick={(e) => {
              searchCloseHandler(searchRef);
              dispatch(setSearch((e.target.value = " ")));
            }}
          />
        </button>
      </div>
      {/*   ------------------   cart ----------------- */}
      <div
        className="flex translate-x-[100%] duration-200 bg-slate-50 flex-col absolute top-[100%] p-2 right-0 border lg:w-2/5 w-full md:w-1/2 h-screen"
        ref={cartRef}
      >
        <div className="w-full flex justify-between items-center border-b-yellowFlash border-b-2">
          <h2 className="text-lg text-black uppercase font-bold">
            Shopping cart
          </h2>
          <button className="w-fit h-fit  text-black p-2 rounded-r-sm">
            <IoMdClose
              className="text-2xl hover:text-red-600"
              onClick={() => cartCloseHandler(cartRef)}
            />
          </button>
        </div>
        <div className="mt-2 h-[calc(100vh-8.9rem)] flex flex-col justify-between gap-2 ">
          <div className="max-h-[80%] overflow-y-scroll scroll-hide">
            {cartItems?.length < 1 ? (
              <h1 className="text-4xl font-bold text-center mt-[40%]  p-2">
                Your cart is empty!
              </h1>
            ) : (
              cartItems.map(({ id, name, img, price, qty }) => {
                return (
                  <div
                    key={id}
                    className="flex h-20 items-center py-1 justify-between mb-2 shadow-md rounded-md px-4 border-l-[5px] border-l-gray-600 border border-gray-100"
                  >
                    <div className="flex items-center gap-3 h-full">
                      <div className="flex h-full">
                        <img
                          src={img}
                          alt=""
                          className=" h-full object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-sm text-black">
                          {name}
                        </h3>
                        <h4 className="text-sm text-yellowFlash">$ {price}</h4>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-2 justify-center items-end">
                      <div className="flex items-center gap-2">
                        <AiOutlineMinus
                          onClick={() => dispatch(decrementQty({ id }))}
                          className="text-2xl border text-gray-600 p-1 rounded-md hover:bg-yellowFlash font-bold transition-all ease-linear "
                        />
                        <span className="text-yellowFlash text-sm">{qty}</span>
                        <AiOutlinePlus
                          onClick={() => dispatch(incrementQty({ id }))}
                          className="text-2xl border text-gray-600 p-1 rounded-md hover:bg-yellowFlash font-bold transition-all ease-linear "
                        />
                        <RiDeleteBin5Fill
                          onClick={() => {
                            dispatch(removeFromCart({ id }));
                            toast(`${name} Removed!`, {
                              icon: "❌",
                            });
                          }}
                          className=" font-bold hover:bg-red-600 hover:text-white text-gray-600 ml-2 transition-all ease-linear duration-100 border text-2xl p-1 rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="flex flex-col">
            <div className="border-t-2 border-gray-400">
              <h6 className="text-black font-bold text-sm">
                Items: {itemsQty}
              </h6>
              <h3 className="text-black font-bold text-xl">
                Subtotal: {subTotal}
              </h3>
            </div>
            <button
              onClick={() =>
                cartItems.length > 0 ? navigate("/checkout") : ""
              }
              className="text-slate-50 hover:bg-yellow-400 bg-yellowFlash rounded-sm py-1 mt-3  hover:shadow-lg active:scale-95 duration-200 font-bold tracking-widest uppercase"
            >
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
