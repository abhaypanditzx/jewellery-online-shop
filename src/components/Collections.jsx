import React from "react";
const Collections = () => {
  const collection = [
    {
      Name: "earrings",
      url: `https://m.media-amazon.com/images/I/71bFGRObuKL._AC_UY350_.jpg`,
    },
    {
      Name: "rings",
      url: `https://kinclimg8.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BIAR0097R13-POSTER-V1-64762.jpg`,
    },
    {
      Name: "bracelet",
      url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwX8Avd7QLYth77IKNyWZfuCB34lOKZ3TFV1UG2OtNYwWz157n8Unp4e-wqxOnqNeuus&usqp=CAU`,
    },
  ];

  return (
    <div className="flex flex-col mt-[100px]">
      <h1 className="text-3xl uppercase  font-medium">our collections </h1>

      <div className="flex w-full items-center  max-xs:justify-around xs:justify-start  overflow-scroll max-xs:p-4  mt-4 h-fit max-xs:gap-x-5 sm:gap-x-10 ">
        {collection.map((e, index) => {
          return (
            <div
              key={index}
              className="bg-white  rounded-md shadow-md flex flex-col gap-y-2 jusitfy-center items-center max-xs:w-[120px] max-Xxs:w-[90px] max-xs:h-[200px] md:w-[300px] md:h-[260px] min-h-[200px] p-5 min-w-[160px]"
            >
              <img
                src={e.url}
                alt="category"
                className="h-full min-h-[150px] sm:h-[200px] max-xs:w-[120px] sm xs:h-[160px] hover:scale-105 cursor-pointer rounded-md w-full"
              />
              <h1 className="max-xs:text-xs font-medium md:text-xl capitalize  xs:text-sm sm:text-lg w-max ">
                {e.Name}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collections;
