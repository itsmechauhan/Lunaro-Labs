// src/components/Timeline.jsx
import React from "react";
import "./css/Timeline.css";

const Timeline = () => {
  const events = [
    {
      year: "2015",
      title: "Foundation",
      description: "TechCore Innovations founded with 5 employees and a vision for innovation",
    },
    {
      year: "2017",
      title: "First Major Client",
      description: "Secured our first enterprise client, marking our entry into the big leagues",
    },
    {
      year: "2019",
      title: "Global Expansion",
      description: "Expanded operations to Europe and Asia, establishing our global presence",
    },
    {
      year: "2022",
      title: "Innovation Awards",
      description: "Received multiple industry awards for innovation and excellence",
    },
    {
      year: "2024",
      title: "Current",
      description: "200+ employees, 50+ successful projects, and growing stronger every day",
    },
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Our Growth Timeline</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>
                {event.year} - {event.title}
              </h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
