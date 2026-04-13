import React, { useEffect } from "react";
import "../css/policy-pages.css";

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-container">
      <h1 className="head-text">Cookie Policy</h1>
      <div className="policy-content">
        <section className="policy-section">
          <h2 className="sub-head-text">1. What are Cookies?</h2>
          <p className="para-text">
            Cookies are small text files that are stored on your device
            (computer or mobile device) when you visit certain websites. They
            are widely used to make websites work or perform more efficiently,
            as well as to provide information to the site owners.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="sub-head-text">2. How We Use Cookies</h2>
          <p className="para-text">
            We use cookies to improve your experience on our website.
            Specifically, we use cookies to:
          </p>
          <ul className="para-text">
            <li>Remember your preferences and settings.</li>
            <li>Analyze website traffic and usage patterns.</li>
            <li>
              Help us understand how users interact with our site so we can
              improve it.
            </li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="sub-head-text">3. Managing Cookies</h2>
          <p className="para-text">
            Most web browsers allow you to control cookies through their
            settings. You can set your browser to refuse cookies or delete them
            after your visit. However, please note that some features of our
            website may not function properly if cookies are disabled.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="sub-head-text">4. Third-Party Cookies</h2>
          <p className="para-text">
            Some content or applications on the website may be served by third
            parties, such as Google Analytics. These third parties may use
            cookies to collect information about your online activities over
            time and across different websites.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="sub-head-text">5. Contact Us</h2>
          <p className="para-text">
            If you have any questions about our use of cookies, please contact
            us at name@mail.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
