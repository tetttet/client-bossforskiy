"use client";
import FamilyHeritage from "@/components/Sections/FamilyHeritage";
import FamilyHero from "@/components/Sections/FamilyHero";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const page = () => {
  return (
    <>
      <ParallaxProvider>
        <FamilyHero />
        <FamilyHeritage />
      </ParallaxProvider>
    </>
  );
};

export default page;
