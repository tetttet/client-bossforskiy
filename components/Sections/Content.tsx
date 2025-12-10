"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { StickyVideo } from "../ui/Sticky";
// import BlogHome from "../Blog/BlogHome";
import HeroVideo from "./HeroVideo";
// import Popular from "../Products/Popular";
// import Feature from "./Feature";
import TextBlock from "../ui/TextBlock";
import { useTranslations } from "next-intl";

const Content = () => {
  const t = useTranslations("Content.Content");

  return (
    <div className="">
      <TextParallaxContentVideo
        videoUrl="/videos/collection/collection1.mp4"
        subheading={t("bossforskiy.subheading")}
        heading={t("bossforskiy.heading")}
      >
        <div className="bg-white-primary">
          <HeroVideo />
        </div>
      </TextParallaxContentVideo>

      <TextBlock
        paragraphs={[t("bossforskiy.paragraph1"), t("bossforskiy.paragraph2")]}
      />

      <TextParallaxContentVideo
        videoUrl="/videos/collection/collection4.mp4"
        subheading={t("quality.subheading")}
        heading={t("quality.heading")}
      >
        {/* <div className="bg-white-primary">
          <Popular />
        </div> */}
        <>
        </>
      </TextParallaxContentVideo>

      {/* <TextParallaxContentVideo
        videoUrl="/videos/bs3.mp4"
        subheading={t("trust.subheading")}
        heading={t("trust.heading")}
      >
        <></>
      </TextParallaxContentVideo> */}
    </div>
  );
};

const IMG_PADDING = 0;

interface TextParallaxContentVideoProps {
  videoUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}

const TextParallaxContentVideo = ({
  videoUrl,
  subheading,
  heading,
  children,
}: TextParallaxContentVideoProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh] bg-gradient-to-b from-[#ffffff] via-[#ede5dc] to-[#f7ece0]">
        <StickyVideo videoUrl={videoUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

type OverlayCopyProps = {
  subheading: string;
  heading: string;
};

const OverlayCopy = ({ subheading, heading }: OverlayCopyProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="text-center content-subheading md:text-3xl!">
        {subheading}
      </p>
      <p className=" text-center !mt-[20px] content-heading md:text-5xl!">
        {heading}
      </p>
    </motion.div>
  );
};

export default Content;
