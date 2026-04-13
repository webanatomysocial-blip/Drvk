import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../css/homeCss/InterjectionInfo.css";
import keerthanaImg from "../../assets/keerthana.avif";
import sase from "../../assets/sase.avif";
import brain from "../../assets/brain.avif";

gsap.registerPlugin(ScrollTrigger);

const InterjectionInfo = ({id}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const charTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
        end: "50% 70%",
        scrub: 0.3,
      },
    });

    charTl.to(".ii-char", {
      color: "black",
      filter: "blur(0px)",
      duration: 1.5,
      stagger: 0.08,
      ease: "power2.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      charTl.kill();
    };
  }, []);

  const mainText =
    "I'm also a network automation engineer, I integrate insights from cognitive science, IT automation and AI systems.";

  return (
    <section className="ii-section" ref={sectionRef} id={id}>
      <div className="keerthana-section-sticky">
        <h2 className="head-text">The Inception of Parceldrop//</h2>
        <div className="ii-image-wrapper-sticky">
          <img src={sase} alt="SASE" className="sase-logo" />
          <a href="http://thesase.tech/" className="white-bg-btn">
            Visit SASE Website
          </a>
        </div>
      </div>

      <div className="ii-container">
        {/* Left Side */}
        <div className="ii-left">
          <h2 className="ii-heading head-text">
            Interjection of InfoTech – Parceldrop networks
          </h2>
          <div className="ii-image-wrapper">
            <img src={brain} alt="Keerthana" className="ii-image" />
          </div>
        </div>

        {/* Right Side */}
        <div className="ii-right">
          {/* Animated Main Text */}
          <div className="ii-blur-container">
            {mainText.split(" ").map((word, wordIndex, wordsArr) => (
              <span key={wordIndex} className="ii-word">
                {word.split("").map((char, charIndex) => (
                  <span key={charIndex} className="ii-char">
                    {char}
                  </span>
                ))}
                {wordIndex < wordsArr.length - 1 && (
                  <span className="ii-space">&nbsp;</span>
                )}
              </span>
            ))}
          </div>

          {/* Bottom Columns */}
          <div className="ii-bottom-grid">
            <div className=" para-text">
              My industry experience includes developing Power BI dashboards for
              device health analytics, building automation pipelines using
              Python and GitLab CI/CD, creating IoT devices with AWS
              integration, and designing LLM-powered chatbots, predictive
              models, and applications.
            </div>
            <div className=" para-text">
              I created a fully functional, centralised automated system for
              Parceldrop Network Solutions Pvt. Ltd., for which I hold a
              provisional patent. Currently consulting as a Senior Network
              Engineer at RiK Global, Madhapur, Hyderabad.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterjectionInfo;
