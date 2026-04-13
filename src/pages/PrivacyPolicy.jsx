import React, { useEffect } from "react";
import "../css/policy-pages.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-container">
      <h1 className="head-text">Privacy Policy</h1>
      <div className="policy-content">
        <section className="policy-section">
          <h2 className="sub-head-text">1. Introduction</h2>
          <p className="para-text">
            Welcome to the personal website of Dr. V Keerthana Kapiley. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="sub-head-text">2. Information We Collect</h2>
          <p className="para-text">
            We may collect information that you provide directly to us, such as when you contact us via email. This may include your name, email address, and any other information you choose to provide.
          </p>
          <p className="para-text">
            We also automatically collect certain information when you visit our site, such as your IP address, browser type, and operating system, to improve our website's functionality and user experience.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="sub-head-text">3. Use of Information</h2>
          <p className="para-text">
            The information we collect is used to:
          </p>
          <ul className="para-text">
            <li>Respond to your inquiries and provide information about our research.</li>
            <li>Monitor and analyze website usage and trends.</li>
            <li>Improve the content and design of our website.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="sub-head-text">4. Data Protection</h2>
          <p className="para-text">
            We implement reasonable security measures to protect your information from unauthorized access, disclosure, or destruction. However, please note that no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="sub-head-text">5. Contact Us</h2>
          <p className="para-text">
            If you have any questions about this Privacy Policy, please contact us at name@mail.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
