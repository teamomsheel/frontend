import React from 'react';
import { motion } from 'framer-motion';
// Make sure these imports exist in your assets file

import omsheelLogo from '../assets/omsheel.png'; // Adjust path to your logo image
import img1 from '../assets/Branch1.jpg'; // Replace with actual image imports
import img2 from '../assets/Branch2.jpg';
import img3 from '../assets/Branch3.jpg';
import img4 from '../assets/Branch4.jpg';
import img5 from '../assets/Branch1.jpg';
import img6 from '../assets/Branch1.jpg';

const TimeData = [
  { id: 1, year: 2009, title: "omsheel food product", description: "omsheel food&product" },
  { id: 2, year: 2010, title: "omsheel Exports&logistic", description: "Export&logistic" },
  { id: 3, year: 2014, title: "Shops Infra Construction", description: "Shops Infra" },
  { id: 4, year: 2014, title: "AskMentor", description: "AskMentor" },
  { id: 5, year: 2018, title: "Wogin Learning", description: "Wogin Learning" },
  { id: 6, year: 2019, title: "MyStartUp", description: "MyStartUp" }
];
 const items = [
  { color: 'bg-pink-500', image: img1, delay: 0, ...TimeData[0] },
  { color: 'bg-yellow-400', image: img2, delay: 0.6, ...TimeData[1] },
  { color: 'bg-red-500', image: img3, delay: 0.3, ...TimeData[2] },
  { color: 'bg-blue-500', image: img4, delay: 1.2, ...TimeData[3] },
  { color: 'bg-purple-700', image: img5, delay: 1.5, ...TimeData[4] },
  { color: 'bg-green-500', image: img6, delay: 0.9, ...TimeData[5] },
];

const Card = ({ color, image, delay, title, year, description }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className={`relative flex items-start gap-3 ${color} text-white p-4 w-64 rounded-xl shadow-lg`}
  >
    <img
      src={image}
      alt={title}
      className="w-16 h-16 rounded-full object-cover bg-white p-1 flex-shrink-0"
    />
    <div className="flex flex-col overflow-hidden">
      <div className="text-lg font-bold break-words">{title}</div>
      <div className="text-lg font-bold">{year}</div>
      <div className="text-sm break-words">{description}</div>
    </div>
  </motion.div>
);

const OurWorks = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 p-6  bg-slate-100">
      {/* Mobile View */}
      <div className="block sm:hidden space-y-6 pt-10">
        {items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden sm:block relative w-full max-w-[65%] aspect-square">
        <div className="absolute top-[55%] left-[55%] z-10 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl shadow-2xl"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <img src={omsheelLogo} alt="Omsheel Logo" className="w-20 h-20 object-contain" />
          </motion.div>
        </div>

        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-1 h-[80%] bg-gray-600 origin-top"
            style={{ transform: `rotate(${i * 60}deg) translateY(-50%)` }}
          />
        ))}

        {/* Position Cards around circle */}
        <div className="absolute top-0 left-[63%] transform -translate-x-1/2">
          <Card {...items[0]} />
        </div>
        <div className="absolute bottom-[-4%] left-[64%]  transform -translate-x-1/2">
          <Card {...items[1]} />
        </div>
        <div className="absolute top-[36%] right-[-11%] transform -translate-y-1/2">
          <Card {...items[2]} />
        </div>
        <div className="absolute bottom-[36%] left-[-10%] transform translate-y-1/2">
          <Card {...items[3]} />
        </div>
        <div className="absolute top-[36%] left-[-10%] transform -translate-y-1/2">
          <Card {...items[4]} />
        </div>
        <div className="absolute bottom-[36%] right-[-10%] transform translate-y-1/2">
          <Card {...items[5]} />
        </div>
      </div>

      <br />
      <br />
      <h2 className="text-3xl text-center text-pink-500 font-bold mt-8">OMsheel Groups</h2>
    </div>
  );
};

export default OurWorks;
