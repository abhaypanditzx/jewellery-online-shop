import React, { useContext } from "react";
import { VscChromeClose } from "react-icons/vsc";
import UserContext from "../Context";
const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(UserContext);
  return (
    <div
      className={`slider min-h-[100vh] z-50 w-full fixed right-0 flex justify-end top-0 backdrop-blur-md ${
        isSidebarOpen ? "block" : "hidden"
      }`}
    >
      <div className="slider min-h-[100vh] relative z-50 w-[90vw] bg-white">
      <div className="slider-nav py-5 flex px-3 border-b h-fit w-full justify-center items-center border-[#cccccc]">
        <VscChromeClose
          onClick={(e) => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
          className="absolute text-2xl left-2 top-4"
        />
        <h3 className=" ">jewels</h3>
      </div>
      <div className="flex flex-col  items-center  py-10 h-full w-full">
        <ul className="flex flex-col w-full px-10 justify-center mt-6">
            <li className="uppercase text-gray-500 py-4 w-full border-b border-gray-200">our brands</li>
            <li className="uppercase text-gray-500 py-4 w-full border-b border-gray-200">shop online</li>
            <li className="uppercase text-gray-500 py-4 w-full border-b border-gray-200">jewellery</li>
            <li className="uppercase text-gray-500 py-4 w-full border-b border-gray-200">about us</li>
            <li className="uppercase text-gray-500 py-4 w-full border-b border-gray-200">gift card</li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
