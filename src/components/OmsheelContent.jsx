import React from 'react';
import Omsheel from "../assets/omsheel.png";

const OmsheelContent = () => {
  return (
    <>
      <style>
        {`
          @keyframes spinClockwise {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-clockwise {
            animation: spinClockwise 10s linear infinite;
          }
        `}
      </style>

      <div className='flex flex-col lg:flex-row justify-center w-full container mx-auto px-4  p-6  bg-blue-950'>
        <div className="flex flex-col items-center justify-center lg:items-start w-full lg:w-2/5 xl:w-1/3 mb-8 lg:mb-0"> 
          <div className="m-2">
            <img
              src={Omsheel}
              alt="OMSheel"
              className="w-full h-48 sm:h-56 md:h-60 lg:h-52 xl:h-60 object-contain rounded-full animate-spin-clockwise ml-5"
            />
          </div>
          <h2 className='text-center lg:text-left font-bold px-4 lg:px-14 text-white text-lg sm:text-xl md:text-2xl ml-3'>OmSheel Groups</h2>
        </div>
        <div className='p-4 w-full lg:w-3/5 xl:w-2/3 text-black text-sm sm:text-base md:text-lg leading-relaxed'>
         <p className="mb-4 text-lg font-semibold text-white">
         Omsheel is a group of companies with diverse interests in food processing, logistics, infrastructure, and exports. We are passionate about preserving traditional methods while also embracing innovation to provide the best products and services to our customers. Our commitment to purity and quality is reflected in every bite.
         </p>
         <p className='font-semibold text-white'>
         Omsheel Group is committed to achieving leadership in diverse sectors such as food processing, logistics, infrastructure, and exports. We prioritize sustainability, ethical business practices, and actively support local communities. A key focus of our mission is empowering SMEs and startups, particularly those based in Tier-2 and Tier-3 towns and cities, with special emphasis on Northeastern India. We aim to help these enterprises enter and thrive in global markets through strategic partnerships and guidance. Our strength lies in building long-term relationships rooted in trust, quality, and industry expertise.
         </p>
        </div>
      </div>
    </>
  );
};

export default OmsheelContent;