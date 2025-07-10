import React, { useEffect, useRef, useState } from "react";
import { TimeData } from "../../Data/TimeLine";
import TimelineEvents from "./TimeLineEvents";

const Timeline = () => {
  const [events, setEvents] = useState(TimeData);
  const timelineRef = useRef(null);
  const [visibleEvents, setVisibleEvents] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-id"));
            setVisibleEvents((prev) => new Set(prev).add(id));
          }
        });
      },
      { threshold: 0.3 }
    );

    const eventElements = timelineRef.current?.querySelectorAll(
      ".timeline-event"
    );
    eventElements?.forEach((element) => observer.observe(element));

    return () => {
      eventElements?.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <section id="achievements" className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
          <span className="text-amber-500">Achievements</span> Timeline
        </h2>
        <div
          ref={timelineRef}
          className="relative max-w-4xl mx-auto"
          aria-label="Timeline of achievements"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-500"></div>

          <div className="space-y-16">
            {events.map((event, index) => (
              <TimelineEvents
                key={event.id}
                event={event}
                index={index}
                isVisible={visibleEvents.has(event.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;