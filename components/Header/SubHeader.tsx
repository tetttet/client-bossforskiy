import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "keen-slider/keen-slider.min.css";
import { ChevronRight, ChevronLeft, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { products } from "@/constant/products";
import Link from "next/link";

type SubHeaderProps = {
  setMenuOpen: (open: boolean) => void;
};

const SubHeader = ({ setMenuOpen }: SubHeaderProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 3.5,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 768px)": {
        // или любой другой подходящий брейкпоинт
        slides: {
          perView: 2,
          spacing: 8, // можно уменьшить отступ для мобильных устройств
        },
      },
    },
  });

  const menu = ["Skincare", "Makeup", "Fragrances"];
  const submenu = [
    {
      title: "About Us",
      link: "/bossforskiy/about",
    },
    {
      title: "Our Philosophy",
      link: "/bossforskiy/fashion/collections",
    },
    {
      title: "Bossforskiy Family",
      link: "/bossforskiy/bossforskiy-family",
    },
  ];

  const links = [
    { title: "New Arrivals", link: "/bossforskiy/new-arrivals" },
    { title: "Best Sellers", link: "/bossforskiy/best-sellers" },
    { title: "Gift Sets", link: "/bossforskiy/gift-sets" },
  ];

  const bottomLinks = [
    "Find a Boutique",
    "Book a Consultation",
    "Beauty Advice",
  ];

  const iconVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="p-4 md:p-6 shadow-md text-black bg-gradient-to-b from-[#ffffff] via-[#efede9] to-[#fde3d8]">
      <div className="flex flex-col md:flex-row max-w-full md:max-w-11/12 mx-auto h-full">
        {/* Mobile menu button (visible only on small screens) */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <span className="text-2xl font-bold"></span>
          <div
            className="flex items-center gap-2 cursor-pointer select-none group"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 sm:w-7 sm:h-7 group-hover:text-black" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 sm:w-7 sm:h-7 group-hover:text-black" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
            style={{
              position: "sticky",
              zIndex: 40,
              backgroundColor: "white",
            }}
          >
            <aside className="bg-gradient-to-b from-[#fcfcfb] via-[#f3f2ef] to-[#f1ece7] md:flex md:w-1/2 p-2 md:p-6 flex-col justify-between">
              <div className="space-y-2">
                {menu.map((item, i) => (
                  <div
                    key={i}
                    className="font-semibold text-lg md:text-2xl hover:text-[#616161] transition-all duration-200 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="space-y-2 mt-4 md:mt-8">
                {submenu.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setMenuOpen(false)}
                    className="font-semibold mt-1 text-lg md:text-2xl hover:text-[#616161] transition-all duration-200 cursor-pointer"
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </div>
                ))}
              </div>
              <div className="space-y-2 mt-4 md:mt-8">
                {links.map((item, i) => (
                  <Link
                    onClick={() => setMenuOpen(false)}
                    href={item.link}
                    key={i}
                  >
                    <div className="mb-2 font-semibold text-lg md:text-2xl hover:text-[#616161] transition-all duration-200 cursor-pointer">
                      {item.title}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 md:mt-10 space-y-2 text-sm md:text-base text-gray-700">
                {bottomLinks.map((link, i) => (
                  <div
                    key={i}
                    className="hover:text-black transition-all duration-200 cursor-pointer"
                  >
                    {link}
                  </div>
                ))}
              </div>
            </aside>
          </motion.div>
        )}
        <aside className="hidden md:flex md:w-1/2 p-2 md:p-6 flex-col justify-between">
          <div className="space-y-2">
            {menu.map((item, i) => (
              <div
                key={i}
                className="font-semibold text-lg md:text-2xl hover:text-[#616161] transition-all duration-200 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="space-y-2 mt-4 md:mt-8">
            {submenu.map((item, i) => (
              <div
                key={i}
                className="font-semibold text-lg md:text-2xl hover:text-[#616161] transition-all duration-200 cursor-pointer"
              >
                <Link onClick={() => setMenuOpen(false)} href={item.link}>
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
          <div className="space-y-2 mt-4 md:mt-8">
            {links.map((item, i) => (
              <Link
                onClick={() => setMenuOpen(false)}
                href={item.link}
                key={i}
                className=""
              >
                <div className="mb-2 font-semibold text-lg md:text-2xl hover:text-[#616161] transition-all duration-200 cursor-pointer">
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 md:mt-10 space-y-[1px] text-sm md:text-base text-gray-700">
            {bottomLinks.map((link, i) => (
              <div
                key={i}
                className="hover:text-black transition-all duration-200 cursor-pointer"
              >
                {link}
              </div>
            ))}
          </div>
        </aside>

        <main className="relative flex-1 p-2 md:p-6 w-full md:w-2/3">
          <span className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 block ml-4">
            Discover the Latest in Luxury
          </span>
          <div ref={sliderRef} className="keen-slider">
            {products.map((watch, i) => (
              <div
                className="keen-slider__slide will-change-transform transition-transform duration-500"
                key={i}
              >
                <Link
                  onClick={() => setMenuOpen(false)}
                  href={`/bossforskiy/products/${watch.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  <div className="p-2 md:p-4 flex flex-col items-center space-y-2 md:space-y-4 w-full md:w-72">
                    <div className="relative w-full h-48 md:h-80 rounded-xl md:rounded-2xl overflow-hidden">
                      <Image
                        src={watch.thumbnail}
                        alt={watch.name}
                        fill
                        priority={i < 3}
                        sizes="(max-width: 768px) 100vw, 288px"
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center text-base md:text-lg font-semibold">
                      {watch.name}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 flex gap-2 md:gap-3 z-10">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="bg-white/60 hover:bg-white/30 text-gray-700 p-1 md:p-2 rounded-full"
            >
              <ChevronLeft size={16} className="md:h-5 md:w-5" />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="bg-white/20 hover:bg-white/30 text-gray-700 p-1 md:p-2 rounded-full"
            >
              <ChevronRight size={16} className="md:h-5 md:w-5" />
            </button>
          </div>
        </main>
      </div>
      <div>
        <div className="bg-gray-300 h-[1px]"></div>
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center p-2 md:p-4 space-y-2 md:space-y-0">
            <div className="text-xs md:text-sm text-gray-500">
              &copy; 2025{" "}
              <span className="text-black font-medium">Bossforskiy Luxury</span>
              . All rights reserved.
            </div>
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
              {bottomLinks.map((link, i) => (
                <div
                  key={i}
                  className="text-xs md:text-sm text-gray-500 hover:text-black transition-all duration-200 cursor-pointer"
                >
                  {link}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
