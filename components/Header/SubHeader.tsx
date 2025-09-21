"use client";

import React from "react";
import { useTranslations } from "next-intl";

import MobileMenu from "@/components/Header/SubHeader/MobileMenu";
import DesktopMenu from "@/components/Header/SubHeader/DesktopMenu";
import ProductSlider from "@/components/Header/SubHeader/ProductSlider";
import FooterLinks from "@/components/Header/SubHeader/FooterLinks";
import { SubHeaderProps } from "@/types/subheader";
import { address } from "@/constant/data";

const SubHeader = ({ setMenuOpen }: SubHeaderProps) => {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = React.useState(false);

  const submenuTop = [
    { title: t("submenuTop.skincare"), link: "/bossforskiy/skincare" },
    {
      title: t("submenuTop.creamSticks"),
      link: "/bossforskiy/cream-sticks",
    },
    { title: t("submenuTop.fragrances"), link: "/bossforskiy/fragrances" },
  ];

  const submenu = [
    { title: t("submenu.aboutUs"), link: "/bossforskiy/about" },
    {
      title: t("submenu.ourPhilosophy"),
      link: "/bossforskiy/fashion/collections",
    },
    {
      title: t("submenu.bossforskiyFamily"),
      link: "/bossforskiy/bossforskiy-family",
    },
  ];

  const links = [
    { title: t("links.onlineShopping"), link: "/bossforskiy/new-arrivals" },
    { title: t("links.cart"), link: "/bossforskiy/cart" },
  ];

  const bottomLinks = [address];

  return (
    <div className="p-4 md:p-6 shadow-md text-black bg-gradient-to-b from-[#ffffff] via-[#efede9] to-[#fde3d8]">
      <div className="flex flex-col md:flex-row max-w-full md:max-w-11/12 mx-auto h-full">
        <MobileMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setMenuOpen={setMenuOpen}
          submenuTop={submenuTop}
          submenu={submenu}
          links={links}
          bottomLinks={bottomLinks}
        />
        <DesktopMenu
          setMenuOpen={setMenuOpen}
          submenuTop={submenuTop}
          submenu={submenu}
          links={links}
        />
        <ProductSlider
          setMenuOpen={setMenuOpen}
          title={t("productSlider.title")}
        />
      </div>
      <FooterLinks bottomLinks={bottomLinks} />
    </div>
  );
};

export default SubHeader;
