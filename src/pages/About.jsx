import React from "react";
import Omsheel from "../assets/omsheel.png";
import { images } from "../assets/assests";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
    initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
    >
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

      {/* Section Header */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700">US</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="my-10 flex flex-col md:flex-row gap-12 items-center px-6 md:px-12">
        <img
          className="w-full md:max-w-[360px] h-52 sm:h-56 md:h-60 lg:h-52 xl:h-60 object-contain rounded-full animate-spin-clockwise"
          src={Omsheel}
          alt="OMSheel"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
            OmSheel Groups
          </h2>
          <p>
            Omsheel is a group of companies with diverse interests in food
            processing, logistics, infrastructure, and exports. We are
            passionate about preserving traditional methods while also embracing
            innovation to provide the best products and services to our
            customers. Our commitment to purity and quality is reflected in
            every bite.
          </p>
          <p>
            Omsheel Group is committed to achieving leadership in diverse
            sectors such as food processing, logistics, infrastructure, and
            exports. We prioritize sustainability, ethical business practices,
            and actively support local communities. A key focus of our mission
            is empowering SMEs and startups, particularly those based in Tier-2
            and Tier-3 towns and cities, with special emphasis on Northeastern
            India. We aim to help these enterprises enter and thrive in global
            markets through strategic partnerships and guidance. Our strength
            lies in building long-term relationships rooted in trust, quality,
            and industry expertise.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-xl my-4 px-4">
        <p className="text-center">
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20 justify-around gap-5">
        <div className="border-2 border-secondary rounded-lg px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] transition-all duration-300 cursor-pointer text-white bg-cover bg-center bg-no-repeat hover:scale-105" style={{backgroundImage:`url(${images.TrustImg})`}}>
          <b className="font-bold text-xl">TRUST:</b>
          <p className="text-lg font-semibold">Long-term partnerships based on transparency and quality.</p>
        </div>
        <div className="border-2 border-secondary rounded-lg px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]  transition-all duration-300 cursor-pointer text-white bg-cover bg-center bg-no-repeat hover:scale-105" style={{backgroundImage:`url(${images.sustainImg})`}}>
          <b className="font-bold text-xl">SUSTAINABILITY:</b>
          <p className="text-lg font-semibold">Ethical business practices that support people and the planet.</p>
        </div>
        <div className="border-2 border-secondary rounded-lg px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]  transition-all duration-300 cursor-pointer text-white bg-cover bg-center bg-no-repeat hover:scale-105" style={{backgroundImage:`url(${images.empowermentImg})`}}>
          <b className="font-bold text-xl">EMPOWERMENT:</b>
          <p className="text-lg font-semibold">
            Dedicated to uplifting SMEs and startups, especially in Northeast
            India.
          </p>
        </div>
      </div>

      {/* Team Cards Section */}
         <h2 className="text-4xl font-bold text-center">Our <span className="text-primary"> Team </span>  </h2>
         <br /> 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-12 cursor-pointer">
        <div className="max-w-sm bg-white border border-secondary rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1">
          <img
            src={images.Founder1}
            alt="Portrait of Major Sunil Shetty"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              Major Sunil Shetty
            </h2>
            <span className="inline-block mb-3 text-sm text-white bg-secondary px-3 py-1 rounded-full">
              Founder & Editor-in-Chief
            </span>
            <p className="text-gray-600 text-sm leading-relaxed">
              Major Sunil Shetty (Retd) is the Founder and Editor-in-Chief of My Startup TV, a Hyderabad-based media platform showcasing startups and entrepreneurs across India. With a strong military background, he brings strategic insight and discipline to the startup ecosystem.
            </p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-secondary rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1">
          <img
            src={images.Founder2}
            alt="Portrait of Vamsi"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              Vamsi Prashanth Muthangi
            </h2>
            <span className="inline-block mb-3 text-sm text-white bg-secondary px-3 py-1 rounded-full">
              Co-Founder of My Startup TV
            </span>
            <p className="text-gray-500 text-sm leading-relaxed">
              Vamsi Prashanth Muthangi is the Co-Founder of My Startup TV, a digital media platform based in Hyderabad that focuses on startups and entrepreneurship in India. He actively contributes to building and promoting content that highlights innovative ventures and emerging leaders across various sectors.
            </p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-secondary rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1">
          <img
            src={images.Founder3}
            alt="Portrait of Lavina Daga"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">Lavina Daga</h2>
            <span className="inline-block mb-3 text-sm text-white bg-secondary px-3 py-1 rounded-full">
              Head of Social Media
            </span>
            <p className="text-gray-500 text-sm leading-relaxed">
              Lavina Daga serves as the Head of Social Media at My Startup TV, a Hyderabad-based digital media platform dedicated to showcasing startups and entrepreneurs across India. She leads the organization's social media strategy and amplifies the voices of emerging businesses.
            </p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-secondary rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1">
          <img
            src={images.Founder4}
            alt="Portrait of Varshini"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              Varshini Atta
            </h2>
            <span className="inline-block mb-3 text-sm text-white bg-secondary px-3 py-1 rounded-full">
              Chief Operating Officer
            </span>
            <p className="text-gray-500 text-sm leading-relaxed">
              Varshini Atta serves as the Chief Operating Officer at My Startup TV. She brings expertise in website development, design, and social media marketing. Varshini actively contributes to content curation and production, including covering major events like the Global AI Summit 2024.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
