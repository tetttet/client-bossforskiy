import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center text-center mt-24 mb-96 px-4">
      <h1 className="text-[25px] lg:text-[40px] font-bold mb-2 text-black font-montserrat-bold tracking-wider">
        CREATE A WISHLIST
      </h1>
      <p className="text-gray-600 text-[14px] font-montserrat-medium max-w-md">
        Add products and looks to your wishlist and share them
      </p>
      <div className="mt-6">
        <Link href="/bossforskiy/fashion/collections">
          <button className="w-full sm:w-auto px-8 py-4 border bg-black border-black hover:border-white text-white uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-500 group relative overflow-hidden">
            <span className="relative z-10 block">
              Discover the Collections
            </span>
            <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(.19,1,.22,1)]"></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
