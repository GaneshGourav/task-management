import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { BsListTask } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { AiOutlineGlobal } from "react-icons/ai";
import { SiSimpleanalytics } from "react-icons/si";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const navigate = useNavigate();
  const userAuth = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    alert("Logout Successfully");
    navigate("/");
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <>
      <section className="w-[200px] h-screen text-white flex flex-col justify-start gap-5 items-center box-border bg-[#18222d]">
        <NavLink to={"/"}>
          <div className="tracking-[3px] mt-10 font-bold flex items-center justify-start gap-3">
            <MdOutlineDashboard className="h-10" />
            <span>DashBoard</span>
          </div>
        </NavLink>
        <div className="text-white font-semibold mt-10 flex flex-col justify-start gap-8 items-start uppercase">
          <NavLink to={"/message"}>
            <div className="flex items-center justify-start gap-3">
              <TiMessages />
              <span>Message</span>
            </div>
          </NavLink>
          <NavLink to={"/tasks"}>
            <div className="flex items-center justify-start gap-3">
              <BsListTask />
              <span>Tasks</span>
            </div>
          </NavLink>
          <NavLink to={"/planning"}>
            <div className="flex items-center justify-start gap-3">
              <SlCalender />
              <span>planning</span>
            </div>
          </NavLink>
          <NavLink to={"/global"}>
            <div className="flex items-center justify-start gap-3">
              <AiOutlineGlobal />
              <span>Global</span>
            </div>
          </NavLink>
          <NavLink to={"/analytics"}>
            <div className="flex items-center justify-start gap-3">
              <SiSimpleanalytics />
              <span>Analytics</span>
            </div>
          </NavLink>
        </div>
        {userAuth ? (
          <div className="mt-10">
            <NavLink to={"/login"}>
              <div
                className="flex items-center justify-start gap-3"
                onClick={handleLogout}
              >
                <CiLogout />
                <span>Logout</span>
              </div>
            </NavLink>
          </div>
        ) : (
          <div className="mt-10">
            <NavLink to={"/login"}>
              <div className="flex items-center justify-start gap-3">
                <CiLogin />
                <span>Login</span>
              </div>
            </NavLink>
          </div>
        )}
      </section>
    </>
  );
};

export default Navbar;
