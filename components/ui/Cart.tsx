import React, { useEffect } from "react";
import {
  motion,
  AnimatePresence,
  domAnimation,
  LazyMotion,
} from "framer-motion";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const sidebar = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    x: "100%",
    transition: { type: "tween", duration: 0.3 },
  },
};

const Cart = ({ onClose }: { onClose: () => void }) => {
  useEffect(() => {
    // Блокируем скролл
    document.body.style.overflow = "hidden";

    // Возвращаем скролл при размонтировании
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-[999] flex"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Затемнение */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            variants={backdrop}
            onClick={onClose}
          />

          {/* Сайдбар */}
          <motion.div
            className="ml-auto h-full w-[100%] sm:w-[420px] bg-gradient-to-b from-[#ffffff] via-[#ede5dc] to-[#efdcc8] p-8 shadow-2xl relative flex flex-col"
            variants={sidebar}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-black transition"
            >
              ✕
            </button>

            <h2 className="text-2xl font-medium tracking-wide mb-6 border-b pb-2 border-gray-200 uppercase">
              Shopping Bag
            </h2>

            <div className="flex-1 text-gray-600 text-sm text-center flex items-center justify-center">
              <p className="italic font-medium">Your bag is empty.</p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 text-sm text-gray-500">
              <p className="text-center">
                Bossforskiy • 2025 All rights reserved.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </LazyMotion>
  );
};

export default Cart;
