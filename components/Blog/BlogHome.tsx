import Image from "next/image";
import React from "react";

const BlogHome = () => {
  const data = [
    {
      id: 1,
      titleOne: "YOU CAN CHANGE THE WORLD",
      titletwo: "STRONG STYLE",
      paraOne: "How Women are Redirecting Hollywood",
      paraTwo: "New Ways to Wear Denim Belt Bags make a Comeback",
      name: "By Jasmin Smith",
      subTitle: "How to Shop Mindfully",
      qrCode: "/images/qrcode.png",
      cover: "/Images/blog5.jpg",
    },
  ];

  return (
    <section className="relative w-full h-screen text-white overflow-hidden">
      {/* Fullscreen background image */}
      <Image
        src={data[0].cover}
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-20 flex h-full w-full px-16 py-12">
        {/* Left column */}
        <div className="w-1/2 flex flex-col justify-center space-y-8">
          <div className="bg-white text-black w-[70px] h-[70px] flex items-center justify-center mb-5">
            <h1 className="text-4xl font-bold">M</h1>
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{data[0].titleOne}</h1>
            <p className="mb-3 text-lg">{data[0].paraOne}</p>
            <span className="text-crimson-500 text-sm">{data[0].name}</span>
          </div>
        </div>

        {/* Right column */}
        <div className="w-1/2 flex flex-col justify-center items-end text-right space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">{data[0].titletwo}</h1>
            <p className="mb-3 text-lg">{data[0].paraTwo}</p>
            <span className="text-crimson-500 text-sm">{data[0].subTitle}</span>
          </div>

          {/* QR Code */}
          <img src={data[0].qrCode} alt="QR code" className="w-24 mt-8" />
        </div>
      </div>
    </section>
  );
};

export default BlogHome;
