"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const headlines = [
  "Discover Premium Products",
  "Shop Smart. Shop Stylish.",
  "Unbeatable Deals Every Day",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[var(--background)] px-6 py-8 md:py-10">
      {/* subtle glow (small, not dominant) */}
      <div className="absolute -z-10 top-10 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-blue-200 via-yellow-200 to-transparent blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-extrabold leading-tight"
        >
          <span className="text-[var(--primary)]">
            {headlines[index].split(" ")[0]}
          </span>{" "}
          <span className="text-[var(--accent)]">
            {headlines[index].split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        <p className="text-gray-600 mt-3 max-w-md text-sm md:text-base">
          Experience modern shopping with premium quality and fast delivery.
        </p>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => {
            const el = document.getElementById("products");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-4 bg-[var(--primary)] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[var(--accent)] hover:text-black transition"
        >
          Shop Now →
        </motion.button>

      </div>
    </section>
  );
};

export default HeroSection;
