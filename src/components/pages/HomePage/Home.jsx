import React from "react";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "../../Data";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
