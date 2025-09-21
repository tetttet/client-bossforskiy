import React from "react";

const FooterLinks = ({ bottomLinks }: { bottomLinks: string[] }) => {
  return (
    <div>
      <div className="bg-gray-300 h-[1px]"></div>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center p-2 md:p-4 space-y-2 md:space-y-0">
          <div className="text-xs md:text-sm text-gray-500">
            &copy; 2025{" "}
            <span className="text-black font-medium">Bossforskiy Luxury</span>
            . All rights reserved.
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {bottomLinks.map((link, i) => (
              <div
                key={i}
                className="text-xs md:text-sm text-gray-500 hover:text-black transition-all duration-200 cursor-pointer"
              >
                {link}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
