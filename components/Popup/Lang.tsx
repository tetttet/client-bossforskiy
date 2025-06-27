"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { routing } from "@/i18n/routing";

interface CookieProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Lang = ({ isVisible, setIsVisible }: CookieProps) => {
  const handleClose = () => setIsVisible(false);

  const t = useTranslations();
  const currentLocale = useLocale();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(currentLocale);

  useEffect(() => {
    setSelectedLanguage(currentLocale);
  }, [currentLocale]);

  useEffect(() => {
    if (selectedLanguage === "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  }, [selectedLanguage]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
    const segments = window.location.pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/") || "/");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 18, stiffness: 260 }}
            className="bg-white text-gray-900 rounded-xl max-w-lg w-full px-10 py-8 shadow-2xl border border-gray-200 relative"
            style={{ fontFamily: "Didot, serif" }}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-500 hover:rotate-90 transition-transform duration-300" />
            </button>

            <h2 className="text-3xl product-name-black text-center tracking-wide mb-4 uppercase">
              Welcome to <span className="font-medium">Bossforskiy</span>
            </h2>
            <p className="text-center product-detail-desc-black text-gray-600 mb-6 leading-relaxed">
              Inspired by elegance. Guided by precision. Select your preferred
              language to experience the refined atmosphere of our collection.
            </p>

            <div className="relative">
              <button
                onClick={toggleMenu}
                className="w-full px-6 py-3 border border-gray-400 lang-name hover:bg-gray-50 transition-all flex items-center justify-between"
              >
                {t(`languages.${selectedLanguage}`)}
                <ChevronDown className="h-4 w-4 text-gray-600 ml-2" />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-md z-20 overflow-hidden"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    {routing.locales.map((lang) => (
                      <li key={lang}>
                        <button
                          onClick={() => handleLanguageSelect(lang)}
                          className={`w-full lang-name text-left px-5 py-3 text-sm transition-all flex items-center justify-between ${
                            selectedLanguage === lang
                              ? "bg-gray-100 text-black font-semibold"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {t(`languages.${lang}`)}
                          {selectedLanguage === lang && (
                            <ArrowRight className="h-4 w-4 ml-2" />
                          )}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-8 text-center privacy-text leading-snug space-y-2">
              <p>
                By continuing, you agree to our{" "}
                <span className="underline cursor-pointer hover:text-black transition">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="underline cursor-pointer hover:text-black transition">
                  Terms of Service
                </span>
                .
              </p>
              <p className=" text-[11px] opacity-70">
                A crafted experience in digital luxury.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lang;
