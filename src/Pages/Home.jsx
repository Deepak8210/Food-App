import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ShopHome from "../components/ShopHome";
import Offer from "../components/Offer";
import Services from "../components/Services";
import Menu from "../components/Menu";
import ShopBanner from "../components/ShopBanner";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <ShopHome />
      <Offer />
      <Services />
      <Menu />
      <ShopBanner />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
