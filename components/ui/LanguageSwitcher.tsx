"use client";
import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { routing } from "@/i18n/routing";
import { ChevronDown, ArrowRight } from "lucide-react";

const LanguageSwitcher = () => {
  const t = useTranslations();
  const currentLocale = useLocale();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(currentLocale);

  useEffect(() => {
    setSelectedLanguage(currentLocale);
  }, [currentLocale]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
    const segments = window.location.pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/") || "/");
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-800 bg-white hover:bg-gray-100 transition-all duration-300 font-light tracking-wide"
        style={{ fontFamily: "Didot, serif" }}
      >
        {t(`languages.${selectedLanguage}`)}
        <ChevronDown className="ml-2 h-4 w-4 text-gray-600" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            {routing.locales.map((lang) => (
              <li key={lang}>
                <button
                  onClick={() => handleLanguageSelect(lang)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-all flex items-center justify-between ${
                    selectedLanguage === lang ? "bg-gray-100 text-black font-medium" : "text-gray-700"
                  }`}
                  style={{ fontFamily: "Didot, serif" }}
                >
                  {t(`languages.${lang}`)}
                  {selectedLanguage === lang && (
                    <ArrowRight className="ml-2 h-4 w-4 text-black" />
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
