import React, { useContext, useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import UserContext from "../Context";
import { FaRegCircleUser } from "react-icons/fa6";
import Search from "./Search";

const Navbar = () => {
  const {
    isSidebarOpen,
    setIsSidebarOpen,
    query,
    setQuery,
    result,
    setResult,
    updateSearchInput,
    setIsFocus,
    isFocus,
  } = useContext(UserContext);

  return (
    <nav className="bg-white sticky top-0 z-50 max-xs:h-[4rem] shadow-md shadow-black/10 h-[5rem] justify-between flex items-center p-4">
      <div className="text-lg bg-[#fa9963]  rounded-full w-[40px] h-[40px] flex justify-center items-center  font-italic  text-white">
        J
      </div>
      <ul className="flex w-full justify-between max-xs:hidden  sm:w-[400px] md:w-[450px]  max-w-[500px] items-center">
        <li className="text-gray-700 capitalize  cursor-pointer text-lg ">
          home
        </li>
        <li className="text-gray-700 capitalize  cursor-pointer text-lg ">
          products
        </li>
        <li className="text-gray-700 capitalize  cursor-pointer text-lg ">
          about us
        </li>
      </ul>
      {/* search-bar */}
    <Search/>
      <RiMenu4Fill
        onClick={() => {
          setIsSidebarOpen(!isSidebarOpen);
        }}
        className="text-2xl xs:hidden"
      />
      {/* <div className=" p-4 text-2xl max-xs:hidden">
        {" "}
        <FaRegCircleUser />
      </div> */}
    </nav>
  );
};

export default Navbar;
