import React from "react";
import MouseBlurHero from "../components/homeComponents/MouseBlurHero";
import MobileHero from "../components/homeComponents/MobileHero";
import HomeTextFade from "../components/homeComponents/HomeTextFade";
import HomeStats from "../components/homeComponents/HomeStats";
import HomeDomains from "../components/homeComponents/HomeDomains";
import PositionExperience from "../components/homeComponents/PositionExperience";
import Publications from "../components/homeComponents/Publications";
import InterjectionInfo from "../components/homeComponents/InterjectionInfo";
import Presentations from "../components/homeComponents/Presentations";
import Cognitude from "../components/homeComponents/Cognitude";

export default function Home() {
  return (
    <>
      {/* Desktop hero: blur + mouse-box */}
      <MouseBlurHero />
      {/* Mobile hero: simple, sharp, no effects */}
      <MobileHero />
      <HomeTextFade id="about" />
      <HomeStats />
      <InterjectionInfo />
      <HomeDomains id="research" />
      <Presentations id="awards" />
      <PositionExperience id="experience" />
      <Publications id="publications" />

      <Cognitude />
    </>
  );
}
