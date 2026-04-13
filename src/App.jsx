import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blogs from "./components/Blog";
import DynamicBlog from "./components/DynamicBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import CookiePolicy from "./pages/CookiePolicy";
import ScrollToHashElement from "./components/ScrollToHashElement";

function App() {
  return (
    <>
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:blogId" element={<DynamicBlog />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
