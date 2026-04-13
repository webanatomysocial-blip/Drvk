// src/components/homeComponents/HomeTextFade.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../css/homeCss/HomeTextFade.css";

gsap.registerPlugin(ScrollTrigger);

const HomeTextFade = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    const charTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 50%",
        end: "bottom 50%",
        scrub: 0.3,
      },
    });

    charTl.to(".htf-char", {
      color: "black",
      filter: "blur(0px)",
      duration: 1.5,
      stagger: 0.1,
      ease: "power2.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      charTl.kill();
    };
  }, []);

  // Each string in this array is one visual line — no indentation, no embedded \n
  const lines = [
    "I am a cognitive neuroscientist (NPDF) and entrepreneur working at the",
    "intersection of brain, behaviour, language, and intelligent systems. My",
    "research investigates the neural and cognitive mechanisms underlying",
    "language and attention, with a particular focus on bilingualism, child development, and clinical neuroscience.",
  ];

  return (
    <section className="htf-section" ref={sectionRef} id="about">
      <div className="htf-container" ref={containerRef}>
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className="htf-line">
            {line.split(" ").map((word, wordIndex, wordsArr) => (
              <span key={wordIndex} className="htf-word">
                {word.split("").map((char, charIndex) => (
                  <span key={charIndex} className="htf-char">
                    {char}
                  </span>
                ))}
                {/* Add space after each word except the last */}
                {wordIndex < wordsArr.length - 1 && (
                  <span className="htf-space" />
                )}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeTextFade;
