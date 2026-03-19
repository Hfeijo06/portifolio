"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ChevronUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background-primary border-t border-border/40 py-12 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="mb-8 flex flex-col text-center">
          <span className="text-lg font-bold tracking-tighter text-text-center">
            henrique<span className="text-brand-primary">.</span>feijó
          </span>
          <p className="text-xs text-text-secondary font-mono uppercase tracking-[0.2em] mt-2">
            Front-end Developer
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://github.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 text-text-secondary hover:text-brand-primary transition-all duration-300"
          >
            <FaGithub className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
            <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Github</span>
          </a>
          <a
            href="https://linkedin.com/in/seulinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 text-text-secondary hover:text-brand-primary transition-all duration-300"
          >
            <FaLinkedin className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
            <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Linkedin</span>
          </a>
        </div>

        <div className="text-center space-y-2">
          <p className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">
            © {new Date().getFullYear()} Henrique Feijó — Todos os direitos reservados.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="mt-8 p-3 rounded-full border border-border/60 text-text-secondary hover:border-brand-primary hover:text-brand-primary transition-all duration-300 group"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="absolute left-10 bottom-0 w-[1px] h-24 bg-gradient-to-t from-brand-primary/20 to-transparent hidden md:block" />
    </footer>
  );
};