"use client";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";

// Предполагаем, что эти изображения импортированы или загружены через public
// В реальном проекте нужно добавить соответствующие файлы
const images = {
  founder:
    "https://www.chanel.com/puls-img/c_limit,w_2800/q_auto:good,dpr_auto,f_auto/1738141322538-homepagecorpoonedesktop23jpg_3240x5760.jpg", // Портрет основателя в ч/б
  vintage:
    "https://www.chanel.com/puls-img/c_limit,w_2800/q_auto:good,dpr_auto,f_auto/1742562117322-homepagecorpoonedesktopjpg_3240x5760.jpg", // Винтажный магазин
  perfume:
    "https://www.chanel.com/puls-img/c_limit,w_2800/q_auto:good,dpr_auto,f_auto/1745920085671-onehpcorpoprelaunchslidingherodesktop2880x1260px0215jpg_1260x2880.jpg", // Хрустальный флакон
  atelier:
    "https://www.chanel.com/puls-img/c_limit,w_2800/q_auto:good,dpr_auto,f_auto/1747128609798-onehpcorpoprelaunchslidingherod2880x1296px1jpg_2592x5760.jpg", // Мастерская с тканями
};

const FamilyHero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <div className="relative overflow-hidden bg-black/95 text-white min-h-screen font-serif">
      {/* Фоновое видео или изображение */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
        <Image
          fill
          src={images.founder}
          alt="Founder portrait"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Основной контент с параллакс эффектами */}
      <div className="container mx-auto px-6 relative z-10 py-32" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <Parallax speed={-10}>
            <h1 className="mb-16 lg:mb-8 text-5xl md:text-8xl font-light tracking-widest text-gold-500">
              BOSSFORSKIY LUXURY
            </h1>
          </Parallax>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Parallax speed={5}>
                <motion.p
                  className="text-xl leading-relaxed border-l-4 border-gold-500 pl-6 py-2"
                  variants={fadeIn}
                >
                  В 1924 году, среди бурлящих улиц Парижа, молодой визионер
                  Жан-Люк де Вер создал первый эскиз того, что станет символом
                  вечной элегантности...
                </motion.p>
              </Parallax>

              <motion.div
                className="relative h-64 w-full"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.5, duration: 1 },
                  },
                }}
              >
                <Image
                  fill
                  src={images.vintage}
                  alt="First boutique"
                  className="absolute inset-0 w-full h-full object-cover shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-gold-500 bg-black/80 p-2">
                  <Image
                    fill
                    src={images.perfume}
                    alt="Signature perfume"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                className="relative h-96"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 0.7, duration: 1.2 },
                  },
                }}
              >
                <Image
                  fill
                  src={images.atelier}
                  alt="Atelier"
                  className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute -inset-8 border border-gold-500 pointer-events-none"></div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 1, duration: 1 },
                  },
                }}
              >
                <p className="text-lg leading-relaxed mt-2">
                  Каждое творение Maison de Luxe — это наследие пяти поколений
                  мастеров, воплощенное в драгоценных тканях, редких ароматах и
                  безупречном крое. Наш ателье на Rue Cambon продолжает традиции
                  ручной работы, где каждую деталь создают с любовью к
                  совершенству.
                </p>
                <button className="px-8 py-4 border bg-white border-white hover:border-black text-black uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all duration-500 group relative overflow-hidden">
                  <span className="relative z-10 block">
                    Discover our History
                  </span>
                  <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(.19,1,.22,1)]"></span>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-1/4 left-10 w-16 h-16 border border-gold-500 rotate-45 hidden md:block"></div>
      <div className="absolute bottom-1/3 right-20 w-24 h-24 border border-gold-500 rounded-full hidden md:block"></div>
      <div className="absolute top-1/3 right-1/4 text-gold-500 text-9xl opacity-10 font-bold hidden md:block">
        1924
      </div>
    </div>
  );
};

export default FamilyHero;
