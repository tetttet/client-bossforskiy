import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const services = [
  {
    title: "How can we help you?",
    description:
      "Wherever you are, Louis Vuitton Client Advisors will be delighted to assist you.",
    image: "/images/Service_image1.jpg",
    alt: "service img 1",
    buttons: ["Contact Us"],
  },
  {
    title: "Art of Gifting",
    description:
      "Choose the perfect gift from our specially curated selection of products.",
    image: "/images/Service_image2.jpg",
    alt: "service img 2",
    buttons: ["Gifts for Her", "Gifts for Him"],
  },
  {
    title: "Personalization",
    description:
      "Louis Vuitton's personalization offer spans a wide range of services.",
    image: "/images/Service_image3.jpg",
    alt: "service img 3",
    buttons: ["Explore our Collections"],
  },
];

const Popular = () => {
  return (
    <section className="py-20 bg-gradient-to-t from-[#ffffff] via-[#ede5dc] to-[#f7ece0]">
      <div className="container mx-auto px-4">
        {/* Luxury Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 tracking-wider mb-4">
            Our Exclusive Products
          </h2>
          <div className="w-24 h-0.5 bg-amber-800 mx-auto"></div>
        </div>

        {/* Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white shadow-md transition-all duration-500 hover:shadow-xl"
            >
              {/* Image container with hover effect */}
              <motion.div
                className="overflow-hidden h-80 relative"
                whileHover="hover"
                initial="initial"
              >
                {/* Main image */}
                <Image
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={service.image}
                  alt={service.alt}
                />

                {/* Animated overlay button - appears on hover */}
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
                    View More
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 font-light">
                  {service.description}
                </p>

                {/* Luxury Buttons */}
                <div className="flex space-x-3">
                  {service.buttons.map((btnText, i) => (
                    <button
                      key={i}
                      className={`px-5 py-2 text-xs tracking-wider font-medium uppercase transition-colors
                        ${
                          i === 0
                            ? "bg-black text-white hover:bg-amber-800"
                            : "border border-black text-black hover:bg-black hover:text-white"
                        }`}
                    >
                      {btnText}
                    </button>
                  ))}
                </div>
              </div>

              {/* Luxury Decorative Element */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Popular;
