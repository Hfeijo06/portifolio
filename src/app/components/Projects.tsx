"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfólio Pessoal",
    description:
      "Um site moderno para apresentar minhas habilidades e projetos.",
    techs: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/projects/portfolio.png",
    github: "https://github.com/seuusuario/portfolio",
    demo: "https://meuportfolio.com",
  },
  {
    title: "Dashboard Financeiro",
    description:
      "Aplicação para controle de gastos e receitas com gráficos dinâmicos.",
    techs: ["React", "Firebase", "Chart.js"],
    image: "/projects/dashboard.png",
    github: "https://github.com/seuusuario/dashboard",
    demo: "https://dashboarddemo.com",
  },
];

export const Projects = () => {
  return (
    <section
      className="py-20 px-6 max-w-6xl min-h-screen mx-auto"
      id="projects"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-medium text-center mb-12 text-text-heading"
      >
        Meus Projetos
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative overflow-hidden rounded-xl border border-border bg-background-secondary hover:bg-background-accent transition-all duration-300"
          >
            <div className="relative h-60 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-primary/80 via-transparent to-transparent" />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-text-heading">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-brand-primary transition-colors"
                    aria-label="Código no GitHub"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-brand-primary transition-colors"
                    aria-label="Ver demonstração"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <p className="text-text-primary mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-brand-primary/10 text-brand-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
