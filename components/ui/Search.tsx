"use client";

import { products } from "@/constant/products";
import { ChevronRight, Search } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SearchComponentProps {
  setShowSearch: (show: boolean) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ setShowSearch }) => {
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleClear = () => {
    setSearchQuery("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSearch(false);
      // Переход на страницу результатов с query параметром
      router.push(`/bossforskiy/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white via-[#efede9] to-[#fde3d8]">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-montserrat-bold tracking-wider text-[#333] mb-4">
            Discover Our Collection
          </h1>
          <p className="text-sm md:text-base text-[#666] font-montserrat-medium tracking-widest">
            SEARCH FOR EXQUISITE ITEMS
          </p>
        </motion.div>

        {/* Оборачиваем input и кнопку в форму */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative"
        >
          <div
            className={`flex items-center border-b transition-all duration-500 ${
              isFocused ? "border-[#333]" : "border-[#ccc]"
            }`}
          >
            <Search
              className={`text-xl transition-all duration-300 ${
                isFocused ? "text-[#333]" : "text-[#999]"
              }`}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Search for luxury items..."
              className="w-full py-4 px-4 bg-transparent outline-none text-[#333] placeholder-[#999] font-light tracking-wide text-lg"
            />
            {searchQuery && (
              <motion.button
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClear}
                className="p-1 transition-opacity duration-200 hover:opacity-70"
              >
                <ChevronRight className="text-[#999] text-lg" />
              </motion.button>
            )}
            {/* Добавим кнопку сабмита для Enter и клика */}
            <button
              type="submit"
              className="sr-only"
              aria-label="Submit Search"
            />
          </div>
          <div
            className={`h-[1px] bg-[#333] transition-all duration-500 ${
              isFocused ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          ></div>
        </motion.form>

        {/* Suggested Keywords */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 text-center font-montserrat-medium"
        >
          <p className="text-xs text-[#999] tracking-widest">
            Try: <span className="hover:underline ml-2">Perfume</span> •{" "}
            <span className="hover:underline">Handbag</span> •{" "}
            <span className="hover:underline">Jewelry</span>
          </p>
        </motion.div>

        {/* Search Results */}
        <AnimatePresence>
          {searchQuery && filteredProducts.length > 0 && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="mt-10 flex flex-col gap-4"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  onClick={() => {
                    setShowSearch(false);
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={`/bossforskiy/products/${product.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="flex items-center gap-6 backdrop-blur-sm p-5 hover:shadow-sm transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Image
                      width={150}
                      height={150}
                      src={product.thumbnail}
                      alt={product.name}
                      className="w-52 h-52 object-cover rounded-lg border border-[#ddd]"
                    />
                    <div className="flex-1">
                      <h3 className="text-[17px] font-medium text-[#222] tracking-wide">
                        {product.name}
                      </h3>
                      <p className="text-sm text-[#777] mt-1 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}

          {searchQuery && filteredProducts.length === 0 && (
            <motion.div
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-10 text-center text-sm text-[#999]"
            >
              No items found matching{" "}
              <span className="font-semibold">{searchQuery}</span>.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchComponent;
