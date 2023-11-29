import React, { useState } from "react";
import { FaRegUser, FaKey } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import PopupErr from "../components/ErrorHandlers/PopupErr";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(null);
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
      const response = await axios.post("http://localhost:3000/user/login", {
        email: credentials.email,
        password: credentials.password,
      });

      if (response.status === 200) {
        localStorage.setItem("authToken", response.data.authToken);
        // Successful login logic
        navigate("/");
      }
    } catch (error) {
      // Handle errors, such as network issues or server-side errors
      setErrorMsg(error.response.data.message);
    }
  };

  return (
    <div
      className={`text-white w-full h-screen bg-login-bg p-2 bg-cover flex flex-col items-center relative justify-center `}
    >
      <div className="bg-[rgba(0,0,0,0.5)] w-full h-screen absolute top-0 left-0"></div>
      <form
        onSubmit={submitHandler}
        className=" w-full md:w-1/2 border px-2 flex flex-col items-center rounded-md backdrop-blur-sm gap-2 bg-[rgba(255,255,255,0.1)] py-4"
      >
        <h1 className="text-4xl my-2 flex italic">
          Sign In To Your
          <div className="bg-[#FFC107] transform -skew-x-[20deg] px-4 ml-4 not-italic">
            Account
          </div>
        </h1>

        <div className="w-full border rounded-sm flex bg-[rgba(255,255,255,0.1)] px-2 py-1 items-center">
          <input
            autoComplete="false"
            type="email"
            name="email"
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
            value={credentials.password}
            onChange={onChangeHandler}
            placeholder="password"
            className="w-full bg-transparent outline-none"
          />
          <FaKey className="text-gray-400" />
        </div>
        <div className="flex justify-between w-full lg:w-3/4">
          <div>
            <input
              type="checkbox"
              id="check"
              className="w-4 accent-[#FFC107] mr-1"
            />
            <label htmlFor="check">Remember me</label>
          </div>
          <Link className="text-[#FFC107]">Forget password?</Link>
        </div>
        <button
          type="submit"
          className="w-full lg:w-3/4 shadow-md active:scale-95 duration-200 rounded-sm py-1 bg-[#FFC107]"
        >
          Login to my Account
        </button>
        <span>
          Don’t have an account yet?{" "}
          <Link to="/register" className="text-[#FFC107]">
            Sign up
          </Link>
        </span>
      </form>
      <PopupErr errorMessage={errorMsg} onClose={handlePopupClose} />
    </div>
  );
};

export default Login;
