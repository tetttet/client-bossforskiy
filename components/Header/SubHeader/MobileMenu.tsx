import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SubHeaderProps } from "@/types/subheader";

type MobileMenuProps = SubHeaderProps & {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  submenuTop: { title: string; link: string }[];
  submenu: { title: string; link: string }[];
  links: { title: string; link: string }[];
  bottomLinks: string[];
};

const iconVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

const MobileMenu = ({
  isOpen,
  setIsOpen,
  setMenuOpen,
  submenu,
  submenuTop,
  links,
  bottomLinks,
}: MobileMenuProps) => {
  return (
    <div className="md:hidden">
      {/* Кнопка меню */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-bold"></span>
        <div
          className="flex items-center gap-2 cursor-pointer select-none group"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 sm:w-7 sm:h-7 group-hover:text-black" />
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
                <Menu className="w-6 h-6 sm:w-7 sm:h-7 group-hover:text-black" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Сайдбар */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
          style={{
            position: "sticky",
            zIndex: 40,
            backgroundColor: "white",
          }}
        >
          <aside className="bg-gradient-to-b from-[#fcfcfb] via-[#f3f2ef] to-[#f1ece7] p-2 md:p-6 flex-col justify-between">
            <div className="space-y-2 mt-4 md:mt-8">
              {submenuTop.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold mt-1 text-lg md:text-2xl hover:text-[#616161] transition-all duration-200 cursor-pointer"
                >
                  <Link href={item.link}>{item.title}</Link>
                </div>
              ))}
              <div className="border-b border-gray-300 !mt-4 !mb-4"></div>
              {submenu.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold mt-1 text-lg md:text-2xl hover:text-[#616161] transition-all duration-200 cursor-pointer"
                >
                  <Link href={item.link}>{item.title}</Link>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-gray-300 md:mt-8">
              {links.map((item, i) => (
                <Link
                  onClick={() => setMenuOpen(false)}
                  href={item.link}
                  key={i}
                >
                  <div className="mb-2 mt-2 font-semibold text-sm md:text-2xl hover:text-[#616161] transition-all duration-200 cursor-pointer">
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 md:mt-10 space-y-2 text-sm md:text-base text-gray-700">
              {bottomLinks.map((link, i) => (
                <div
                  key={i}
                  className="hover:text-black transition-all duration-200 cursor-pointer"
                >
                  {link}
                </div>
              ))}
            </div>
          </aside>
        </motion.div>
      )}
    </div>
  );
};

export default MobileMenu;
