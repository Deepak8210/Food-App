import React, { useState } from "react";
import { FaRegUser, FaKey } from "react-icons/fa";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PopupErr from "../components/ErrorHandlers/PopupErr";

const Register = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(null);
  const [credentials, setCredentials] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setCredentials((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handlePopupClose = () => {
    // Clear the error message when the user closes the popup
    setErrorMsg(null);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/register", {
        fullname: credentials.fullname,
        email: credentials.email,
        password: credentials.password,
      });
      console.log(response);
      // Assuming the response contains JSON data
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      // Handle errors, such as network issues or server-side errors
      setErrorMsg(error.response.data.message);
    }
  };

  return (
    <div
      className={`text-white w-full h-screen bg-signup-bg p-2 bg-cover flex flex-col items-center relative justify-center `}
    >
      <div className="bg-[rgba(0,0,0,0.5)] w-full h-screen absolute top-0 left-0"></div>
      <form
        onSubmit={submitHandler}
        className=" w-full md:w-1/2 border px-2 flex flex-col items-center rounded-md backdrop-blur-sm gap-2 bg-[rgba(255,255,255,0.1)] py-4"
      >
        <h1 className="text-4xl my-2 flex italic">
          Create Your
          <div className="bg-[#FFC107] transform -skew-x-[20deg] px-4 ml-4 not-italic">
            Account
          </div>
        </h1>
        <div className="w-full border rounded-sm flex bg-[rgba(255,255,255,0.1)] px-2 py-1 items-center">
          <input
            type="text"
            name="fullname"
            value={credentials.fullname}
            onChange={onChangeHandler}
            placeholder="fullname"
            className="w-full bg-transparent outline-none"
          />
          <FaRegUser className="text-gray-400" />
        </div>
        <div className="w-full border rounded-sm flex bg-[rgba(255,255,255,0.1)] px-2 py-1 items-center">
          <input
            type="email"
            name="email"
            autoComplete="off"
            value={credentials.email}
            onChange={onChangeHandler}
            placeholder="email"
            className="w-full bg-transparent outline-none"
          />
          <BsFillEnvelopeAtFill className="text-gray-400" />
        </div>
        <div className="w-full border rounded-sm flex bg-[rgba(255,255,255,0.1)] px-2 py-1 items-center">
          <input
            type="password"
            name="password"
            autoComplete="off"
            value={credentials.password}
            onChange={onChangeHandler}
            placeholder="password"
            className="w-full bg-transparent outline-none"
          />
          <FaKey className="text-gray-400" />
        </div>

        <div className="flex justify-between w-full">
          <div>
            <input
              type="checkbox"
              id="check"
              className="w-4 accent-[#FFC107]"
            />
            <label htmlFor="check">I accept the Terms and Conditions</label>
          </div>

          <span>
            Already have an account{" "}
            <Link to="/login" className="text-[#FFC107]">
              Sign In
            </Link>
          </span>
        </div>
        <button
          type="submit"
          className="w-full lg:w-3/4 shadow-md active:scale-95 duration-200 rounded-sm py-1 bg-[#FFC107]"
        >
          Create Account
        </button>
      </form>
      <PopupErr errorMessage={errorMsg} onClose={handlePopupClose} />
    </div>
  );
};

export default Register;
