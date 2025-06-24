"use client";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

// Предполагаемые изображения (замените на реальные пути)
const heritageImages = {
  family:
    "https://www.chanel.com/images/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_1280/FSH-1745939781933-desktop-PhotoVIP-11.jpg", // Ч/б фото семьи основателя
  fabric:
    "https://www.chanel.com/images/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_2560/FSH-1745834852225-desktop-PushTeaser.jpg", // Драгоценная ткань крупным планом
  workshop:
    "https://www.chanel.com/images/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_2560/FSH-1746175768019-desktop-Playlist.jpg", // Мастера за работой
  dress:
    "https://www.chanel.com/images/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_2560/FSH-1745951022612-desktop-Pushlook.jpg", // Легендарное платье бренда
};

const FamilyHeritage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2 },
    },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  return (
    <div className="relative bg-black text-white py-32 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
      <div className="absolute top-20 right-10 text-gold-500 text-9xl opacity-5 font-bold rotate-12">
        HERITAGE
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {/* Заголовок с параллаксом */}
          <Parallax speed={-5}>
            <motion.div variants={fadeInUp} className="mb-20">
              <h2 className="text-5xl md:text-7xl font-light tracking-wider text-center mb-6">
                <span className="text-gold-500">СЕМЕЙНОЕ </span>НАСЛЕДИЕ
              </h2>
              <div className="w-24 h-0.5 bg-gold-500 mx-auto"></div>
            </motion.div>
          </Parallax>

          {/* Грид с контентом */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Колонка 1: Семейный портрет */}
            <motion.div variants={fadeInUp} className="relative group">
              <div className="relative h-96 overflow-hidden">
                <Image
                  fill
                  src={heritageImages.family}
                  alt="Family portrait"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-700"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-black p-6 w-3/4 border-t-4 border-r-4 border-gold-500">
                <h3 className="text-xl font-serif mb-2">Династия де Вер</h3>
                <p className="text-sm text-gray-300">
                  Основатель Жан-Люк с семьёй, 1930
                </p>
              </div>
            </motion.div>

            {/* Колонка 2: Текстовый блок */}
            <motion.div variants={fadeInUp} className="space-y-8 mt-16 lg:mt-0">
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <p className="text-lg italic mb-4">
                  Настоящая роскошь передаётся через поколения, как фамильные
                  драгоценности.
                </p>
                <p className="text-sm text-gold-500">
                  — Клэр де Вер, креативный директор
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  С 1924 года каждый элемент нашего Дома отражает философию
                  семьи де Вер: бескомпромиссное качество, внимание к деталям и
                  уважение к традициям.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Наши архивы хранят более 5,000 оригинальных эскизов и 200
                  уникальных тканей, многие из которых создавались исключительно
                  для Maison de Luxe.
                </p>
              </div>
            </motion.div>

            {/* Колонка 3: Галерея наследия */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="relative h-64 group">
                <Image
                  fill
                  src={heritageImages.fabric}
                  alt="Luxury fabric"
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-110 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-gold-500 text-sm font-serif">
                    Шёлк ручной работы
                  </h3>
                  <p className="text-xs text-gray-400">Лион, Франция</p>
                </div>
              </div>

              <div className="relative h-80 border-4 border-gold-500 p-2 bg-black">
                <Image
                  fill
                  src={heritageImages.workshop}
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                />
                <div className="absolute -top-4 -right-4 bg-black px-4 py-2 border border-gold-500">
                  <span className="text-xs text-gold-500 tracking-widest">
                    С 1924 ГОДА
                  </span>
                </div>
              </div>

              <div className="relative pt-8">
                <div className="absolute top-0 left-0 w-16 h-0.5 bg-gold-500"></div>
                <p className="text-sm text-gray-400 pl-20">
                  Каждое изделие проходит через руки 20 мастеров и требует от 40
                  до 200 часов работы.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Нижний декоративный блок */}
          <motion.div variants={fadeInUp} className="mt-32 text-center">
            <button className="w-72 h-14 px-8 py-4 border bg-black border-white hover:border-white text-white uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-500 group relative overflow-hidden">
              <span className="relative z-10 block">Discover our History</span>
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(.19,1,.22,1)]"></span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FamilyHeritage;
