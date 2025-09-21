"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CreamSticksPage = () => {
  return (
    <div className=" bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-16 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Cream Sticks
          </h1>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            Our first creation sets the tone for everything we believe in: care
            that feels effortless, elegant, and timeless.
          </p>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            The Moisturizing Stick is designed for women who value both comfort
            and refinement in their daily rituals. With its compact form, it
            slips easily into any bag, becoming a companion for every moment —
            from a busy day to a quiet evening.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <Image
            src="/images/header/hd4.avif"
            alt="Bossforskiy Moisturizing Stick"
            width={450}
            height={500}
            className=""
          />
        </motion.div>
      </section>

      {/* Details Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-md md:!text-md leading-relaxed">
            Each touch delivers softness, hydration, and a sense of grace that
            lingers. More than just skincare, it is a gesture of beauty you can
            carry everywhere.
          </p>
          <p className="text-md md:!text-md leading-relaxed">
            Crafted with nature&rsquo;s most caring ingredients, the Bossforskiy
            Moisturizing Stick restores softness and comfort to your skin. Shea
            Butter and Almond Oil nourish and smooth, while gentle actives calm
            and protect against dryness.
          </p>
          <p className="text-lg md:!text-md leading-relaxed">
            Each touch leaves the skin hydrated, supple, and radiant - turning
            daily care into a moment of pure elegance.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CreamSticksPage;
