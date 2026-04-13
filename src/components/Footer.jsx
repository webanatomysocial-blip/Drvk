import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const marqueeText =
    "Cognitude Scientist . Entrepreneur . Dance & Art Curator . Researcher . ";

  return (
    <footer className="footer-wrapper">
      {/* Main black section */}
      <div className="footer-main">
        {/* Left: Bio */}
        <div className="footer-bio-col">
          <h3 className="footer-name sub-head-text-white">
            Dr. V Keerthana Kapiley
          </h3>
          <p className="footer-bio para-text-white">
            I am a cognitive neuroscientist and National Postdoctoral Fellow, as
            well as an entrepreneur, working at the intersection of brain,
            behaviour, language, and intelligent systems.
          </p>
          <p className="footer-copy para-text-white">
            © Copyright {currentYear} – All rights reserved. Design & Developed
            by{" "}
            <a href="https://webanatomy.in/" className="footer-link">
              WebAnatomy
            </a>
          </p>
        </div>

        {/* Right: Link columns */}
        <div className="footer-links-grid">
          <div className="footer-link-col">
            <h4 className="footer-col-head small-sub-head-text-white">
              Information
            </h4>
            <ul>
              <li>
                <Link
                  to="/privacy-policy"
                  className="footer-link para-text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="footer-link para-text-white"
                >
                  T&C
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy"
                  className="footer-link para-text-white"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-link-col">
            <h4 className="footer-col-head small-sub-head-text-white">
              Socials
            </h4>
            <ul>
              <li>
                <a href="#" className="footer-link para-text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="footer-link para-text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-link-col">
            <h4 className="footer-col-head small-sub-head-text-white">
              Contact
            </h4>
            <ul>
              <li>
                <a
                  href="mailto:name@mail.com"
                  className="footer-link para-text-white"
                >
                  Email : name@mail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+910987654321"
                  className="footer-link para-text-white"
                >
                  +91 09876 54321
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="footer-marquee-strip">
        <div className="footer-marquee-track">
          <span className="footer-marquee-text">{marqueeText}</span>
          <span className="footer-marquee-text" aria-hidden="true">
            {marqueeText}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
