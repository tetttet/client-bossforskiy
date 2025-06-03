import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Overlay = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/70 z-30"
        onClick={onClose}
      />
    )}
  </AnimatePresence>
);
export default Overlay;
