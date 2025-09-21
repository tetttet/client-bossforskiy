import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Popular = () => {
  const t = useTranslations("Popular.Popular");
  const services = [
    {
      title: t("products.green.title"),
      description: t("products.green.description"),
      price: "$320",
      image: "/images/Service_image2.jpg",
      alt: "Gift product",
    },
    {
      title: t("products.gold.title"),
      description: t("products.gold.description"),
      price: "$320",
      image: "/images/Service_image2.jpg",
      alt: "Gift product",
    },
    {
      title: t("products.pink.title"),
      description: t("products.pink.description"),
      price: "$320",
      image: "/images/Service_image2.jpg",
      alt: "Gift product",
    },
  ];
  return (
    <section className="py-20 bg-gradient-to-t from-[#ffffff] via-[#ede5dc] to-[#f7ece0]">
      <div className="container mx-auto px-4">
        {/* Luxury Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl uppercase md:text-5xl text-gray-900 mb-4">
            {t("header")}
          </h2>
          <div className="w-24 h-0.5 bg-amber-800 mx-auto"></div>
        </div>

        {/* Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white shadow-md transition-all duration-500 hover:shadow-xl flex flex-col h-full"
            >
              {/* Image */}
              <motion.div
                className="overflow-hidden h-80 relative"
                whileHover="hover"
                initial="initial"
              >
                <Image
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={`/images/Service_image${index + 1}.jpg`}
                  alt={service.title}
                />
                <motion.div
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    hover: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-end justify-center pb-8 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-amber-600 text-white font-medium tracking-wider uppercase shadow-lg pointer-events-auto"
                  >
                    {t("viewMore")}
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-2xl text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 font-light flex-1">
                  {service.description}
                </p>

                <div className="flex space-x-3 mt-auto">
                  <button className="flex-1 px-5 py-2 text-sm tracking-wider font-medium uppercase bg-black text-white hover:bg-amber-800 transition-colors">
                    {t("addToCart")}
                  </button>
                  <button className="flex-1 px-5 py-2 text-sm tracking-wider font-medium uppercase border border-black text-black hover:bg-black hover:text-white transition-colors">
                    {t("wishlist")}
                  </button>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Popular;
