import React from "react";
import Review from "../components/Review";
// import Slider from "../components/Slider";
import Collections from "../components/Collections";
import BrandingOne from "../components/BrandingOne";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-full w-screen overflow-hidden bg-blue-50/90">
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
            className="max-xs:text-sm opacity-0 ease-in-out relative left-[-100px] xs:text-lg min-w-[250px] poppins max-w-[700px] p-2 md:p-4"
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
        <motion.div
          whileInView={{ backgroundAttachment: "fixed" }}
          style={{backgroundPosition: '30px'}}
          className="rounded-md min-h-[400px] max-xs:m-auto bg-[url('https://i.ibb.co/NxHbS4X/ad.png')] bg-no-repeat bg-contain  mt-[100px] relative min-w-[250px] sm:h-[600px] max-xs:w-[310px] max-xs:h-[400px]  xs:h-[500px] sm:w-[500px] xs:w-[400px] md:w-[600px] max-w-[600px] bg-gray-200"
        >
          <div className=" bg-gradient to-transparent min-h-full absolute top-0 left-0 w-full"></div>
          <h1 className="md:text-5xl xs:text-4xl max-xs:text-2xl  absolute md:top-[150px] top-10 belle text-white  left-10">
            "Your Style, Your Story”
          </h1>
          <p className="absolute bottom-0 md:bottom-[10px] text-white p-5 lato max-xs:text-sm h-fit w-full">
            - Express your unique journey with our customizable bracelets. Each
            piece is a canvas for your narrative, allowing you to showcase your
            individuality. Crafted with care, every bead reflects your passions
            and experiences. Wear your story proudly, making a statement
            wherever you go. With our bracelets, you don't just accessorize –
            you embody the essence of self-expression.
          </p>
        </motion.div>
        {/* top sellings */}
        <div className="flex flex-col mt-[100px]">
          <h1 className="text-3xl uppercase  font-medium">top selling </h1>
          <motion.div
            whileInView={{ opacity: 100 }}
            transition={{ duration: 0.4 }}
            className="flex opacity-0  px-2 py-4 max-xs:gap-2 xs:gap-6  flex-wrap"
          >
            <div className="h-[150px] w-[150px] max-xs:w-[100px] rounded-sm max-xs:h-[100px] bg-gray-300 "></div>
            <div className="h-[150px] w-[150px] max-xs:w-[100px] rounded-sm max-xs:h-[100px] bg-gray-300 "></div>
            <div className="h-[150px] w-[150px] max-xs:w-[100px] rounded-sm max-xs:h-[100px] bg-gray-300 "></div>
            <div className="h-[150px] w-[150px] max-xs:w-[100px] rounded-sm max-xs:h-[100px] bg-gray-300 "></div>
            <div className="h-[150px] w-[150px] max-xs:w-[100px] rounded-sm max-xs:h-[100px] bg-gray-300 "></div>
            <div className="h-[150px] w-[150px] max-xs:w-[100px] rounded-sm max-xs:h-[100px] bg-gray-300 "></div>
          </motion.div>
        </div>
        {/* reviews */}
        <Review />
      </section>
    </div>
  );
};

export default Home;
