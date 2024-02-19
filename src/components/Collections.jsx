import React from "react";
import { FaChevronRight } from "react-icons/fa";
const Collections = () => {
  const collection = [
    {
      Name: "earrings",
      url: `https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw47b1df4b/homepage/shopByCategory/fod-earrings.jpg`,
    },
    {
      Name: "rings",
      url: `https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwfc4fb974/homepage/shopByCategory/fod-rings.jpg`,
    },
    {
      Name: "bracelet",
      url: `https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw4dcf3d1d/homepage/shopByCategory/fod-bracelet.jpg`,
    },
  ];

  return (
    <div className="flex flex-col mt-[100px]">
      <h1 className="text-5xl capitalize text-secondary oswald font-normal">
        shop by category{" "}
      </h1>
      <h4 className="text-xl capitalize   sanchez text-gray-600 py-5">
        Browse through your favorite categories. We've got them all!
      </h4>

      <div className="flex w-full items-center p-10 max-xs:justify-around xs:justify-start  overflow-scroll max-xs:p-4  mt-4 h-fit max-xs:gap-x-5 sm:gap-x-10 ">
        {collection.map((e, index) => {
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
                  <span className="explore">explore</span> <FaChevronRight className=" icon text-xs" />
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
