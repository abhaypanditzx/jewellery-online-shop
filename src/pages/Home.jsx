import React from "react";
import Review from "../components/Review";
import Slider from "../components/Slider";
import Collections from "../components/Collections";

const Home = () => {
  return (
    <div className="h-full w-full bg-blue-50/90">
      {/* slider  */}
      <Slider />
      <section className="max-xs:p-4 sm:p-10">
        {/* main heading */}
        <div>
          <h1 className=" sm:text-6xl max-sm:text-2xl sanchez mb-10 capitalize  text-gray-900 md:p-4 p-2">
            elegance redefined: discover{" "}
            <span className="text-red-700">timeless</span> jewelry creations
          </h1>
          <p className="max-xs:text-sm xs:text-lg min-w-[250px] poppins max-w-[700px] p-2 md:p-4">
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
          </p>
        </div>
        {/* new collections */}
        <div className="flex justify-start  items-center z-0 w-full h-fit p-2 ">
          <div
            className={`  min-h-[300px] md:h-[350px] bg-girl  relative z-0 shadow-md bg-[#F8CBCB] flex h-[333px] flex-col w-[314px] py-4`}
          >
            <div className="h-fit text-2xl font-bold tracking-wider mr-5 bg-white/80  text-black py-4 px-1 uppercase w-full">
              new collections
            </div>
            <button className="bg-black/80 text-white font-semibold tracking-wide text-lg absolute bottom-5 left-5  h-fit w-fit min-w-[99px] min-h-[37px] px-4 py-1.5 rounded-xl">
              shop{">"}
            </button>
          </div>
        </div>
        {/* our collections */}
        <Collections />
        {/* banner */}
        <div className="rounded-md min-h-[400px] max-xs:m-auto bg-[url('https://i.ibb.co/NxHbS4X/ad.png')] bg-no-repeat bg-cover mt-[100px] relative min-w-[250px] sm:h-[600px] max-xs:w-[310px] max-xs:h-[400px]  xs:h-[500px] sm:w-[500px] xs:w-[400px] md:w-[600px] max-w-[600px] bg-gray-200">
          <div className=" bg-gradient to-transparent min-h-full absolute top-0 left-0 w-full"></div>
          <h1 className="md:text-5xl xs:text-4xl max-xs:text-2xl  absolute md:top-[150px] top-10 belle text-white  left-10">
            "Your Style, Your Story”
          </h1>
          <p className="absolute bottom-0 md:bottom-[10px] text-white p-5 lato max-xs:text-sm h-fit w-full">
         - Express your unique journey with our customizable bracelets. Each piece is a canvas for your narrative, allowing you to showcase your individuality. Crafted with care, every bead reflects your passions and experiences. Wear your story proudly, making a statement wherever you go. With our bracelets, you don't just accessorize – you embody the essence of self-expression.
          </p>
        </div>
        {/* top sellings */}
        <div className="flex flex-col mt-[100px]">
          <h1 className="text-3xl uppercase  font-medium">top selling </h1>
          <div className="flex px-2 py-4 max-xs:gap-2 xs:gap-6  flex-wrap">
            <div className="h-[150px] w-[150px] max-xs:w-[100px] rounded-sm max-xs:h-[100px] bg-gray-300 "></div>
            <div className="h-[150px] w-[150px] max-xs:w-[100px] rounded-sm max-xs:h-[100px] bg-gray-300 "></div>
            <div className="h-[150px] w-[150px] max-xs:w-[100px] rounded-sm max-xs:h-[100px] bg-gray-300 "></div>
            <div className="h-[150px] w-[150px] max-xs:w-[100px] rounded-sm max-xs:h-[100px] bg-gray-300 "></div>
            <div className="h-[150px] w-[150px] max-xs:w-[100px] rounded-sm max-xs:h-[100px] bg-gray-300 "></div>
            <div className="h-[150px] w-[150px] max-xs:w-[100px] rounded-sm max-xs:h-[100px] bg-gray-300 "></div>
          </div>
        </div>
        {/* reviews */}
        <Review />
      </section>
    </div>
  );
};

export default Home;
