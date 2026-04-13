import React, { useRef } from "react";
import gsap from "gsap";
import "../../css/homeCss/mouse-blur-hero.css";
import heroBg from "../../assets/banner.avif";

const MouseBlurHero = () => {
  const containerRef = useRef(null);
  const boxRef = useRef(null);
  const clearBgRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const box = boxRef.current;
    const clearBg = clearBgRef.current;
    if (!container || !box || !clearBg) return;

    const rect = container.getBoundingClientRect();
    const pointerX = e.clientX - rect.left;
    const pointerY = e.clientY - rect.top;
    const x = pointerX - rect.width / 2;
    const y = pointerY - rect.height / 2;

    gsap.to(box, { x, y, duration: 0.5, ease: "power3.out" });
    gsap.set(clearBg, {
      backgroundPosition: `${-pointerX + 200}px ${-pointerY + 200}px`,
    });
  };

  const handleMouseLeave = () => {
    const box = boxRef.current;
    const clearBg = clearBgRef.current;
    if (!box || !clearBg) return;

    gsap.to(box, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
    gsap.set(clearBg, { backgroundPosition: "center center" });
  };

  return (
    <section
      className="hero-mouse-section desktop-only"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Blurred Background Layer */}
      <div
        className="hero-bg-blurred"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Main Content Overlay */}
      <div className="hero-content">
        <div className="top-row">
          <p className="role-text left">
            COGNITIVE NEUROSCIENTIST &amp; ENTREPRENEUR
          </p>
        </div>
        <h1 className="name-text">Dr V Keerthana Kapiley</h1>
      </div>

      {/* The Following Box (Clear Lens) */}
      <div className="mouse-box" ref={boxRef}>
        <div
          className="clear-bg-layer"
          ref={clearBgRef}
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="plus-sign">+</div>
      </div>
    </section>
  );
};

export default MouseBlurHero;
