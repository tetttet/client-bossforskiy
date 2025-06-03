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

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 my-8"></div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6">
        <a href="#" className="text-white hover:text-gray-300">
          <span className="sr-only">Instagram</span>
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <span className="sr-only">Facebook</span>
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <span className="sr-only">Twitter</span>
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <span className="sr-only">YouTube</span>
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <span className="sr-only">LinkedIn</span>
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
