"use client";

import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        {/* Название бренда */}
        <h1 className="hero-title-text text-gold text-xl tracking-widest font-serif">
          BOSSFORSKIY
        </h1>
      </div>
    </div>
  );
};

export default Loader;
