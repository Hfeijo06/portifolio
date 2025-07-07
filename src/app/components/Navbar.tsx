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
    const windowMiddle = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (windowMiddle >= sectionTop && windowMiddle < sectionBottom) {
        setActiveSection((prev) => (prev !== section.id ? section.id : prev));
      }
    });
  }, []);

  useEffect(() => {
    setMounted(true);

    updateActiveSection();

    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateActiveSection, 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleLinkClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (href) {
        setActiveSection(href.substring(1));
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", handleLinkClick));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      links.forEach((link) =>
        link.removeEventListener("click", handleLinkClick)
      );
    };
  }, [updateActiveSection]);

  if (!mounted) return null;

  const navItems = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "Sobre", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projetos", href: "#projects", id: "projects" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-background-primary/70 dark:bg-background-primary/70 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Henrique Feijó</h1>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`hover:text-blue-500 transition-colors duration-300 ${
                activeSection === item.id ? "text-blue-500 font-medium" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
                setActiveSection(item.id);
              }}
            >
              {item.name}
            </Link>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          )}
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <div
        className={`md:hidden px-4 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen py-4 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-background-primary/95 dark:bg-background-primary/95`}
      >
        <ul className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                  setActiveSection(item.id);
                  setIsOpen(false);
                }}
                className={`block text-lg transition-colors ${
                  activeSection === item.id
                    ? "text-blue-500 font-medium"
                    : "hover:text-brand-primary"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setIsOpen(false);
              }}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-background-accent transition-colors w-full text-lg"
              aria-label="Alternar tema"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="w-5 h-5" />
                  <span>Modo Claro</span>
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5" />
                  <span>Modo Escuro</span>
                </>
              )}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
