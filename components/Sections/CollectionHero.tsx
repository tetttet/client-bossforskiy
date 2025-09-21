"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useTranslations } from "next-intl";
import Text from "../ui/Text";
import TextBlock from "../ui/TextBlock";

const CollectionHero = () => {
  const t = useTranslations("Philo");
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const y = useTransform(smoothScrollY, [0, 1], [0, -50]);
  const scale = useTransform(smoothScrollY, [0, 1], [1, 1.03]);
  const opacity = useTransform(
    smoothScrollY,
    [0, 0.3, 0.8, 1],
    [0.9, 1, 1, 0.9]
  );
  const brightness = useTransform(smoothScrollY, [0, 0.5], [0.8, 1]);
  const filter = useTransform(brightness, (b) => `brightness(${b})`);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <div className="relative">
        <Image
          src={
            isMobile
              ? "/images/hero/mobile-hero-collection.webp"
              : "/images/hero/hero-collection.webp"
          }
          alt={t("hero.title")}
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-widest -mb-0">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            {t("hero.subtitle")}
          </p>

          <button className="px-8 py-4 border bg-white border-white hover:border-black text-black uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all duration-500 group relative overflow-hidden mt-4">
            <span className="relative z-10">{t("hero.button")}</span>
            <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(.19,1,.22,1)]"></span>
          </button>
        </div>

        <TextBlock
          paragraphs={[t("textblock1.paragraph1"), t("textblock1.paragraph2")]}
        />
      </div>

      <div className="relative h-full w-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/collection/collection1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <div className="absolute bottom-5 left-0 right-0 text-white z-10 text-center">
          <h3 className="text-lg font-semibold">{t("video1.title")}</h3>
          <p className="text-sm">{t("video1.subtitle")}</p>
          <button className="mt-2 text-sm relative after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            {t("video1.button")}
          </button>
        </div>
      </div>

      <motion.div
        ref={containerRef}
        className="w-full relative flex py-0 lg:py-40 px-0 lg:px-96 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-30%" }}
        transition={{ duration: 1.5, ease: "circOut" }}
      >
        <motion.video
          className="w-full h-auto object-cover will-change-transform"
          autoPlay
          muted
          loop
          playsInline
          style={{ y, scale, opacity, filter }}
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1.8,
              ease: [0.16, 0.77, 0.47, 0.97],
              delay: 0.2,
            },
          }}
        >
          <source src="/videos/collection/collection4.mp4" type="video/mp4" />
        </motion.video>

        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1.5, delay: 0.4 },
          }}
        >
          <motion.h2
            className="text-white text-5xl font-medium tracking-wider"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                mass: 0.5,
                stiffness: 50,
                damping: 12,
                delay: 0.6,
              },
            }}
          >
            {t("video2.title")}
          </motion.h2>
        </motion.div>
      </motion.div>

      <div className="relative h-[238vh] w-full overflow-hidden">
        <div className="relative flex h-screen w-full">
          <div className="w-full md:w-1/2 h-full">
            <Image
              src="/images/collection/collection1.webp"
              width={500}
              height={500}
              alt="Rosy Glow Stick"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="w-1/2 hidden md:flex h-full">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="/videos/collection/collection2.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <TextBlock
          paragraphs={[t("textblock2.paragraph1"), t("textblock2.paragraph2")]}
        />

        <div className="relative flex h-screen w-full">
          <div className="w-full md:w-1/2 h-full">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="/videos/collection/collection3.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="w-1/2 hidden md:flex h-full">
            <Image
              src="/images/collection/collection2.webp"
              width={500}
              height={500}
              alt="Rosy Glow Stick"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>

      <div className="-mb-24">
        <Text text={t("text.final")} />
      </div>
    </>
  );
};

export default CollectionHero;
