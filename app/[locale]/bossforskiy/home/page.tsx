"use client";
import Cookie from "@/components/Popup/Cookie";
import Popular from "@/components/Products/Popular";
import Content from "@/components/Sections/Content";
import HeroHome from "@/components/Sections/HeroHome";
import React from "react";

const page = () => {
  return (
    <div className="ephesis-font">
      <HeroHome />
      <Popular />
      <Content />
      <Cookie />
    </div>
  );
};

export default page;
