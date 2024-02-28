import React from "react";
import Review from "../components/Review";
import Collections from "../components/Collections";
import BrandingOne from "../components/BrandingOne";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import TopSelling from "../components/TopSelling";
import Slogan from "../components/Slogan"


const Home = () => {
  return (
    <div className="h-full w-screen overflow-hidden bg-white">
      {/* slider  */}
      <BrandingOne />
      <section className="max-xs:p-4 sm:p-10">
        {/* main heading */}
        <div>
          <motion.h1
            whileInView={{ left: "0px", opacity: 100 }}
            transition={{ duration: 0.6 }}
            className=" sm:text-6xl max-sm:text-2xl left-[50px] relative sanchez mb-3 capitalize  text-gray-900 md:p-4 p-2"
          >
            elegance redefined: discover{" "}
            <span className="text-secondary">timeless</span> jewelry creations
          </motion.h1>
          <motion.p
            whileInView={{ left: "0px", opacity: 100 }}
            transition={{ duration: 0.5 }}
            className="max-xs:text-sm opacity-0 ease-in-out relative left-[-150px] text-gray-700 xs:text-lg min-w-[250px] poppins max-w-[700px] p-2 md:p-4"
          >
            <span className="max-xs:hidden ">
              Welcome to jwels, where every piece is a testament to exquisite
              craftsmanship and timeless elegance. Explore our curated
              collection of handcrafted jewelry, each piece reflecting
              sophistication and style. From delicate diamonds to bold
              gemstones, discover treasures that capture the essence of luxury
              and authenticity. Welcome to a world where every jewel is a
              timeless treasure waiting to be cherished.
            </span>
            <span className="xs:hidden">
              Welcome to jwels, where exquisite craftsmanship meets timeless
              elegance. Explore our curated collection of handcrafted jewelry
              that reflects sophistication and style
            </span>
          </motion.p>
        </div>
        {/* new collections */}

        {/* our collections */}
        <Collections />
        {/* banner */}
        <Slogan/>
        {/* top sellings */}
        <TopSelling />
        {/* reviews */}
        <Review />
      </section>
    </div>
  );
};

export default Home;
