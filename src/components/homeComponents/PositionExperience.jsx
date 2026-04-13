import React from "react";
import "../../css/homeCss/PositionExperience.css";

const experiences = [
  {
    role: "principal investigator - cognitive scientist",
    title: "Semantic Processing in Bilingual Children",
    place: "CSRI - DST  - IIT Hyderabad",
  },
  {
    role: "principal investigator - cognitive scientist",
    title: "Distractor Suppression in Children",
    place: "Dominique Lamy's Visual Cognition Lab, Tel Aviv University, Israel",
  },
  {
    role: "principal investigator - cognitive scientist",
    title: "Cognitive Scientist, cognitive functions in patients with substance abuse disorder",
    place: "Cognitude enterprises  pvt ltd, hyderabad",
  },
  { 
    role: "principal investigator - cognitive scientist",
    title: "Psychological profiling of pre and post-bariatric patients",
    place: "Center for Psychology, University of Hyderabad, Telangana",
  },
  {
    role: "cognitive scientist",
    title: "development of skill-based neurocognitive testing protocol to assess cognition and diagnose dementia in a context of complex skill and low literacy",
    place: "ICMR - NIMHNAS & Centre for Neural & Cognitive science, University of Hyderabad, Hyderabad",
  },

  {
    role: "principal investigator - cognitive scientist",
    title: "Psychological Distress in Indian Adults",
    place: "Center for Psychology, University of Hyderabad, Telangana",
  },
  {
    role: "Cognitive Scientist",
    title: "Long-Term Literacy Training & Cognitive Functioning",
    place:
      "Centre for Neural & Cognitive science, University of Hyderabad, Hyderabad",
  },
  {
    role: "Research associate",
    title: "Language and memory",
    place: "Department of Psychology. University of East Anglia (UK)",
  },
  {
    role: "Research associate",
    title: "Cognate Processing in Norwegian-English Bilinguals",
    place: "University of Edinburgh, UK & NTNU, Norway",
  },
];

const PositionExperience = ({ id }) => {
  return (
    <section className="pe-section" id={id}>
      <div className="pe-header">
        <h2 className="head-text">Expertise//</h2>
      </div>

      <div className="pe-rows-container">
        {experiences.map((exp, index) => (
          <div key={index} className="pe-row">
            <div className="pe-col pe-role-col">
              <h3 className="small-sub-head-text">{exp.role}</h3>
            </div>
            <div className="pe-col pe-title-col">
              <span className="sub-para-text">Title</span>
              <h4 className="small-sub-head-text">{exp.title}</h4>
            </div>
            <div className="pe-col pe-place-col">
              <span className="sub-para-text">Place</span>
              <p className="small-sub-head-text">{exp.place}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PositionExperience;
