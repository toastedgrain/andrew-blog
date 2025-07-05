"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const PetalSVG = ({ className = "" }) => (
  <svg viewBox="0 0 40 40" className={className} width={24} height={24}>
    <path
      d="M20 38 C35 28, 38 10, 20 3 C2 10, 5 28, 20 38 Z"
      fill="#f9b6c3"
      stroke="#e38ea6"
      strokeWidth="1"
    />
  </svg>
);

export function BlossomPetals({ count = 12 }) {
  const [petals, setPetals] = useState<Array<number>>([]);
  useEffect(() => {
    setPetals(Array.from({ length: count }, (_, i) => i));
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((i) => {
        const left = `${randomInt(0, 100)}vw`;
        const duration = randomInt(8, 15);
        const delay = randomInt(0, 10);

        return (
          <motion.div
            key={i}
            initial={{ y: -40, opacity: 0.8, rotate: randomInt(-20, 20) }}
            animate={{
              y: "110vh",
              opacity: [0.8, 0.5, 0.8],
              rotate: randomInt(-10, 10),
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration,
              delay,
              ease: "easeInOut",
            }}
            style={{ position: "absolute", left, top: 0 }}
          >
            <PetalSVG />
          </motion.div>
        );
      })}
    </div>
  );
}
