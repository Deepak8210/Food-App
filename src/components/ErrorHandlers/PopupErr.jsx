import React from "react";

const PopupErr = ({ errorMessage, onClose }) => {
  if (!errorMessage) {
    return null; // If no error message, don't render anything
  }

  return (
    <div className="error-popup fixed inset-0 flex items-center justify-center z-50 w-full h-screen backdrop-blur-sm ">
      <div className="error-modal border bg-[rgba(255,255,255,0.2)] overflow-hidden rounded-lg shadow-lg w-full pb-2 md:w-1/3 m-2 flex flex-col justify-center">
        <div className="text-center flex w-full justify-between  bg-gray-400">
          <div className="flex gap-2 m-2">
            <div className="w-4 h-4 bg-red-400 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            <div className="w-4 h-4 bg-green-400 rounded-full"></div>
          </div>
          <h2 className="text-xl font-semibold">Error</h2>
          <div className="w-16"></div>
        </div>

        <p className=" text-black w-full text-center mt-2 tracking-wider text-lg">
          Something went wrong!
        </p>
        <p className="text-center text-sm font-thin tracking-wide">
          {errorMessage}
        </p>
        <button
          className="bg-red-500 text-white px-4 py-1 w-fit mx-auto rounded hover:bg-red-600 mt-3 "
          onClick={onClose}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default PopupErr;
