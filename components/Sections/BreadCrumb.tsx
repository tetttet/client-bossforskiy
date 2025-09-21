import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const BreadCrumb = () => {
  const t = useTranslations("About");
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        fill
        priority
        src="/images/bg.webp"
        alt="La Pausa Villa"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl uppercase md:text-6xl font-bold tracking-wide text-black">
          Bossforskiy
        </h1>
        <br />
        <p className="text-sm !mb-1 md:text-base font-medium text-black uppercase tracking-widest">
          {t("breadCrumb1")}
        </p>
        <p className="text-sm md:text-base font-medium text-black uppercase tracking-widest">
          {t("breadCrumb2")}
        </p>
      </div>
    </section>
  );
};

export default BreadCrumb;
