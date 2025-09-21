import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import { products } from "@/constant/products";

const ProductSlider = ({ setMenuOpen, title }: { setMenuOpen: (o: boolean) => void; title: string }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: { perView: 3.5, spacing: 16 },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 8 },
      },
    },
  });

  return (
    <main className="relative flex-1 p-2 md:p-6 w-full md:w-2/3">
      <span className="link-title font-semibold mb-4 md:mb-6 block ml-4 uppercase">
        {title}
      </span>
      <div ref={sliderRef} className="keen-slider">
        {products.map((watch, i) => (
          <div className="keen-slider__slide" key={i}>
            <Link
              onClick={() => setMenuOpen(false)}
              href={`/bossforskiy/products/${watch.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="p-2 md:p-4 flex flex-col items-center space-y-2 md:space-y-4 w-full md:w-72">
                <div className="relative w-full h-48 md:h-80 overflow-hidden">
                  <Image
                    src={watch.thumbnail}
                    alt={watch.name}
                    fill
                    priority={i < 3}
                    sizes="(max-width: 768px) 100vw, 288px"
                    className="object-cover"
                  />
                </div>
                <div className="text-center text-base md:text-md font-semibold">
                  {watch.name}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Кнопки навигации */}
      <div className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 flex gap-2 md:gap-3 z-10">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="bg-white/60 hover:bg-white/30 text-gray-700 p-1 md:p-2 rounded-full"
        >
          <ChevronLeft size={16} className="md:h-5 md:w-5" />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="bg-white/20 hover:bg-white/30 text-gray-700 p-1 md:p-2 rounded-full"
        >
          <ChevronRight size={16} className="md:h-5 md:w-5" />
        </button>
      </div>
    </main>
  );
};

export default ProductSlider;
