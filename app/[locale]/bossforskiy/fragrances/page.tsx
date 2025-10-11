import Image from "next/image";
import React from "react";

const fragrances = [
  {
    id: 1,
    name: "Fragrance 1",
    image: "/images/header/hd1.avif",
    description: `
    Fragrance 1 combines the elegance of floral notes with subtle hints of vanilla and musk. 
    Each spray is designed to evoke a sense of sophistication and timeless beauty, 
    leaving a lingering impression that captivates the senses.
    `,
  },
  {
    id: 2,
    name: "Fragrance 2",
    image: "/images/header/hd2.avif",
    description: `
    Fragrance 2 celebrates purity and clarity. 
    Fresh citrus top notes blend seamlessly with soft lavender undertones, 
    creating a scent that is both uplifting and effortlessly refined.`,
  },
  {
    id: 3,
    name: "Fragrance 3",
    image: "/images/header/hd3.avif",
    description: `
    Fragrance 3 is crafted for those who value excellence. 
    Rich amber and sandalwood base notes harmonize with delicate jasmine accents, 
    ensuring a long-lasting and memorable fragrance experience.`,
  },
];

const page = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-8 py-12 bg-white">
      <h1 className="text-4xl font-serif mb-12">Fragrances</h1>

      {fragrances.map((fragrance, index) => (
        <div
          key={fragrance.id}
          className={`flex flex-col md:flex-row items-center mb-8 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              width={600}
              height={300} // уменьшили высоту
              src={fragrance.image}
              alt={fragrance.name}
              className="w-full object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 md:pr-12 text-center md:text-left">
            <h2 className="text-2xl font-semibold -mb-4">{fragrance.name}</h2>
            <p className="text-lg text-gray-700 whitespace-pre-line">
              {fragrance.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
