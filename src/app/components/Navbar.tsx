"use client";

import { useEffect, useState, useCallback } from "react";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = () => setIsOpen(!isOpen);

  const updateActiveSection = useCallback(() => {
    const sections = document.querySelectorAll("section");
    const windowMiddle = window.scrollY + window.innerHeight / 3; 

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (windowMiddle >= sectionTop && windowMiddle < sectionBottom) {
        setActiveSection(section.id);
      }
    });
  }, []);

  useEffect(() => {
    setMounted(true);
    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [updateActiveSection]);

  if (!mounted) return null;

  const navItems = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "Sobre", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projetos", href: "#projects", id: "projects" },
    { name: "Contatos", href: "#contact", id: "contact" },
  ];

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
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background-primary/80 border-b border-border/40 transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link 
          href="#hero" 
          onClick={(e) => handleSmoothScroll(e, "#hero", "hero")}
          className="text-lg font-bold tracking-tighter text-text-heading hover:opacity-80 transition-opacity"
        >
          henrique<span className="text-brand-primary">.</span>feijó
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-all duration-300 relative group ${
                activeSection === item.id 
                  ? "text-brand-primary" 
                  : "text-text-secondary hover:text-text-primary"
              }`}
              onClick={(e) => handleSmoothScroll(e, item.href, item.id)}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-brand-primary origin-left transition-transform duration-300 ${
                activeSection === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`} />
            </Link>
          ))}

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-background-accent/50 text-text-primary hover:text-brand-primary transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-text-primary focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out border-b border-border/40 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 bg-background-primary" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href, item.id)}
                className={`block text-lg font-medium ${
                  activeSection === item.id ? "text-brand-primary" : "text-text-secondary"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="pt-4 border-t border-border/40">
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setIsOpen(false);
              }}
              className="flex items-center gap-3 text-text-primary"
            >
              {theme === "dark" ? (
                <> <Sun size={20} /> <span>Modo Claro</span> </>
              ) : (
                <> <Moon size={20} /> <span>Modo Escuro</span> </>
              )}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};