"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { StickyVideo } from "../ui/Sticky";
// import BlogHome from "../Blog/BlogHome";
import HeroVideo from "./HeroVideo";
import Popular from "../Products/Popular";
import Feature from "./Feature";
import TextBlock from "../ui/TextBlock";

const Content = () => {
  return (
    <div className="">
      <TextParallaxContentVideo
        videoUrl="/videos/collection/collection1.mp4"
        subheading="Bossforskiy"
        heading="Создано для вашей красоты"
      >
        <div className="bg-white-primary">
          <HeroVideo />
          {/* <BlogHome /> */}
        </div>
      </TextParallaxContentVideo>

      <TextBlock
        paragraphs={[
          "Presented at the mythical Villa d’Este, on the banks of Lake Como in Italy, the CHANEL Cruise 2025/26 collection is an an ode to cinematic glamour and to the joy of getting dressed up to be noticed. On the terrace of the legendary hotel, a radiant elsewhere takes shape.",
          "Strings of beads, black sunglasses and long gloves, sequins and lamé reflect the Hollywood charm of the collection. Taffeta ball gowns, backless jumpsuit, and long capes: a carefree elegance and a spirit of celebration run through the collection.",
        ]}
      />

      <TextParallaxContentVideo
        videoUrl="/videos/collection/collection4.mp4"
        subheading="Качество"
        heading="Без компромиссов"
      >
        <div className="bg-white-primary">
          <Popular />
        </div>
      </TextParallaxContentVideo>

      <TextParallaxContentVideo
        videoUrl="/videos/bs3.mp4"
        subheading="Современность"
        heading="Медицина нового поколения"
      >
        <div className="bg-white-primary">
          <Feature />
        </div>
      </TextParallaxContentVideo>
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
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

export default Content;
