import React from "react";
import { motion } from "framer-motion";
import { topSelling } from "../constants";
import ProductName from "../ProductName";
const TopSelling = () => {
  return (
    <div className="flex flex-col  mt-[100px]">
      <h1 className="text-3xl uppercase  font-medium">top selling </h1>
      <motion.div
        whileInView={{ opacity: 100 }}
        transition={{ duration: 0.4 }}
        className="flex opacity-0  px-2 py-4 max-xs:gap-2 xs:gap-6 justify-start max-xs:px-5  items-center  flex-wrap"
      >
        {topSelling.map((e, index) => {
          return (
            <div
              key={index}
              className="min-h-[200px] shadow-md p-4 shadow-black/10 xs:w-[290px] min-w-[150px] bg-white max-xs:w-[250px] h-fit lg:w-[260px] "
            >
              <img src={e.url} className="lg:h-[200px] max-xs:w-full xs:w-full xs:h-[250px] max-xs:h-[180px] lg:w-full" alt="" />
            <div className="p-3 lato"><ProductName name={e.name} /></div>
            <div className="px-2 text-gray-600">{e.currentPrice}</div>
            <div className="px-2 text-red-500 text-sm line-through ">{e.discount}</div>

            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TopSelling;
