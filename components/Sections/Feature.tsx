import React, { useRef } from "react";
import { motion } from "framer-motion";

const Feature = () => {
  const videoContainerRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Видео фон с параллаксом */}
      <div ref={videoContainerRef} className="absolute inset-0 z-0 h-[125%]">
        <video
          src="videos/v3.mp4"
          typeof="video/mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Градиентное затемнение */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/10"></div>
      </div>

      {/* Фиксированный контент */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white tracking-wider mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Bossforskiy Deep Time
        </motion.h2>

        <motion.div
          className="pointer-events-auto" // Включаем события мыши только для кнопки
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <button className="px-8 py-4 bg-transparent border border-white text-white uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-500 group relative overflow-hidden">
            <span className="relative z-10 block">
              Discover the Collections
            </span>
            <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(.19,1,.22,1)]"></span>
          </button>
        </motion.div>

        {/* Декоративные элементы */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Логотип */}
      <div className="fixed top-8 left-8 z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-white text-2xl font-serif tracking-widest"
        >
          LV
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;
