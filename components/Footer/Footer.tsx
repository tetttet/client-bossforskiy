import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-8 px-4">
      {/* Logo */}
      <h1 className="font-footer uppercase mb-24 mt-12 text-center">
        Bossforskiy
      </h1>

      {/* Links Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Column 1 */}
        <div className="space-y-4">
          <h5 className="font-sans font-semibold text-md uppercase tracking-wider">
            EXPLORE Bossforskiy
          </h5>
          <ul className="space-y-2 text-sm text-gray">
            <li>
              <Link href="/bossforskiy/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/bossforskiy/fashion/collections" className="hover:underline">
                Collection Overview
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Pre-Collections
              </Link>
            </li>
            <li>
              <Link href="/bossforskiy/fashion/collections" className="hover:underline">
                Our Philosophy
              </Link>
            </li>
            <li>
              <Link href="/bossforskiy/bossforskiy-family" className="hover:underline">
                Bossforskiy family
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <h5 className="font-sans font-semibold text-md uppercase tracking-wider">
            ONLINE SERVICES
          </h5>
          <ul className="space-y-2 text-sm text-gray">
            <li>
              <a href="#" className="hover:underline">
                Payment Methods
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="space-y-4">
          <h5 className="font-sans font-semibold text-md uppercase tracking-wider">
            BOUTIQUE SERVICES
          </h5>
          <div className="flex">
            <Image
              src="/images/extra/qr_inst.png"
              alt="QR Code"
              className="shadow-md"
              width={150}
              height={150}
            />
          </div>
          <p className="text-sm text-gray">Scan to explore</p>
        </div>

        {/* Column 4 */}
        <div className="space-y-4">
          <h5 className="font-sans font-semibold text-md uppercase tracking-wider">
            CONTACTS
          </h5>
          <ul className="space-y-2 text-sm text-gray">
            <li>
              <a href="#" className="hover:underline">
                Contacts
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Maps & Directions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li className="max-w-[200px]">
              <a href="#" className="hover:underline">
                Address - 123 Fashion St, Style City, Country
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
