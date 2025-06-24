"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Cookie = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookieConsent");

    if (!hasAcceptedCookies) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-white/90 backdrop-blur-lg rounded-lg max-w-md w-full p-8 shadow-xl border border-gray-100 relative"
          >
            <button
              onClick={handleClose}
              className="group absolute top-4 right-4 p-1 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-500 transform transition-transform duration-300 group-hover:rotate-90" />
            </button>

            <h2 className="text-2xl font-light tracking-wider text-center mb-6 text-gray-800">
              Welcome To Bossforskiy.com
            </h2>

            <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">
              This website uses cookies to enhance your browsing experience. By
              clicking &quot;Yes, Continue&quot;, you agree to our use of
              cookies and similar technologies.
            </p>

            <div className="flex flex-col space-y-3">
              <button
                className="px-6 py-3 bg-transparent border border-gray-400 text-gray-800 text-sm font-medium hover:bg-gray-50 transition-colors"
                onClick={handleClose}
              >
                No, I want to know more.
              </button>

              <button
                className="px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                onClick={handleAccept}
              >
                Yes, Continue
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-6 cursor-pointer hover:underline">
              privacy policy and terms of service
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cookie;
