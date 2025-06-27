"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import Lang from "../Popup/Lang";
import { useLocale, useTranslations } from "next-intl";

const Ft = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations();
  const currentLocale = useLocale();

  console.log("Current Locale:", currentLocale);
  return (
    <footer className="bg-black text-white text-sm border-t border-gray-500/60 px-6 py-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-400">
          <span>Change location and language</span>
          <button
            onClick={() => setIsVisible(!isVisible)}
            aria-label="Change Language"
            type="button"
            className="text-white hover:underline flex items-center"
          >
            {t(`languages.${currentLocale}`)}{" "}
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          <Lang isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>

        <div className="flex items-center gap-4 text-gray-400">
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <FaInstagram size={18} />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-white">
            <FaFacebookF size={18} />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-white">
            <FaYoutube size={18} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white">
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Ft;
