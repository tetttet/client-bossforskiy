"use client";
import { useSearchParams } from "next/navigation";
import { products } from "@/constant/products";
import Link from "next/link";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";

const SearchResultsPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  type Product = {
    id: string | number;
    name: string;
    description?: string;
    thumbnail: string;
    // add other fields if needed
  };

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (typeof query === "string") {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description?.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [query]);

  if (!query) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <p className="text-pearl font-light text-lg">
          Please enter a search query.
        </p>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-ivory">
          <p className="text-pearl font-light text-lg">Loading...</p>
        </div>
      }
    >
      <div className="min-h-screen bg-ivory py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Luxurious Header */}
          <div className="mb-12 text-center border-b border-pearl pb-6 text-black">
            <p className="hidden header-font lg:flex justify-center items-center uppercase group-hover:text-black">
              SEARCH RESULTS FOR:
            </p>

            <p className="search-font">&quot;{query}&quot;</p>
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="font-serif text-noir text-lg text-black">
                No items found matching your search.
              </p>
              <p className="text-pearl mt-2 text-black">
                Try different keywords or explore our collections.
              </p>
            </div>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/bossforskiy/products/${product.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="group relative overflow-hidden bg-white transition-all duration-300 hover:shadow-sm"
              >
                {/* Product Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.thumbnail}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Product Info */}
                <div className="p-4 text-center">
                  <h2 className="hidden search-font lg:flex justify-center items-center uppercase group-hover:text-black">
                    {product.name.toUpperCase()}
                  </h2>
                  <p className="text-pearl text-sm font-light text-gray-600 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="mt-3">
                    <span className="text-noir text-xs tracking-widest border-b border-transparent group-hover:border-noir transition-all duration-300">
                      VIEW DETAILS
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default SearchResultsPage;
