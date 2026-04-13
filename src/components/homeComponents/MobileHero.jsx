import React from "react";
import "../../css/homeCss/mouse-blur-hero.css";
import heroBg from "../../assets/home-banner.jpg";

const MobileHero = () => {
  return (
    <section className="mobile-hero-section mobile-only">
      {/* Background Image */}
      <div
        className="mobile-hero-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="mobile-hero-overlay" />

      {/* Content */}
      <div className="mobile-hero-content">
        <div className="mobile-hero-roles">
          <p className="role-text">
            COGNITIVE NEUROSCIENTIST &amp; ENTREPRENEUR
          </p>
        </div>
        <h1 className="mobile-hero-name">Dr V Keerthana Kapiley</h1>
      </div>
    </section>
  );
};

export default MobileHero;
