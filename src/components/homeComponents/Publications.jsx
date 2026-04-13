import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../css/homeCss/Publications.css";

const publications = [
  {
    title:
      "Interplay of Semantic Representations and Transient Cognitive Control in Bilingual Children",
    info: "Kapiley, K. — Handbook of Linguistic Semantics (Ed. Dr. Prakash Mondal), Springer Publications",
    year: "2026",
  },
  {
    title: "Cognitive control in children",
    info: "Kapiley, K. — Bilingualism: Language and cognition",
    year: "In press",
  },
  {
    title: "Children Can Suppress Salient Distractors",
    info: "Ramgir, A., Kapiley, K., & Lamy, D. — Journal of Experimental Psychology: General",
    year: "2026",
  },
  {
    title: "Biliteracy Modulates Cross-Linguistic Orthography Activation",
    info: "Nijalingappa, T., Madhira, A., Kapiley, K., & Mishra, R. K. — Handbook of Reading in Nonlinear Writing Systems, Springer Publications",
    year: "2026",
  },
  {
    title: "Bi-Multiliteracy in the Indian Context",
    info: "Kapiley, K., & Madhira, A. — Bharatiya Bhasha Samiti, Ministry of Education, New Delhi",
    year: "2025",
  },
  {
    title:
      "The unbearable lightness of 'diversity' in understanding cognition: A role for bilingualism",
    info: "Mishra. R. K., Madhira, A. & Kapiley, K. — TOPICs",
    year: "In press",
  },
  {
    title:
      "Awareness of interlocutors’ L2 proficiency modulates cross-linguistic activation in high-L2 proficient bilinguals",
    info: "Kumar, S., Kapiley, K., & Mishra. R. K. — International Journal of Bilingualism",
    year: "2025",
  },
  {
    title:
      "Bilingual speakers show sensitivity to interlocutors’ L2 language proficiency during language production",
    info: "Kapiley, K., & Mishra, R. K. — International Journal of Bilingualism",
    year: "2025",
  },
  {
    title:
      "Language contexts induced by the interlocutors’ proficiencies modulate bilingual language monitoring",
    info: "Kapiley, K., & Mishra. R. K. — Bilingualism Language and Cognition",
    year: "2024",
  },
  {
    title:
      "The effects of short-term L2 training on components of executive control in Indian bilinguals",
    info: "Rafeekh, R., Krishna, P. P., Kapiley, K., & Mishra, R. K. — Cognitive Processing, 1-13",
    year: "2021",
  },
  {
    title:
      "What do I choose? Influence of interlocutor awareness on bilingual language choice during voluntary object naming",
    info: "Kapiley, K., & Mishra, R. K. — Bilingualism Language and Cognition, 22(5), 1029-105",
    year: "2019",
  },
  {
    title:
      "Iconic culture-specific images influence language non-selective translation activation in bilinguals: Evidence from eye movements",
    info: "Kapiley, K., & Mishra, R. K. — Translation, Cognition and Behaviour, 1(2), 221-250",
    year: "2018",
  },
  {
    title:
      "Interlocutors Modulate Language Plan and Production in High and Low-Literate Bilinguals: Evidence from Eye Movements",
    info: "Kapiley, K., & Mishra, R. K. — Bilingualism Language and Cognition",
    year: "2026",
  },
  {
    title:
      "Reduced L2 use during the COVID pandemic alters cognitive control and linguistic adaptation to interlocutors",
    info: "Kapiley, K., Vandana, S., & Mishra, R. K. — Cognitive Processing",
    year: "Under Review",
  },
  {
    title:
      "Spatial communication systems across languages reflect universal action constraints",
    info: "Coventry, K. R., Gudde, H. B., Diessel, H., Collier, J., Guijarro-Fuentes, P., Vulchanova, M., Kapiley, K ... & Incel, O. D. — Nature human behaviour, 7(12), 2099-2",
    year: "2023",
  },
];

const Publications = ({ id }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="pub-section" id={id}>
      <div className="pub-header">
        <h2 className="head-text-white">Publications//</h2>
      </div>

      <div className="pub-list">
        {/* First 3 publications are always visible */}
        {publications.slice(0, 3).map((pub, index) => (
          <div key={index} className="pub-row">
            {/* Corner Ticks */}
            <span className="corner-tick tl"></span>
            <span className="corner-tick tr"></span>
            <span className="corner-tick bl"></span>
            <span className="corner-tick br"></span>

            <div className="pub-col pub-title-col">
              <h3 className="pub-row-text pub-title-text">{pub.title}</h3>
            </div>
            <div className="pub-col pub-info-col">
              <p className="pub-row-text pub-info-text">{pub.info}</p>
            </div>
            <div className="pub-col pub-year-col">
              <span className="pub-row-text pub-year-text">{pub.year}</span>
            </div>
          </div>
        ))}

        {/* The rest of the publications animate in and out */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              }} /* Smooth cubic-bezier transition */
              style={{ overflow: "hidden" }}
            >
              {publications.slice(3).map((pub, index) => (
                <div key={index + 3} className="pub-row">
                  {/* Corner Ticks */}
                  <span className="corner-tick tl"></span>
                  <span className="corner-tick tr"></span>
                  <span className="corner-tick bl"></span>
                  <span className="corner-tick br"></span>

                  <div className="pub-col pub-title-col">
                    <h3 className="pub-row-text pub-title-text">{pub.title}</h3>
                  </div>
                  <div className="pub-col pub-info-col">
                    <p className="pub-row-text pub-info-text">{pub.info}</p>
                  </div>
                  <div className="pub-col pub-year-col">
                    <span className="pub-row-text pub-year-text">
                      {pub.year}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {publications.length > 3 && (
        <div className="pub-view-all-container">
          <button
            className="pub-view-all-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "View Less" : "View All"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Publications;
