"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ChevronUp } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-background-primary border-t border-border py-10 px-6 text-center relative">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/seuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-brand-primary transition-colors"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/seulinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-brand-primary transition-colors"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
      </div>
      <p className="text-sm text-text-secondary">
        © {new Date().getFullYear()} Henrique Feijó. Todos os direitos
        reservados.
      </p>
      <Link
        href="#hero"
        className="absolute right-4 bottom-4 bg-brand-primary hover:bg-brand-secondary text-white p-2 rounded-full shadow transition-all"
        aria-label="Voltar ao topo"
      >
        <ChevronUp className="w-4 h-4" />
      </Link>
    </footer>
  );
};
