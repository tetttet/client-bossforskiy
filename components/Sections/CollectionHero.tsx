"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import React from "react";
import Text from "../ui/Text";

const CollectionHero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Настройки анимации
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Плавные преобразования с пружинной физикой
  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Параллакс эффект (более мягкий)
  const y = useTransform(smoothScrollY, [0, 1], [0, -50]);

  // Масштабирование с эластичностью
  const scale = useTransform(smoothScrollY, [0, 1], [1, 1.03]);

  // Плавное изменение прозрачности
  const opacity = useTransform(
    smoothScrollY,
    [0, 0.3, 0.8, 1],
    [0.9, 1, 1, 0.9]
  );

  // Эффект "мягкого свечения" при появлении
  const brightness = useTransform(smoothScrollY, [0, 0.5], [0.8, 1]);
  const filter = useTransform(brightness, (b) => `brightness(${b})`);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // начальная проверка

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
          alt="Collection Hero Image"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Bossforskiy Collection
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Discover the latest trends and exclusive pieces from our
              collection.
            </p>
          </div>

          <button className="px-8 py-4 border bg-white border-white hover:border-black text-black uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all duration-500 group relative overflow-hidden">
            <span className="relative z-10 block">
              Discover the Collections
            </span>
            <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(.19,1,.22,1)]"></span>
          </button>
        </div>

        <div className="text-black text-[13px] font-semibold text-center max-w-5xl mx-auto px-4 py-24 bg-white/90 backdrop-blur-md rounded-lg">
          <span>
            Presented at the mythical Villa d’Este, on the banks of Lake Como in
            Italy, the CHANEL Cruise 2025/26 collection is an an ode to
            cinematic glamour and to the joy of getting dressed up to be
            noticed. On the terrace of the legendary hotel, a radiant elsewhere
            takes shape.
          </span>
          <span className="block mt-5">
            Strings of beads, black sunglasses and long gloves, sequins and lamé
            reflect the Hollywood charm of the collection. Taffeta ball gowns,
            backless jumpsuit, and long capes: a carefree elegance and a spirit
            of celebration run through the collection.
          </span>
        </div>
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
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        <div className="absolute bottom-5 left-0 right-0 text-white z-10 text-center">
          <h3 className="text-lg font-semibold">Lip Glow Butter</h3>
          <p className="text-sm">
            The new lip gloss-in-balm infused with peptide and ceramide
          </p>
          <button className="mt-2 text-sm relative after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Discover Our Collection
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
          style={{
            y,
            scale,
            opacity,
            filter,
          }}
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
          Your browser does not support the video tag.
        </motion.video>

        {/* Текст с плавной анимацией */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1.5,
              delay: 0.4,
            },
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
            Discover Our World
          </motion.h2>
        </motion.div>
      </motion.div>

      <div className="relative h-[200vh] w-full overflow-hidden">
        <div className="relative flex h-screen w-full">
          <div className="w-full md:w-1/2 h-full">
            <Image
              width={500}
              height={500}
              src="/images/collection/collection1.webp"
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
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

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
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-1/2 hidden md:flex h-full">
            <Image
              width={500}
              height={500}
              src="/images/collection/collection2.webp"
              alt="Rosy Glow Stick"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>

      <Text text="Presented at the mythical Villa d’Este, on the banks of Lake Como in Italy, the BOSSFORSKIY Cruise 2025/26 collection is an an ode to cinematic glamour and to the joy of getting dressed up to be noticed. On the terrace of the legendary hotel, a radiant elsewhere takes shape. Strings of beads, black sunglasses and long gloves, sequins and lamé reflect the Hollywood charm of the collection. Taffeta ball gowns, backless jumpsuit, and long capes: a carefree elegance and a spirit of celebration run through the collection." />
    </>
  );
};

export default CollectionHero;
