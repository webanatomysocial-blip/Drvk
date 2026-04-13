import React from "react";
import "../../css/homeCss/Cognitude.css";
import img1 from "../../assets/COGNITUDE/1.avif";
import img2 from "../../assets/COGNITUDE/2.avif";
import img3 from "../../assets/COGNITUDE/3.avif";
import img4 from "../../assets/COGNITUDE/4.avif";
import img5 from "../../assets/COGNITUDE/5.avif";
import sase from "../../assets/cog.avif";
import ctaVideo from "../../assets/videos/cta.mp4";

const Cognitude = ({id}) => {
  return (
    <section className="cognitude-section" id={id}>
      <div className="cognitude-header">
        <h2 className="head-text">The Inception of COGNITUDE//</h2>

        <div className="ii-image-wrapper-sticky">
          <img src={sase} alt="SASE" className="sase-logo" />
          <a href="https://cognitude.in/" className="white-bg-btn">
            Visit Cognitude Website
          </a>
        </div>
      </div>

      <div className="cognitude-grid">
        {/* Top Row: 2 Cards */}
        <div className="cog-card top-card">
          <img src={img1} alt="Education and Training" className="cog-bg" />
          <div className="cog-overlay cog-overlay-top">
            <h3 className="small-sub-head-text">Education and Training</h3>
            <p className="small-sub-para-text">
              Integrating cognitive science principles and AI into pedagogical
              frameworks for schools, educators, and learners.
            </p>
          </div>
        </div>
        <div className="cog-card top-card">
          <img src={img2} alt="Cognitive Science and Arts" className="cog-bg" />
          <div className="cog-overlay cog-overlay-top">
            <h3 className="small-sub-head-text">Cognitive Science and Arts</h3>
            <p className="small-sub-para-text">
              Interdisciplinary programming bridging the scientific study of
              mind with creative and cultural expression.
            </p>
          </div>
        </div>

        {/* Bottom Row: 3 Cards */}
        <div className="cog-card bottom-card">
          <img src={img3} alt="Mental Health and Wellness" className="cog-bg" />
          <div className="cog-overlay cog-overlay-bottom">
            <h3 className="small-sub-head-text">Mental Health and Wellness</h3>
            <p className="small-sub-para-text">
              Cognitive-based tools and interventions to support mental
              wellbeing, rehabilitation, and psychological resilience.
            </p>
          </div>
        </div>
        <div className="cog-card bottom-card">
          <img
            src={img4}
            alt="Cognitive Technology and AI"
            className="cog-bg"
          />
          <div className="cog-overlay cog-overlay-bottom">
            <h3 className="small-sub-head-text">Cognitive Technology and AI</h3>
            <p className="small-sub-para-text">
              Developing adaptive AI platforms that personalise learning and
              cognitive interventions at scale.
            </p>
          </div>
        </div>
        <div className="cog-card bottom-card">
          <img src={img5} alt="Performing Arts" className="cog-bg" />
          <div className="cog-overlay cog-overlay-bottom">
            <h3 className="small-sub-head-text">Performing Arts</h3>
            <p className="small-sub-para-text">
              Exploring the intersection of art, embodied cognition, and
              neuroscience through practice-based collaboration.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Section */}
      <div className="cog-sticky-section">
        <h2 className="head-text">Objectives of COGNITUDE//</h2>
      </div>

      {/* Objectives Section */}
      <div className="cog-objectives-container">
        {/* Left: Video */}
        <div className="cog-objectives-left">
          <video
            src={ctaVideo}
            autoPlay
            muted
            loop
            playsInline
            className="cog-cta-video"
          />
        </div>

        {/* Right: Bullet points */}
        <div className="cog-objectives-right">
          <ul className="cog-objectives-list">
            <li className="para-text">
              To integrate cognitive principles, such as retrieval practice,
              spaced learning, metacognitive training, and dual coding, into
              AI-based learning platforms and educational toolkits.
            </li>
            <li className="para-text">
              To develop adaptive AI tools that tailor learning to students'
              cognitive profiles, attention spans, and language proficiency.
            </li>
            <li className="para-text">
              Train teachers in cognitive-based pedagogy and in interpreting
              AI-generated learning analytics to deliver tailored instruction.
            </li>
            <li className="para-text">
              To assess the framework's effect on learning outcomes, engagement,
              and retention in various social cognitive environments.
            </li>
            <li className="para-text">
              Early personality development and career counselling.
            </li>
           
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cognitude;
