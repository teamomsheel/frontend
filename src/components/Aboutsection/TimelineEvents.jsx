import React from "react";

const TimelineEvents = ({ event, index, isVisible }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="">
    <div
      data-id={event.id}
      className={`timeline-event relative flex flex-col items-center cursor-pointer hover:scale-105 transition-all duration-150  ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div
        className={`w-full md:w-5/12 transition-all duration-700 bg-white p-6 rounded-lg shadow-md ${
          isVisible
            ? isEven
              ? "animate-slideInRight"
              : "animate-slideInLeft"
            : "opacity-0"
        }`}
      >
        <span className="inline-block bg-primary text-gray-900 text-sm font-semibold px-3 py-1 rounded-full mb-3">
          {event.year}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
        <p className="text-gray-700">{event.description}</p>
      </div>
      <div className="absolute left-1/2 transform -translate-x-2 w-6 h-6 rounded-full bg-secondary z-10 shadow-md" />
    </div>
    </div>
  );
};

export default TimelineEvents;
