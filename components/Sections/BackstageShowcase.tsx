// components/BackstageShowcase.tsx
import Image from "next/image";
import React from "react";

const BackstageShowcase = () => {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-white">
      <div className="flex h-screen items-stretch justify-center w-full max-w-11/12 mx-auto gap-5">
        <div className="relative w-1/3 items-center justify-center hidden md:flex">
          <Image
            width={500}
            height={500}
            src="/images/dior.webp"
            alt="Rosy Glow Stick"
            className="object-cover h-full w-full"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          <div className="absolute bottom-10 left-5 text-white">
            <h3 className="text-lg font-semibold">Rosy Glow Stick</h3>
            <p className="text-sm">
              The dewy blush stick with pH-activated color
            </p>
            <button className="mt-2 text-sm underline">Discover</button>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex items-center justify-center relative">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/dior.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none" />

          <div className="absolute text-white text-center px-4 z-10">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Ready for your glow up?
            </h2>
            <button className="mt-2 text-sm underline">Discover</button>
          </div>
        </div>

        <div className="relative w-1/3 hidden md:flex items-center justify-center">
          <Image
            width={500}
            height={500}
            src="/images/dior2.webp"
            alt="Lip Glow Butter"
            className="object-cover h-full w-full"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          <div className="absolute bottom-10 left-5 text-white z-10">
            <h3 className="text-lg font-semibold">Lip Glow Butter</h3>
            <p className="text-sm">
              The new lip gloss-in-balm infused with peptide and ceramide
            </p>
            <button className="mt-2 text-sm underline">Discover</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackstageShowcase;
