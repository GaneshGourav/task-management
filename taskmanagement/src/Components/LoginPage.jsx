import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Signin } from "../Redux/authReducer/action";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../Redux/actionTypes";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isloading = useSelector((store) => store.authReducer.isLoading);
  

  const handleLogin = (e) => {
    console.log(email, password);
    e.preventDefault();
    let userDetails = {
      email:email,
      password:password,
    };
    if (email && password) {
      alert("Server is Slow Please Wait !!!");
      dispatch(Signin(userDetails)).then((res) => {
        dispatch({type:LOGIN_SUCCESS,payload:res.data.token,payload:res.data.userId})
        console.log(res)
        localStorage.setItem("isLoggedIn",JSON.stringify(true))
        localStorage.setItem("token",JSON.stringify(res.data.token))
        localStorage.setItem("userId",JSON.stringify(res.data.userId))
        alert(res.data.message)
        navigate("/tasks")
        console.log(res.data.token,res.data.userId)
       }).catch((err)=>{
        dispatch({type:LOGIN_FAILURE});
        alert(err.response.data.message)
        // console.log(err.response.data.message)
        // console.log(err)
       })
       ;
    } 
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-[100%] bg-[#101a23]   ">
      <div className=" pt-6 pl-8 pr-8 pb-10 rounded shadow-md w-full sm:w-96 border border-gray-400">
        <h2 className="text-2xl text-white font-bold mb-8 ">Login</h2>
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-white text-sm font-medium "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-custom-green bg-[#1c2731] text-white"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
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
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-custom-green bg-[#1c2731] text-white"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="border mt-2 text-white  p-2 w-full rounded-md font-bold hover:rounded-full focus:outline-none  "
          >
            {isloading?"Logging":"login"}
          </button>
        </form>
        <p className="block text-white text-sm font-medium pt-4 pl-1">
          Do not have an account ?{" "}
          <Link
            className="text-custom-green hover:text-blue-500 hover:font-bold"
            to={"/register"}
          >
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
