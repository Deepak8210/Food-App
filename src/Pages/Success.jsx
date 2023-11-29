import React, { useState, useEffect } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center px-4">
      {loading ? (
        <PropagateLoader color="#FFC222" />
      ) : (
        <div className="border border-foodYellow rounded-md bg-[rgba(255,255,255,0.1)] shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)] flex flex-col items-center gap-3 p-4">
          <BsFillPatchCheckFill className="text-6xl text-foodYellow" />
          <h4 className="text-xl font-semibold text-white font-Poppins">
            Thank you for ordering!
          </h4>
          <p className="font-thin text-white font-Poppins md:w-3/4 w-full text-center">
            We will send you a shipping confirmation email as soon as your order
            ships.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-1.5 rounded-md bg-foodYellow hover:bg-[#c39b36] font-semibold font-Poppins active:scale-95 duration-200"
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Success;
