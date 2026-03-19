"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const titles = [
  "Desenvolvedor Front-End",
  "Entusiasta de UI/UX",
  "Criador de Experiências Web",
];

export const Hero = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero")

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      if (isOpen) setIsOpen(false);
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 text-center bg-background-primary overflow-hidden"
      id="hero"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-primary/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-4xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4 block"
        >
          Disponível para novos projetos
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-bold mb-6 text-text-heading tracking-tight"
        >
          Olá, eu sou <span className="text-brand-primary">Henrique</span>
        </motion.h1>

        <div className="h-12 mb-10">
          <AnimatedTitles />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "#projects", "projects")}
            className="group relative px-8 py-4 bg-brand-primary text-background-primary font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-102 active:scale-95"
          >
            <span className="relative z-10 text-white">Veja meus projetos</span>
            <div className="absolute inset-0 bg-brand-secondary/35 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-400" />
          </Link>

          <Link
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact", "contact")}
            className="px-8 py-4 border border-border text-text-primary font-medium rounded-full hover:bg-background-secondary transition-all duration-300 active:scale-95"
          >
            Entre em contato
          </Link>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary/30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-primary to-transparent" />
      </motion.div>
    </section>
  );
};

const AnimatedTitles = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-full">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-xl md:text-2xl text-text-secondary font-light"
        >
          {titles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};