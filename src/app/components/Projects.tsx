"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaRegFolder } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  techs: string[];
  github: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Sistema de Gestão de Vendas",
    description:
      "Sistema completo desenvolvido como TCC para automatizar a operação de um depósito de água e gás: cadastro de clientes e produtos, controle de estoque em tempo real, vendas, entregas, autenticação de usuários e relatórios com exportação em PDF e Excel.",
    techs: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    github: "https://github.com/Hfeijo06/Sistema-TCC",
  },
  {
    title: "Reviews Project",
    description:
      "Aplicação de página de reviews construída com React e Tailwind CSS no front-end e Node.js no back-end, utilizando Vite como build tool e ESLint para qualidade de código.",
    techs: ["React", "Tailwind CSS", "Node.js", "Vite"],
    github: "https://github.com/Hfeijo06/Reviews-Project",
  },
  {
    title: "Portfólio Pessoal",
    description:
      "Este site: um portfólio one-page com dark mode, animações fluidas e foco em performance e SEO, renderizado estaticamente com Next.js.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Hfeijo06/portifolio",
  },
  {
    title: "Music Player",
    description:
      "Front-end de um player de música construído com HTML e CSS puros, com foco em fidelidade de layout e estilização de componentes de interface.",
    techs: ["HTML5", "CSS3"],
    github: "https://github.com/Hfeijo06/Music-Player",
  },
];

export const Projects = () => {
  return (
    <section className="py-24 px-6 max-w-6xl min-h-screen mx-auto" id="projects">
      <div className="flex flex-col items-center mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-[1px] bg-brand-primary" />
          <span className="text-brand-primary font-mono text-sm tracking-widest uppercase">03. Portfólio</span>
          <div className="w-8 h-[1px] bg-brand-primary" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-text-heading tracking-tight"
        >
          Trabalhos em <span className="text-brand-primary">Destaque</span>
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative flex flex-col p-8 rounded-2xl border border-border/50 bg-background-secondary/30 backdrop-blur-sm hover:border-brand-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/10 hover:-translate-y-1"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="text-brand-primary">
                <FaRegFolder size={32} strokeWidth={1} />
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-brand-primary transition-all hover:scale-110"
                  title="Ver Código"
                  aria-label={`Código de ${project.title} no GitHub`}
                >
                  <FaGithub size={22} />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-brand-primary transition-all hover:scale-110"
                    title="Live Demo"
                    aria-label={`Demo de ${project.title}`}
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-text-heading tracking-tight group-hover:text-brand-primary transition-colors mb-4">
              {project.title}
            </h3>

            <p className="text-text-secondary font-light leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono uppercase tracking-widest text-text-secondary border border-border px-2 py-1 rounded group-hover:border-brand-primary/30 group-hover:text-text-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 flex justify-center"
      >
        <a
          href="https://github.com/Hfeijo06?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-mono text-brand-primary border-b border-brand-primary pb-1 hover:border-text-heading hover:text-text-heading transition-all"
        >
          Ver mais no GitHub
        </a>
      </motion.div>
    </section>
  );
};
