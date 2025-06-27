"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Импорт useRouter
import { useLocale, useTranslations } from "next-intl";

const LuxuryIntro = () => {
  const router = useRouter(); // Инициализация роутера
  const t = useTranslations();

  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [step, setStep] = useState<"region" | "language">("region");

  const regions = [
    { code: "FR", name: "France" },
    { code: "US", name: "United States" },
    { code: "UK", name: "United Kingdom" },
    { code: "IT", name: "Italy" },
    { code: "JP", name: "Japan" },
    { code: "CN", name: "China" },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
    { code: "ar", name: "العربية" },
    { code: "it", name: "Italiano" },
    { code: "ja", name: "日本語" },
    { code: "zh", name: "中文" },
  ];

  const currentLocale = useLocale();
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(currentLocale);

  console.log("selectedLanguage:", selectedLanguage);

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    setStep("language");
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    console.log(`Selected: ${selectedRegion}, ${language}`);
    const segments = window.location.pathname.split("/");
    segments[1] = language;
    router.push(`${segments.join("/") || "/"}/bossforskiy/home`);
  };

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center p-8">
      <div className="max-w-md w-full text-center">
        {/* Логотип */}
        <div className="text-white text-3xl font-serif mb-12 tracking-widest">
          <Image
            src="/logo-black.svg"
            alt="Luxury Brand Logo"
            width={250}
            height={100}
            className="mx-auto mb-4"
          />
        </div>

        <AnimatePresence mode="wait">
          {step === "region" && (
            <motion.div
              key="region"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="intro-text mb-8">{t("IntroPage.selectRegion")}</h2>
              <div className="grid grid-cols-2 gap-4 mb-12">
                {regions.map((region) => (
                  <button
                    key={region.code}
                    onClick={() => handleRegionSelect(region.code)}
                    className="intro-region-name py-3 px-4 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 text-sm tracking-wider"
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === "language" && (
            <motion.div
              key="language"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="intro-text text-black text-xl font-light mb-8 tracking-wider">
                {t("IntroPage.selectLanguage")}
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-12">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageSelect(language.code)}
                    className="intro-region-name py-3 px-4 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 text-sm tracking-wider"
                  >
                    {language.name}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep("region")}
                className="text-black text-xs underline hover:no-underline mt-4"
              >
                {t("IntroPage.backToRegion")}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-white text-xs mt-12 opacity-70">
          © {new Date().getFullYear()} LUXURY BRAND. ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  );
};

export default LuxuryIntro;
