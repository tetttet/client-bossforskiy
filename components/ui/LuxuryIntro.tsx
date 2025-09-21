"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const LuxuryIntro = () => {
  const router = useRouter();
  const t = useTranslations("Intro");

  const regions = [
    { code: "TR", name: "Turkiye" },
    { code: "OTHER", name: "Other" },
  ];

  const languages = [
    { code: "tr", name: "Türkçe" },
    { code: "en", name: "English" },
  ];

  // Removed unused selectedRegion state
  const [step, setStep] = useState<"region" | "language">("region");
  const [loaded, setLoaded] = useState(false);

  // При загрузке проверяем localStorage
  useEffect(() => {
    const storedRegion = localStorage.getItem("region");
    const storedLanguage = localStorage.getItem("language");

    if (storedRegion && storedLanguage) {
      // Если есть данные, сразу редирект
      const segments = window.location.pathname.split("/");
      segments[1] = storedLanguage;
      router.replace(`${segments.join("/") || "/"}/bossforskiy/home`);
    } else {
      setLoaded(true);
    }
  }, [router]);

  const handleRegionSelect = (region: string) => {
    localStorage.setItem("region", region);
    setStep("language");
  };

  const handleLanguageSelect = (language: string) => {
    localStorage.setItem("language", language);

    const segments = window.location.pathname.split("/");
    segments[1] = language;
    router.push(`${segments.join("/") || "/"}/bossforskiy/home`);
  };
  // Ждем загрузки localStorage
  if (!loaded) return null;

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
