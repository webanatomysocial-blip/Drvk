import React, { useEffect } from "react";
import "../css/policy-pages.css";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-container">
      <h1 className="head-text">Terms & Conditions</h1>
      <div className="policy-content">
        <section className="policy-section">
          <h2 className="sub-head-text">1. Acceptance of Terms</h2>
          <p className="para-text">
            By accessing and using this website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="sub-head-text">2. Intellectual Property</h2>
          <p className="para-text">
            All content on this website, including text, research findings, graphics, logos, and images, is the intellectual property of Dr. V Keerthana Kapiley unless otherwise stated. You may not reproduce, distribute, or use any content without prior written permission.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="sub-head-text">3. Use of Website</h2>
          <p className="para-text">
            You agree to use the website for lawful purposes only and in a manner that does not infringe upon the rights of others or restrict their use and enjoyment of the website.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="sub-head-text">4. Limitation of Liability</h2>
          <p className="para-text">
            Dr. V Keerthana Kapiley will not be liable for any direct, indirect, incidental, or consequential damages arising from your use of, or inability to use, the website or any content provided herein.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="sub-head-text">5. Changes to Terms</h2>
          <p className="para-text">
            We reserve the right to modify these Terms & Conditions at any time. Any changes will be effective immediately upon posting on the website.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
