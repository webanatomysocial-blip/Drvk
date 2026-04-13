// src/components/homeComponents/HomeDomains.jsx
import React from "react";
import "../../css/homeCss/HomeDomains.css";
import researchDomainImg from "../../assets/Research-Domain.jpg";

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
      
        {/* Left Side - Heading + Image (Sticky) */}
        <div className="hd-left">
          <h2 className="hd-title head-text">Research Domains//</h2>
          <img 
            src={researchDomainImg} 
            alt="Research Domains" 
            className="research-domain-img" 
          />
        </div>

        {/* Right Side - Stacked Cards with Two Sticky Groups */}
        <div className="hd-right">
          {/* First Sticky Group: 01 & 02 */}

          <div className="hd-sticky-group">
            <div className="hd-card">
              <div className="hd-card-number">{domains[0].number}</div>
              <div className="hd-card-body">
                <h3 className="hd-card-title sub-head-text">{domains[0].title}</h3>
                <p className="hd-card-desc sub-para-text">{domains[0].description}</p>
              </div>
            </div>

            
          </div>
          <div className="hd-sticky-group">
           <div className="hd-card">
              <div className="hd-card-number">{domains[1].number}</div>
              <div className="hd-card-body">
                <h3 className="hd-card-title sub-head-text">{domains[1].title}</h3>
                <p className="hd-card-desc sub-para-text">{domains[1].description}</p>
              </div>
            </div>

            
          </div>
          {/* Second Sticky Group: 03 & 04 */}
          <div className="hd-sticky-group">
            <div className="hd-card">
              <div className="hd-card-number">{domains[2].number}</div>
              <div className="hd-card-body">
                <h3 className="hd-card-title sub-head-text">{domains[2].title}</h3>
                <p className="hd-card-desc sub-para-text">{domains[2].description}</p>
              </div>
            </div>

          
          </div>
          <div className="hd-sticky-group">
              <div className="hd-card">
              <div className="hd-card-number">{domains[3].number}</div>
              <div className="hd-card-body">
                <h3 className="hd-card-title sub-head-text">{domains[3].title}</h3>
                <p className="hd-card-desc sub-para-text">{domains[3].description}</p>
              </div>
            </div>

          
          </div>
        </div>
     
    </section>
  );
};

export default HomeDomains;