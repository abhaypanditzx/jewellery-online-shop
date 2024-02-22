import React from "react";
import { FaChevronRight } from "react-icons/fa";
import {collectionData} from "../constants/index"
const Collections = () => {
  

  return (
    <div className="flex flex-col mt-[100px]">
      <h1 className="text-5xl capitalize text-secondary oswald font-normal">
        shop by category{" "}
      </h1>
      <h4 className="text-xl capitalize   sanchez text-gray-600 py-5">
        Browse through your favorite categories. We've got them all!
      </h4>

      <div className="flex w-screen items-center gap-10 flex-wrap p-10 max-xs:justify-around xs:justify-start  overflow-scroll max-xs:p-4  mt-4 h-fit max-xs:gap-x-5  ">
        {collectionData.map((e, index) => {
          return (
            <div
              key={index}
              className="bg-white  rounded-md overflow-hidden shadow-md shadow-black/20  flex flex-col gap-y-2 jusitfy-center items-center max-xs:w-[120px] max-Xxs:w-[90px] max-xs:h-[200px] md:w-[200px] md:h-[260px] min-h-[200px]  min-w-[160px]"
            >
              <img
                src={e.url}
                alt="category"
                className="h-full min-h-[150px] md:h-full sm:h-[200px]  xs:h-[160px] hover:scale-100 scale-105 cursor-pointer custom-rounded w-full"
              />
              <div className="flex   justify-center items-center w-full flex-col   h-full ">
                <h1 className="max-xs:text-xs font-medium pb-5 text-primary md:text-xl capitalize  xs:text-sm sm:text-lg w-max ">
                  {e.Name}
                </h1>
                <button className="text-base flex justify-center text-primary :text-secondary  hover:text-blue-600 hover:scale-95 duration-[0.1s] w-[100px]  items-center font-light  explore-parent">
                  <span className="explore">explore</span>{" "}
                  <FaChevronRight className=" icon text-xs" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collections;
