"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const titles = [
  "Desenvolvedor Front-End",
  "Entusiasta de UI/UX",
  "Criador de Experiências Web",
];

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center bg-background-primary">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4 text-text-heading"
        >
          Olá, eu sou Henrique
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <AnimatedTitles />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link
            href="#projects"
            className="mt-6 inline-block bg-brand-primary hover:bg-brand-secondary 
                      text-white px-6 py-3 rounded-lg shadow-lg 
                      hover:shadow-xl transition-all duration-300
                      "
          >
            Veja meus projetos
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const AnimatedTitles = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h2
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="text-xl md:text-2xl text-brand-primary font-medium h-10"
    >
      {titles[index]}
    </motion.h2>
  );
};
