"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  // in scrollYProgress = 0, opacity = 1, and so on
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.section
      style={{
        opacity,
        backgroundImage: `url("/images/hero/hero-collection.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      ref={targetRef}
      className="relative mb-[8rem] h-[50em] py-16 text-white
               before:pointer-events-none
               before:fixed before:inset-0 before:z-0
               before:bg-black/90
               before:opacity-70
               after:absolute after:inset-0 after:z-[-1] after:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] after:opacity-40"
    >
      <motion.div
        style={{ position, scale, x: "-50%" }}
        className="fixed left-1/2 z-10 flex flex-col items-center mt-24"
      >
        <p className="mb-2 text-xl">
          <span className="animate-text-white">Projects</span>
          <span className="animate-text-white-lower"> Beta</span>
        </p>
        <p className="mb-8 text-center text-xs font-light text-text">
          by <Link href="/bossforskiy">BOSSFORSKIY</Link>,
          <br />
          rebuilt by{" "}
          <a href="#" target="_blank" rel="noopener nofollow noreferrer">
            Name Surname
          </a>
        </p>

        <span className="animate-text-white mb-12 text-center font-heading text-3xl leading-[1]">
          Development
          <br />
          reimagined.
        </span>
      </motion.div>
    </motion.section>
  );
};
