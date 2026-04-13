// src/components/homeComponents/HomeDomains.jsx
import React from "react";
import "../../css/homeCss/HomeDomains.css";

const domains = [
  {
    number: "01",
    title: "Developmental Cognition",
    description:
      "Explores how attention, executive control, and language develop in children, focusing on variability linked to ADHD, learning differences, and autism using experimental and eye tracking methods.",
  },
  {
    number: "02",
    title: "The Multifaceted Psyche",
    description:
      "Investigates cognitive neuroscience and clinical psychology intersections, studying attention, memory, and emotional processing in mood and substance disorders while building diagnostic tools and interventions.",
  },
  {
    number: "03",
    title: "Bilingualism & Language Production",
    description:
      "Studies how bilingual individuals adjust language production based on context, analyzing cross linguistic activation, social cues, and cognitive control across diverse proficiency groups in India.",
  },
  {
    number: "04",
    title: "Dance & Cognition",
    description:
      "Examines connections between embodied artistic movement and cognitive processes, exploring how dance influences perception, memory, and emotional expression.",
  },
];

const HomeDomains = ({ id }) => {
  return (
    <section className="hd-section" id={id}>
      {/* Top header row */}
      <div className="hd-header">
        <h2 className="hd-title head-text">Research Domains//</h2>
      </div>

      {/* 2x2 Card Grid */}
      <div className="hd-grid">
        {domains.map((domain) => (
          <div key={domain.number} className="hd-card">
            <div className="hd-card-number">{domain.number}</div>
            <div className="hd-card-body">
              <h3 className="hd-card-title sub-head-text">{domain.title}</h3>
              <p className="hd-card-desc sub-para-text">{domain.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeDomains;
