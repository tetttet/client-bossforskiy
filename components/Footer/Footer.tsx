import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-8 px-4">
      {/* Logo */}
      <h1 className="font-footer uppercase text-[38px] mb-44 mt-24 text-center">
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
              <a href="#" className="hover:underline">
                Haute Couture
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Fashion
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                High Jewelry
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Fine Jewelry
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Watches
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Eyewear
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Fragrance
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Makeup
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Skincare
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sitemap
              </a>
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
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Care & Services
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="space-y-4">
          <h5 className="font-sans font-semibold text-md uppercase tracking-wider">
            BOUTIQUE SERVICES
          </h5>
          <ul className="space-y-2 text-sm text-gray">
            <li>
              <a href="#" className="hover:underline">
                Store Locator
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Book an Appointment
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="space-y-4">
          <h5 className="font-sans font-semibold text-md uppercase tracking-wider">
            THE HOUSE OF Bossforskiy
          </h5>
          <ul className="space-y-2 text-sm text-gray">
            <li>
              <a href="#" className="hover:underline">
                Carrers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Legal
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Information About CCPA Do Not Sell
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Report to Society
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Fighting Counterfeits
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                California Transparency in Supply Chains
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                CHANEL Racial Justice Efforts
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                CHANEL COVID-19 Relief Efforts
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                CHANEL Supports Black Ambition
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Transparency in Coverage
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
