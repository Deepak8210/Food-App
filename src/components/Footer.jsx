import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import footerBg from "../assets/images/footerbg.png";
const Footer = () => {
  return (
    <section
      className="bg-slate-800 py-8"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center w-full gap-4">
        <a
          href="#"
          className="border-2 border-yellowFlash rounded-full p-4 text-lg group"
        >
          <FaFacebookF className="group-hover:text-yellowFlash group-hover:scale-125 duration-300 text-slate-50" />
        </a>
        <a
          href="#"
          className="border-2 border-yellowFlash rounded-full p-4 text-lg group"
        >
          <FaTwitter className="group-hover:text-yellowFlash group-hover:scale-125 duration-150 text-slate-50" />
        </a>
        <a
          href="#"
          className="border-2 border-yellowFlash rounded-full p-4 text-lg group"
        >
          <FaInstagram className="group-hover:text-yellowFlash group-hover:scale-125 duration-150 text-slate-50" />
        </a>
        <a
          href="#"
          className="border-2 border-yellowFlash rounded-full p-4 text-lg group"
        >
          <FaLinkedinIn className="group-hover:text-yellowFlash group-hover:scale-125 duration-150 text-slate-50" />
        </a>
        <a
          href="#"
          className="border-2 border-yellowFlash rounded-full p-4 text-lg group"
        >
          <FaPinterestP className="group-hover:text-yellowFlash group-hover:scale-125 duration-150 text-slate-50" />
        </a>
      </div>
      <div className="flex md:gap-8 gap-4 justify-center mt-4 flex-wrap">
        <a
          href="#"
          className="-skew-x-12 text-slate-50 border border-yellowFlash   py-1 px-2 border-x-4"
        >
          Home
        </a>
        <a
          href="#about"
          className="-skew-x-12 text-slate-50 border border-yellowFlash py-1 px-2 border-x-4 "
        >
          About
        </a>
        <a
          href="#menu"
          className="-skew-x-12 text-slate-50 border border-yellowFlash py-1 px-2 border-x-4 "
        >
          Menu
        </a>
        <a
          href="#product"
          className="-skew-x-12 text-slate-50 border border-yellowFlash py-1 px-2 border-x-4 "
        >
          shop
        </a>

        <a
          href="contact"
          className="-skew-x-12 text-slate-50 border border-yellowFlash py-1 px-2 border-x-4 "
        >
          Contact
        </a>
      </div>
      <div className="text-slate-50 text-xl my-4 text-center">
        Work By <span className="text-yellowFlash"> Deepak Kumar</span> || All
        rights reserved
      </div>
    </section>
  );
};

export default Footer;
