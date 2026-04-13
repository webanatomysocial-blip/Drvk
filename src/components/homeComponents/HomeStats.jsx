// src/components/homeComponents/HomeStats.jsx
import React from "react";
import "../../css/homeCss/HomeStats.css";

const stats = [
   {
    number: "25+",
    description: "Peer-reviewed journal articles & book chapters",
  },
   {
    number: "7",
    description: "International research positions across 7 countries",
  },
  {
    number: "11",
    description: (
      <>
        Schools in{" "}
        <a
          style={{ color: "#727272ff", textDecoration: "none" }}
          href="http://cognitude.in/"
          target="_blank"
        >
          COGNITUDE
        </a>{" "}
      </>
    ),
  },
 
 

  {
    number: "1",
    description: "Provisional patent for automated network system",
  },
];

const HomeStats = () => {
  return (
    <section className="hs-section">
      <div className="hs-grid">
        {stats.map((stat, index) => (
          <div key={index} className="hs-card">
            <span className="big-text-head ">{stat.number}</span>
            <p className=" para-text">{stat.description}</p>
          </div>
        ))}
      </div>
      <div className="hs-section-left-right-content">
        <p className="small-sub-head-text">
          I bridge academic research with
            real-world applications through my ventures in education, cognitive
            technology, and AI.
        </p>
        <div className="large-head-text">
          <p className="para-text">
          


             My work includes patented technological solutions and enterprise-level
          implementations.
          </p>
          <a href="tel:+9160594524" className="white-bg-btn">
            Lets Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
