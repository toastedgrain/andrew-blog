"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BlossomPetals } from "./BlossomPetals";

export default function Home() {
  const ref = useRef(null);

  // Main section's scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Animate headline fading out
  const headlineOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3],
    [1, 1, 0]
  );
  const imageX = useTransform(scrollYProgress, [0.2, 0.45], ["-300px", "0px"]);
  const imageOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const introOpacity = useTransform(scrollYProgress, [0.5, 0.7, 1], [0, 1, 1]);
  const introY = useTransform(scrollYProgress, [0.5, 0.7], [50, 0]);

  // Arrow fade-out (scroll down) and fade-in (scroll up)
  const arrowFadeOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const [showArrow, setShowArrow] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v < lastY.current) {
        // Scrolling up
        setShowArrow(true);
      } else if (v > lastY.current && v > 0.02) {
        // Scrolling down (and not right at the top)
        setShowArrow(false);
      }
      lastY.current = v;
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section
      ref={ref}
      className="flex flex-col items-center min-h-[275vh] bg-[#f8f8f3] relative"
    >
      <BlossomPetals count={15} />

      {/* Headline */}
      <motion.h1
        style={{
          opacity: headlineOpacity,
          fontFamily: "'Playfair Display', serif",
        }}
        className="fixed top-1/4 left-0 w-full text-center text-[7vw] md:text-[6vw] font-bold z-30 pointer-events-none select-none"
      >
        Welcome to
        <br />
        Andrew Zhao&apos;s page
      </motion.h1>

      {/* Scroll Down Arrow */}
      <motion.div
        style={{
          opacity: showArrow ? arrowFadeOut : 0,
          pointerEvents: "none",
        }}
        initial={{ y: 0 }}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="fixed left-1/2 -translate-x-1/2 bottom-16 z-40"
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14m0 0l-7-7m7 7l7-7"
            stroke="#222"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Sticky animated content */}
      <div className="sticky top-32 flex flex-col items-center w-full pt-44">
        {/* Profile Picture */}
        <motion.img
          src="/profile.jpg"
          alt="Andrew Zhao"
          style={{ x: imageX, opacity: imageOpacity }}
          className="w-100 h-100 object-cover rounded-full border-3 border-blue-200 shadow-lg mb-8"
        />

        {/* Intro */}
        <motion.div
          style={{ opacity: introOpacity, y: introY }}
          className="text-2xl font-medium text-gray-700 text-center max-w-xl"
        >
          Hey! I&apos;m Andrew, a CS student at UC Irvine. I love tech, sports,
          and sharing what I learn. I update this when time allows me to explore
          my hobbies.
        </motion.div>
      </div>
    </section>
  );
}
