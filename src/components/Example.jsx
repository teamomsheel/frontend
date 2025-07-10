import React from 'react';
import { images } from '../assets/assests';

const Example = () => {
  return (
    <div className="bg-blue-50 p-4 overflow-x-auto">
      <div className="flex gap-5 w-max animate-marquee">
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="bg-secondary rounded-lg p-2 w-72 hover:scale-105 transition-all duration-150 flex-shrink-0 flex flex-col items-center shadow-lg"
          >
            <img
              src={images.Branch1pic}
              alt="Branch"
              className="h-25 w-44"
            />
            <div className="text-sm bg-primary p-3 rounded-lg text-white ">
              <h2 className="text-2xl font-bold ">
                My Startup Tv
              </h2>
              <hr className="h-1 bg-third rounded-lg my-2" />
              <p className="text-sm  font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                aut deserunt in numquam, eligendi mollitia tenetur nam rem.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Example;
