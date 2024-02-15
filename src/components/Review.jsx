import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaStar ,FaStarHalfAlt } from "react-icons/fa";
const Review = () => {
  return (
   <div className="flex flex-col">
           <h1 className='text-xl text-gray-600 capitalize  font-medium'>reviews </h1>

   <div className="flex flex-wrap">
   <div className="flex p-5 bg-white min-h-[200px] xs:h-[300px] shadow-md shadow-black/20 rounded-md flex-col min-w-[200px] max-w-[500px]">
  <div className="flex w-full h-fit gap-2  items-center p-2" >
    <FaUser className='text-2xl '/>
    <div className="flex-col  justify-end items-start flex">
      <h2>Abhay pandit</h2>
      <h5 className='text-sm text-gray-500'>04-02-2024</h5>
    </div>
  </div>
  <div className="starts flex max-xs:text-xl xs:text-3xl justify-between max-w-[50%] text-yellow-500">
    <FaStar/>
    <FaStar/>
    <FaStar/>
    <FaStar/>
<FaStarHalfAlt/>
  </div>
  <div className="comment max-xs:text-sm xs:text-base mt-4 poppins">
  I am always so impressed with what they come up with. I highly recommend the store to anyone because they will leave with a beautiful piece of jewelry. 
  </div>
</div>
   </div>
   </div>
  )
}

export default Review