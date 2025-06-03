import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroVideo = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const { scrollY } = useScroll();

  // Анимация отступов (изначально 5%, при скролле → 0%)
  const padding = useTransform(scrollY, [0, 300], ["5%", "0%"]);

  // Анимация ширины (изначально 90%, при скролле → 100%)
  const width = useTransform(scrollY, [0, 300], ["90%", "100%"]);

  // Проверяем ширину экрана
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-[200vh]">
      {/* Обертка с sticky-эффектом */}
      <motion.div
        className="sticky top-0 flex w-full h-screen overflow-hidden"
        style={{
          paddingLeft: isWideScreen ? padding : "0%",
          paddingRight: isWideScreen ? padding : "0%",
        }}
      >
        {/* Левое видео */}
        <motion.div
          className="relative h-full"
          style={{
            width: isWideScreen ? width : "100%",
            flex: isWideScreen ? "0 1 50%" : "0 1 100%",
          }}
        >
          <video
            className="w-full h-full object-cover"
            src="/videos/collection/collection3.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-serif tracking-widest uppercase bg-black/30 px-6 py-3">
              Bossforskiy
            </h1>
          </div>
        </motion.div>

        {/* Правое видео (только на широких экранах) */}
        {isWideScreen && (
          <motion.div
            className="relative h-full"
            style={{
              width: width,
              flex: "0 1 50%",
            }}
          >
            <video
              className="w-full h-full object-cover"
              src="/videos/collection/collection2.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-4xl md:text-6xl font-serif tracking-widest uppercase bg-black/30 px-6 py-3">
                Luxury Brand
              </h1>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default HeroVideo;
