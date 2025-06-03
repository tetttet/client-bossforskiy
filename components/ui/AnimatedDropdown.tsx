import { AnimatePresence, motion } from "framer-motion";

interface AnimatedDropdownProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedDropdown = ({
  isOpen,
  children,
  className = "",
  style = {},
}: AnimatedDropdownProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`overflow-hidden ${className}`}
        style={{
          position: "sticky",
          zIndex: 40,
          backgroundColor: "white",
          ...style,
        }}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export default AnimatedDropdown;
