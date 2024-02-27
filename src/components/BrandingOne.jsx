import React from 'react'
import brandingImage from "../assets/mainImg.png"
const BrandingOne = () => {
  return (
    <div className='py-10 w-full  flex justify-end  '>
        <div className="  relative h-full w-fit">
            <div className="bg-tertiary xs:p-5 max-xs:p-2 max-xs:backdrop-blur-sm max-xs:border-r-white max-xs:border-r-[2px] max-xs:text-white max-xs:bg-transparent flex flex-col justify-around sm:h-[260px] sm:w-[400px] sm:left-[-180px] lg:left-[-480px] lg:w-[600px] md:w-[400px] md:h-[400px] min-h-[100px] z-10 absolute top-[50%] translate-y-[-50%] max-xs:left-[0px] left-[-300px] min-w-[100px] max-xs:h-full max-xs:w-[200px]">
              <h2 className='belle text-xl'>-Jewellis</h2>
              <h1 className='md:text-5xl max-xs:text-xl sm:text-2xl '>Where Every Sparkle Tells Your Unique Story of Beauty.</h1>
              <button className='border-black border-[1px] max-xs:border-white max-xs:bg-black/20 w-fit p-2'>
                shop now
              </button>
            </div>
            <img src={brandingImage} alt="mainImage" className='max-w-[900px] lg:h-full lg:w-[810px] sm:w-[500px] md:w-[700px]  md:h-[450px] xs:w-[500px] min-w-[200px] max-xs:w-full' />
        </div>
    </div>
  )
}

export default BrandingOne