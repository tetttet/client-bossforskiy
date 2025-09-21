"use client";

import Image from "next/image";
import React from "react";

// Данные для карточек ингредиентов
const ingredients = [
  {
    name: "Shea Butter",
    description: "Nourishes, softens, and restores vitality.",
    image: "/images/skincare/shea-butter.jpg",
  },
  {
    name: "Sweet Almond Oil",
    description: "Smooths, soothes, and protects even sensitive skin.",
    image: "/images/skincare/sweet-almond.jpg",
  },
  {
    name: "D-Panthenol",
    description: "Calms, heals, and locks in moisture.",
    image: "/images/skincare/d-panthenol.webp",
  },
  {
    name: "Vitamin E",
    description: "Shields against aging and preserves firmness.",
    image: "/images/skincare/vitamin-e.jpg",
  },
  {
    name: "IPM",
    description: "Gives a silky touch and enhances absorption.",
    image: "/images/skincare/ipm.webp",
  },
  {
    name: "Petrolatum",
    description: "Seals in hydration, protecting from dryness.",
    image: "/images/skincare/petrolatum.webp",
  },
];

const SkincarePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      {/* Заголовок и описание */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Skincare</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          At the heart of every Bossforskiy creation lies a selection of
          carefully chosen ingredients. Each one is blended with purpose — to
          nourish, protect, and enhance the natural beauty of your skin.
          Together, they transform simple care into an experience of comfort and
          elegance.
        </p>
      </div>

      {/* Сетка карточек ингредиентов */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {ingredients.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-md"
          >
            <Image
              width={400}
              height={300}
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="!text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkincarePage;
