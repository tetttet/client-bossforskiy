"use client";

import ProductDetailed from "@/components/ui/ProductDetailed";
import { products } from "@/constant/products";
import { useParams } from "next/navigation";
import React from "react";

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

// Функция для получения курса по слагу
export const getCourseBySlug = (slug: string) => {
  return products.find(
    (product) => product.name.toLowerCase().replace(/\s+/g, "-") === slug
  );
};

// Компонент должен начинаться с заглавной буквы!
const Page = () => {
  const { slug } = useParams();

  const product = typeof slug === "string" ? getCourseBySlug(slug) : undefined;

  return <ProductDetailed product={product as Product} />;
};

export default Page;
