"use client";

import { Suspense, useEffect, useState } from "react";
import { Menu, Heart, X, Search, ShoppingBag } from "lucide-react";
import SubHeader from "./SubHeader";
import { motion, AnimatePresence } from "framer-motion";
import Cart from "../ui/Cart";
import Link from "next/link";
import SearchComponent from "../ui/Search";
import Overlay from "../ui/Overlay";
import AnimatedDropdown from "../ui/AnimatedDropdown";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const iconVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = `
    sticky top-0 w-full py-5 sm:py-6 px-6 z-40 transition-all duration-300
    ${
      scrolled
        ? "bg-transparent backdrop-blur-sm text-white"
        : "bg-white text-black"
    }
    ${menuOpen ? "bg-white text-black" : ""}
    hover:bg-white hover:text-black
  `;

  return (
    <>
      <Overlay isVisible={menuOpen} onClose={() => setMenuOpen(false)} />
      <Overlay isVisible={showSearch} onClose={() => setShowSearch(false)} />

      <header className={headerClass}>
        <div className="relative h-28 max-w-7xl mx-auto flex items-center justify-between">
          {/* Левая часть */}
          <div
            className="flex items-center gap-2 cursor-pointer select-none group flex-1"
            onClick={() => {
              setShowSearch(false);
              if (window.scrollY === 0) {
                setMenuOpen((prev) => !prev);
              } else {
                const handleScroll = () => {
                  if (window.scrollY === 0) {
                    window.removeEventListener("scroll", handleScroll);
                    setMenuOpen((prev) => !prev);
                  }
                };
                window.addEventListener("scroll", handleScroll);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 group-hover:text-black" />
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
                  <Menu className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 group-hover:text-black" />
                </motion.div>
              )}
            </AnimatePresence>
            <motion.span
              key={menuOpen ? "close" : "menu"}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="text-base font-medium group-hover:text-black"
            />
          </div>

          {/* Центр: Лого */}
          <Link
            href="/bossforskiy/home"
            onClick={() => setMenuOpen(false)}
            className="absolute left-1/2 transform -translate-x-1/2 header-font uppercase text-center"
          >
            {/* Bossforskiy */}
            <Image
              src="/logo-removed-bg.png"
              alt="Bossforskiy Logo"
              width={150}
              height={150}
              className="h-32 sm:h-36 object-contain"
            />
          </Link>

          {/* Правая часть */}
          <div className="flex items-center gap-4 text-sm sm:text-base font-normal flex-1 justify-end">
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => {
                setMenuOpen(false);
                if (window.scrollY === 0) {
                  setShowSearch((prev) => !prev);
                } else {
                  const handleScroll = () => {
                    if (window.scrollY === 0) {
                      window.removeEventListener("scroll", handleScroll);
                      setShowSearch((prev) => !prev);
                    }
                  };
                  window.addEventListener("scroll", handleScroll);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <Search className="w-5 h-5" />
            </div>
            <Link
              href="/bossforskiy/wishlist"
              onClick={() => {
                setMenuOpen(false);
                setShowSearch(false);
              }}
              className="flex items-center gap-1 cursor-pointer"
            >
              <Heart className="w-5 h-5" />
            </Link>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => {
                if (window.scrollY === 0) {
                  setShowCart((prev) => !prev);
                  setMenuOpen(false);
                  setShowSearch(false);
                } else {
                  const handleScroll = () => {
                    if (window.scrollY === 0) {
                      window.removeEventListener("scroll", handleScroll);
                      setShowCart((prev) => !prev);
                      setMenuOpen(false);
                    }
                  };
                  window.addEventListener("scroll", handleScroll);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <ShoppingBag className="w-5 h-5" />
            </div>

            {showCart && (
              <div className="absolute right-0 mt-2 z-50">
                <Cart onClose={() => setShowCart(false)} />
              </div>
            )}
          </div>
        </div>
      </header>

      <AnimatedDropdown isOpen={menuOpen}>
        <SubHeader setMenuOpen={setMenuOpen} />
      </AnimatedDropdown>

      <AnimatedDropdown isOpen={showSearch}>
        <Suspense fallback={<div className="p-4">Loading search...</div>}>
          <SearchComponent setShowSearch={setShowSearch} />
        </Suspense>
      </AnimatedDropdown>
    </>
  );
}
