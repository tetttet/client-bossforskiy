import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";
import Image from "next/image";

interface ProductVariantShade {
  name: string;
  hex: string;
}

interface ProductVariants {
  shades: ProductVariantShade[];
  finishes: string[];
}

interface ProductVideo {
  url: string;
}

interface Product {
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
  banner: string;
  gallery: string[];
  variants: ProductVariants;
  price: number;
  currency: string;
  availability: string;
  usage: string;
  video: ProductVideo;
  brand: string;
}

interface ProductDetailedProps {
  product: Product;
}

const ProductDetailed: React.FC<ProductDetailedProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.gallery[0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedShade, setSelectedShade] = useState(
    product.variants.shades[0]
  );
  const [selectedFinish, setSelectedFinish] = useState(
    product.variants.finishes[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const incrementQuantity = () => setQuantity((prev) => Math.min(prev + 1, 10));
  const decrementQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

  // Настройки анимации
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Плавные преобразования с пружинной физикой
  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Параллакс эффект (более мягкий)
  const y = useTransform(smoothScrollY, [0, 1], [0, -50]);

  // Масштабирование с эластичностью
  const scale = useTransform(smoothScrollY, [0, 1], [1, 1.03]);

  // Плавное изменение прозрачности
  const opacity = useTransform(
    smoothScrollY,
    [0, 0.3, 0.8, 1],
    [0.9, 1, 1, 0.9]
  );

  // Эффект "мягкого свечения" при появлении
  const brightness = useTransform(smoothScrollY, [0, 0.5], [0.8, 1]);
  const filter = useTransform(brightness, (b) => `brightness(${b})`);

  return (
    <div className="min-h-screen text-gray-900">
      {/* Hero Banner */}
      <div
        className="relative h-[70vh] w-full overflow-hidden bg-black/40"
        style={{ backgroundImage: `url(${product.banner})` }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl md:text-7xl product-name font-bold text-white mb-4">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl product-detail-desc text-white opacity-90 max-w-2xl mx-auto">
              {product.subtitle}
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Product Intro */}
      <div className="py-20 bg-white relative overflow-hidden">
        {/* Animated background fill */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.5, ease: [0.83, 0, 0.17, 1] }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 h-full z-0"
          style={{ originX: 0 }}
        />

        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          {/* Main quote with elegant reveal */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-black mb-12 tracking-wider"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="block"
            >
              {product.description}
            </motion.span>
          </motion.p>

          {/* Highlights with refined animation */}
          <div className="flex flex-wrap justify-center gap-4">
            {product.highlights.slice(0, 3).map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + index * 0.15,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                  backgroundColor: "#f0f0f0",
                  transition: { duration: 0.4 },
                }}
                className="bg-white px-8 py-4 border border-black border-opacity-20 hover:border-opacity-100 transition-all"
              >
                <p className="font-medium text-black uppercase text-xs tracking-widest">
                  {highlight}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Primary button with sophisticated animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <motion.button
              initial={{ backgroundColor: "#ffffff", color: "#000000" }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "#000000",
                color: "#ffffff",
                borderColor: "#000000",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                backgroundColor: { duration: 0.3 },
              }}
              className="bg-transparent border-2 border-black text-black px-12 py-3 uppercase tracking-widest text-xs font-medium"
            >
              Discover the Collection
            </motion.button>
          </motion.div>

          {/* Secondary link with elegant underline animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <motion.a
              href="#"
              className="relative underline text-gray-800 text-xs uppercase tracking-widest inline-block pb-1"
            >
              Explore Chanel Beauty
              <motion.span
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 w-full h-px bg-black origin-left"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Main Product Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Gallery Section */}
          <div className="lg:w-1/2">
            <div className="sticky top-8">
              <div className="mb-8 p-4">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    width={600}
                    height={600}
                    src={selectedImage}
                    alt={product.name}
                    className="w-full h-auto object-cover aspect-square"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {product.gallery.map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(img)}
                    className={`cursor-pointer overflow-hidden border border-black ${
                      selectedImage === img ? "border-2 border-gray-500" : ""
                    }`}
                  >
                    <Image
                      width={150}
                      height={150}
                      loading="lazy"
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl detail-product-name font-bold mb-2 tracking-wide">
                    {product.name}
                  </h2>
                  <p className="text-lg text-gray-600 small-font">{product.subtitle}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">
                    {product.currency}
                    {product.price.toFixed(2)}
                  </p>
                  {product.availability === "in_stock" ? (
                    <span className="text-xs text-black border border-black px-2 py-1">
                      IN STOCK
                    </span>
                  ) : (
                    <span className="text-xs text-gray-500 border border-gray-500 px-2 py-1">
                      OUT OF STOCK
                    </span>
                  )}
                </div>
              </div>

              {/* Shade Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4 tracking-wide">
                  SELECT YOUR SHADE
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.variants.shades.map((shade, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedShade(shade)}
                      className={`cursor-pointer p-1 ${
                        selectedShade.name === shade.name
                          ? "border-2 border-gray-400"
                          : "border border-gray-300"
                      }`}
                    >
                      <div
                        className="w-12 h-12"
                        style={{ backgroundColor: shade.hex }}
                        title={shade.name}
                      />
                    </motion.div>
                  ))}
                </div>
                <p className="mt-3 text-lg font-medium">
                  Selected:{" "}
                  <span style={{ color: selectedShade.hex }}>
                    {selectedShade.name}
                  </span>
                </p>
              </div>

              {/* Finish Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4 tracking-wide">
                  SELECT FINISH
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.variants.finishes.map((finish, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSelectedFinish(finish)}
                      className={`px-6 py-2 text-sm font-medium border border-black ${
                        selectedFinish === finish
                          ? "bg-black text-white"
                          : "bg-white text-black hover:bg-gray-100"
                      }`}
                    >
                      {finish}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="mb-8 p-6 border border-black/30">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-medium tracking-wide">
                    QUANTITY
                  </h3>
                  <div className="flex items-center">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={decrementQuantity}
                      className="px-4 py-2 bg-white text-black text-xl border border-black hover:bg-gray-100"
                    >
                      -
                    </motion.button>
                    <span className="px-6 py-2 bg-white border-t border-b border-black">
                      {quantity}
                    </span>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={incrementQuantity}
                      className="px-4 py-2 bg-white text-black text-xl border border-black hover:bg-gray-100"
                    >
                      +
                    </motion.button>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-black py-4 px-8 text-lg font-bold text-white hover:bg-gray-800 tracking-widest"
                >
                  ADD TO BAG — {product.currency}
                  {(product.price * quantity).toFixed(2)}
                </motion.button>
              </div>

              {/* Tabs */}
              <div className="mb-8">
                <div className="flex border-b border-black relative">
                  {["description", "highlights", "usage"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`relative px-4 py-2 font-medium tracking-wide text-gray-500 hover:text-black ${
                        activeTab === tab ? "text-black" : ""
                      }`}
                    >
                      {tab.toUpperCase()}
                      {activeTab === tab && (
                        <motion.div
                          layoutId="underline"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                <div className="py-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {activeTab === "description" && (
                        <p className="text-gray-700">{product.description}</p>
                      )}
                      {activeTab === "highlights" && (
                        <ul className="space-y-3">
                          {product.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-black mr-2 mt-0.5 flex-shrink-0">
                                •
                              </span>
                              <span className="text-gray-700">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {activeTab === "usage" && (
                        <p className="text-gray-700">{product.usage}</p>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        ref={containerRef}
        className="relative flex py-0 lg:py-40 px-0 lg:px-52"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-30%" }}
        transition={{ duration: 1.5, ease: "circOut" }}
      >
        <motion.video
          className="w-full h-auto object-cover will-change-transform"
          autoPlay
          muted
          loop
          playsInline
          style={{
            y,
            scale,
            opacity,
            filter,
          }}
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1.8,
              ease: [0.16, 0.77, 0.47, 0.97],
              delay: 0.2,
            },
          }}
        >
          <source src={product.video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        {/* Текст с плавной анимацией */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1.5,
              delay: 0.4,
            },
          }}
        >
          <motion.h2
            className="text-white text-5xl font-medium tracking-wider"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                mass: 0.5,
                stiffness: 50,
                damping: 12,
                delay: 0.6,
              },
            }}
          >
            Discover Our World
          </motion.h2>
        </motion.div>
      </motion.div>

      {/* Shades Gallery */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl medium-font tracking-wide mb-4">
              THE COLLECTION
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              "/images/header/hd2.avif",
              "/images/header/hd3.avif",
              "/images/header/hd1.avif",
            ].map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden group"
              >
                <Image
                  width={600}
                  height={800}
                  src={img}
                  alt={`Collection ${index + 1}`}
                  className="w-full h-full object-cover aspect-[3/4]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="text-white"
                  >
                    <p className="text-sm tracking-widest">NEW COLLECTION</p>
                    <p className="text-xl font-serif mt-1">2024</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <motion.button
              whileHover={{ backgroundColor: "#000", color: "#fff" }}
              className="px-12 py-3 border border-black text-sm tracking-widest bg-transparent"
            >
              DISCOVER MORE
            </motion.button>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative py-32 overflow-hidden bg-gradient-to-b">
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h2 className="text-5xl big-font mb-6">
              EXPERIENCE DIOR COLOR
            </h2>
            <motion.p
              className="text-lg mb-12 max-w-2xl mx-auto tracking-wider small-font"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 1,
                ease: "easeOut",
              }}
            >
              The essence of couture color in your beauty ritual
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
              }}
              className="inline-block"
            >
              <motion.button
                whileHover={{
                  backgroundColor: "#000",
                  color: "#fff",
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                }}
                className="bg-white text-black font-medium py-4 px-12 text-sm tracking-widest border border-black relative overflow-hidden group"
              >
                <span className="relative z-10">SHOP THE COLLECTION</span>
                <motion.span
                  className="absolute inset-0 bg-black origin-bottom scale-y-0 group-hover:scale-y-100 z-0"
                  transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Luxury Footer */}
      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl uppercase text-white font-bold mb-2">
                Bossforskiy
              </div>
              <p className="text-neutral-400">The epitome of Parisian elegance</p>
            </div>
          </div>
          <div className="border-t-[0.01px] border-[#fff0e9] mt-8 pt-8 text-center text-gray-400 text-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailed;
