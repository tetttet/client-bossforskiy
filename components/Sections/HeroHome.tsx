"use client";
import Link from "next/link";
import React from "react";

const HeroHome = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/v3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 bg-opacity-20 z-10" />

      {/* Text content */}
      <div className="max-w-10/12 mt-28 mx-auto relative z-20 flex items-center justify-start h-full px-6 md:px-16">
        <div className="max-w-xl text-white">
          <p className="uppercase hero-new-text text-sm font-light mb-1">New</p>
          <h1 className="text-4xl hero-title-text md:text-6xl font-bold leading-tight">
            <span className="block">SoftSculpt®</span>
            <span className="block">Blurring Bronzer</span>
          </h1>
          <button className="mt-1 px-6 py-3 hero-button text-black font-medium uppercase tracking-wider hover:bg-neutral-200 transition">
            <Link href="/bossforskiy/fashion/collections">
              Shop Our Collection
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
