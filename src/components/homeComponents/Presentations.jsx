import React from "react";
import "../../css/homeCss/Presentations.css";

const presentations = [
  {
    title: "National Postdoctoral Fellowship",
    info: "DST-MHRD, Government of India",
  },
  {
    title: "LingPhil Summer School — Full Scholarship",
    info: "University of Oslo",
  },
  {
    title: "Erasmus++ Global Mobility Program",
    info: "NTNU, Norway",
  },
  {
    title: "Travel grant - Erasmus - Lingphil",
    info: "University of Oslo + NTNU",
  },
  {
    title: "Best Presentation Award",
    info: "International Symposium on Bilingualism & Cognition",
  },
  {
    title: "Horizon Collective",
    info: "Adobe Creative Jam",
  },
  {
    title: "Guest Faculty",
    info: "Centre for Neural & Cognitive Sciences",
  },
  {
    title: "Doctoral Committee Member",
    info: "University of Hyderabad",
  },
  {
    title: "Doctoral Committee Member",
    info: "Osmania University",
  },
  {
    title: "Fellow, Psychonomic Society",
    info: "International Society for Cognitive Science",
  },
];

const Presentations = ({ id }) => {
  return (
    <section className="pres-section" id={id}>
      <div className="pres-header">
        <h2 className="head-text-white">Awards & Teachings//</h2>
      </div>

      <div className="pres-list">
        {presentations.map((item, index) => (
          <div key={index} className="pres-row">
            {/* Corner Ticks */}
            <span className="corner-tick tl"></span>
            <span className="corner-tick tr"></span>
            <span className="corner-tick bl"></span>
            <span className="corner-tick br"></span>

            {/* Content Columns — no year */}
            <div className="pres-col pres-title-col">
              <h3 className="pres-row-text pres-title-text">{item.title}</h3>
            </div>
            <div className="pres-col pres-info-col">
              <p className="pres-row-text pres-info-text">{item.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Presentations;
