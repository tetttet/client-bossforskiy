import React from "react";
import Link from "next/link";
import { SubHeaderProps } from "@/types/subheader";

type DesktopMenuProps = SubHeaderProps & {
  submenuTop: { title: string; link: string }[];
  submenu: { title: string; link: string }[];
  links: { title: string; link: string }[];
};

const DesktopMenu = ({
  setMenuOpen,
  submenuTop,
  submenu,
  links,
}: DesktopMenuProps) => {
  return (
    <aside className="hidden md:flex md:w-1/2 p-2 md:p-6 flex-col justify-between">
      <div className="space-y-2 mt-4 uppercase">
        {submenuTop.map((item, i) => (
          <div
            key={i}
            className="link hover:text-[#616161] transition-all duration-200 cursor-pointer"
          >
            <Link onClick={() => setMenuOpen(false)} href={item.link}>
              {item.title}
            </Link>
          </div>
        ))}
        <div className="mb-10"></div>
        {submenu.map((item, i) => (
          <div
            key={i}
            className="link hover:text-[#616161] transition-all duration-200 cursor-pointer"
          >
            <Link onClick={() => setMenuOpen(false)} href={item.link}>
              {item.title}
            </Link>
          </div>
        ))}
        <div className="space-y-0 mt-10 pt-6 border-t border-gray-300">
          {links.map((item, i) => (
            <div
              key={i}
              className="hover:text-[#616161] transition-all duration-200 cursor-pointer"
            >
              <Link onClick={() => setMenuOpen(false)} href={item.link} rel="noreferrer" target="_blank">
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default DesktopMenu;
