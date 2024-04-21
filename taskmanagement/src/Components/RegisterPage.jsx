import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Signup } from "../Redux/authReducer/action";
import { SIGNUP_FAILURE, SIGNUP_SUCCESS } from "../Redux/actionTypes";

const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isloading = useSelector((store) => store.authReducer.isLoading);

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(userName, email, password);
    let userData = {
      userName: userName,
      email: email,
      password: password,
    };

    if (userName && email && password) {
      alert("Server is Slow Please Wait !!!");
      dispatch(Signup(userData))
        .then((res) => {
          dispatch({ type: SIGNUP_SUCCESS });
          alert(res.data.message);
          navigate("/login");
        })
        .catch((err) => {
          dispatch({ type: SIGNUP_FAILURE });
          alert(err.response.data.message);
          if(err.response.data.message==='User Already Exist'){
            navigate("/login")
          }

          
        });
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center w-[100%] bg-[#101a23]  ">
      <div className="bg-custom-pink pt-6 pl-10 pr-10 pb-10 rounded border border-gray-500 shadow-md w-full sm:w-96 text-white">
        <h2 className="text-2xl text-white font-bold mb-8 ">Enroll Yourself</h2>
        <form onSubmit={(e) => handleSignup(e)}>
          <div className="mb-4">
            <label
              htmlFor="userName"
              className="block text-white text-sm font-medium "
            >
              UserName
            </label>
            <input
              type="text"
              name="userName"
              className="mt-1 p-2 w-full focus:outline-blue-500 focus:border-blue-500 bg-[#1c2731]"
              placeholder="Enter your username e.g. Dummy2.0"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-sm font-medium  "
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 p-2 w-full  rounded-md focus:outline-blue-500 focus:border-blue-500 bg-[#1c2731]"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-white text-sm font-medium "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full focus:outline-blue-500 focus:border-blue-500 bg-[#1c2731]"
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-custom-darkpink mt-2 text-white  p-2 w-full rounded-md font-bold hover:rounded-full focus:outline-none focus:ring focus:border-blue-500 border border-blue-500"
          >
            {isloading ? "Account Crrating" : "Create-Account"}
          </button>
        </form>
        <p className="block text-white text-sm font-medium pt-4 pl-1">
          Already have an account ?{" "}
          <Link
            className="text-custom-green hover:text-blue-500 hover:font-bold"
            to={"/login"}
          >
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
