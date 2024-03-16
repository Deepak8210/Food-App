import React, { useState, useEffect } from "react";
import menuBg from "../assets/images/menuBg.jpeg";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/Footer";
import cartimg from "../assets/images/cart.gif";

const Checkout = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

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
    <>
      {loading ? (
        <div className=" h-screen w-full flex items-center justify-center">
          <img src={cartimg} alt="" className="w-40 h-40" />
        </div>
      ) : (
        <div className="w-full min-h-screen mt-20 ">
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
              Checkout
            </h1>
            <div className="flex text-gray-500 ">
              <Link to={"/"} className="text-gray-300">
                Home
              </Link>
              <button>{" >"}checkout</button>
            </div>
          </div>
          <div className="w-full h-full flex flex-col md:flex-row py-16 px-4 lg:px-[7%] gap-8">
            <div className="w-full">
              <h3 className="font-bold text-2xl">Billing Details</h3>
              <div className="flex flex-col mt-8 gap-4">
                <div className="flex w-full gap-8 flex-col lg:flex-row">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="firstname"
                      className="font-thin font-Roboto"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="border mt-2 rounded-md py-2 px-4 outline-none font-thin"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="firstname"
                      className="font-thin font-Roboto"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="border mt-2 rounded-md py-2 px-4 outline-none font-thin"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="firstname" className="font-thin font-Roboto">
                    Street address
                  </label>
                  <input
                    type="text"
                    className="border mt-2 rounded-md py-2 px-4 outline-none font-thin"
                  />
                  <input
                    type="text"
                    className="border mt-2 rounded-md py-2 px-4 outline-none font-thin"
                  />
                </div>

                <div className="flex w-full gap-8 flex-col lg:flex-row">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="firstname"
                      className="font-thin font-Roboto"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      className="border mt-2 rounded-md py-2 px-4 outline-none font-thin"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="firstname"
                      className="font-thin font-Roboto"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      className="border mt-2 rounded-md py-2 px-4 outline-none font-thin"
                    />
                  </div>
                </div>

                <div className="flex w-full gap-8 flex-col lg:flex-row">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="firstname"
                      className="font-thin font-Roboto"
                    >
                      Pincode
                    </label>
                    <input
                      type="text"
                      className="border mt-2 rounded-md py-2 px-4 outline-none font-thin"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="firstname"
                      className="font-thin font-Roboto"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      className="border mt-2 rounded-md py-2 px-4 outline-none font-thin"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <label htmlFor="firstname" className="font-thin font-Roboto">
                    Email address
                  </label>
                  <input
                    type="text"
                    className="border mt-2 rounded-md py-2 px-4 outline-none font-thin"
                  />
                </div>
                <h6>Note: Free delivery upto 10km</h6>
              </div>
            </div>

            <div className="w-full border-4 lg:mx-12 p-6">
              <h2 className="font-bold text-2xl">Your Order</h2>
              <div className="flex justify-between mt-8">
                <h4 className="font-semibold">Products</h4>
                <h4 className="font-semibold">Subtotal</h4>
              </div>
              <hr className="mt-4" />
              <div>
                {cartItems.map(({ id, name, qty, price }) => (
                  <div
                    className="flex justify-between w-full py-2 border-b-[1px]"
                    key={id}
                  >
                    <div className="flex">
                      <h6 className="font-thin">{name} x </h6>
                      <h6 className="font-thin">{qty}</h6>
                    </div>

                    <h4 className="font-semibold">
                      ${(qty * price).toFixed(2)}
                    </h4>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 py-2 border-b-[1px]">
                <h4 className="font-semibold">Subtotal</h4>
                <h4 className="font-semibold">${subTotal.toFixed(2)}</h4>
              </div>
              <div className="flex justify-between py-2 border-b-[1px]">
                <h4 className="font-semibold">Shipping Charge</h4>
                <h4 className="font-semibold">{`$${
                  subTotal > 0 ? 1.99 : 0
                }`}</h4>
              </div>
              <div className="flex justify-between py-2 border-b-[1px]">
                <h4 className="font-semibold">Total</h4>
                <h2 className="font-bold font-Roboto text-foodYellow text-xl">
                  ${subTotal > 0 ? +(subTotal + 1.99).toFixed(2) : 0}
                </h2>
              </div>
              <h4 className="font-semibold text-lg mt-4 py-2 border-b-[1px]">
                Payment methods
              </h4>
              <div className="w-50">
                <div className="mt-4">
                  <input
                    type="radio"
                    id="payment"
                    name="fav_language"
                    value="HTML"
                  />
                  <label className="font-semibold ml-2" for="html">
                    Upi Payment
                  </label>
                  <br />
                  <input
                    type="radio"
                    id="payment"
                    name="fav_language"
                    value="HTML"
                  />
                  <label className="font-semibold ml-2" for="html">
                    Wallets
                  </label>
                  <br />
                  <input
                    type="radio"
                    id="payment"
                    name="fav_language"
                    value="HTML"
                  />
                  <label className="font-semibold ml-2" for="html">
                    Credit/Debit cards
                  </label>
                  <br />
                  <input
                    type="radio"
                    id="payment"
                    name="fav_language"
                    value="HTML"
                  />
                  <label className="font-semibold ml-2" for="html">
                    Cash on Delivery
                  </label>
                  <br />
                </div>
              </div>
              <button
                onClick={() => navigate("/success")}
                className="w-full py-2 mt-8 hover:bg-[#EEAC00] bg-foodYellow uppercase font-bold rounded-md active:scale-95 duration-300 shadow-lg"
              >
                Place Order
              </button>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Checkout;
