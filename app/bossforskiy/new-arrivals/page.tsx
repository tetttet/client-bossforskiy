import { Collaboration } from "@/components/anim/collaboration";
import { Features } from "@/components/anim/features";
import { Hero } from "@/components/anim/hero";
import { SamePage } from "@/components/anim/same-page";
import { StreamlinedExperience } from "@/components/anim/streamlined-experience";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <div className="relative z-10 w-full overflow-x-clip">
        <Collaboration />
        <SamePage />
        <StreamlinedExperience />
        <Features />
      </div>
    </>
  );
};

export default page;
