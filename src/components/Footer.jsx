import React from 'react'
import { FaInstagram, FaWhatsapp, FaTwitter, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className="text-2xl  flex justify-center p-4 items-center">
        <h1 className='border-b-[2px] text-white w-[80%] p-3 text-center border-[#191919]'>
          jewels
        </h1>
      </div>
      <div className="flex text-white  justify-around max-xs:w-full xs:w-[50%] m-auto p-4 items-center  ">
        <a href="">About us</a>
        <a href="">Contact </a>
        <a href="">FAQ</a>

      </div>
      <div className="flex justify-between">
        {/* feedback form */}
        <div className="feedback p-5">
          <h2 className='text-white font-medium  text-2xl py-2'>feedback</h2>
          <form action="" className='flex flex-col gap-y-4'>
            <input type="text" className='min-w-[220px] bg-transparent border-b border-[#191919] placeholder:text-[#656565] text-sm max-w-[700px] max-xs:w-[230px] xs:w-[400px] md:w-[600px]' placeholder='full name' />
            <input type="text" className='min-w-[220px] bg-transparent border-b border-[#191919] placeholder:text-[#656565] text-sm max-w-[700px] max-xs:w-[230px] xs:w-[400px] md:w-[600px]' placeholder='mobile no:' />
            <input type="text" className='min-w-[220px] bg-transparent border-b border-[#191919] placeholder:text-[#656565] text-sm max-w-[700px] max-xs:w-[230px] xs:w-[400px] md:w-[600px]' placeholder='email ' />
            <input type="text" className='min-w-[220px] bg-transparent border-b border-[#191919] placeholder:text-[#656565] text-sm max-w-[700px] max-xs:w-[230px] xs:w-[400px] md:w-[600px]' placeholder='feedback type ' />
          </form>
        </div>
        <div className=" text-white  text-2xl flex  max-xs:justify-end justify-center relative items-center w-full">
          <div className="w-[50%] flex items-center h-full max-xs:flex-col  top-0 right-0 max-xs:bg-[#101010] justify-around xs:px-10">

            <FaInstagram />
            <FaWhatsapp />
            <FaTwitter />
            <FaFacebook />
          </div>
        </div>
      </div>

      <p className="text-white text-xs mt-10 p-4">© 2023 Titan Company Limited. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer