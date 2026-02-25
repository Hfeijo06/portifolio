"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfólio Pessoal",
    description:
      "Um site moderno para apresentar minhas habilidades e projetos, com foco em performance e animações fluidas.",
    techs: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/projects/portfolio.png",
    github: "https://github.com/seuusuario/portfolio",
    demo: "https://meuportfolio.com",
  },
  {
    title: "Dashboard Financeiro",
    description:
      "Aplicação para controle de gastos e receitas com gráficos dinâmicos e autenticação segura.",
    techs: ["React", "Firebase", "Chart.js"],
    image: "/projects/dashboard.png",
    github: "https://github.com/seuusuario/dashboard",
    demo: "https://dashboarddemo.com",
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

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group relative flex flex-col rounded-2xl border border-border/50 bg-background-secondary/30 backdrop-blur-sm overflow-hidden hover:border-brand-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/10"
          >
            {/* Imagem com Overlay Tech */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply opacity-30 group-hover:opacity-0 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-transparent to-transparent" />
            </div>

            {/* Conteúdo do Card */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-text-heading tracking-tight group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-brand-primary transition-all hover:scale-110"
                    title="Ver Código"
                  >
                    <FaGithub size={22} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-brand-primary transition-all hover:scale-110"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>

              <p className="text-text-secondary font-light leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tecnologias estilo "Tag Minimalista" */}
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
            </div>
          </motion.article>
        ))}
      </div>
      
      {/* Botão para ver mais (Opcional, mas dá um toque extra) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 flex justify-center"
      >
        <a 
          href="https://github.com/seuusuario" 
          target="_blank"
          className="text-sm font-mono text-brand-primary border-b border-brand-primary pb-1 hover:border-text-heading hover:text-text-heading transition-all"
        >
          Ver mais no GitHub
        </a>
      </motion.div>
    </section>
  );
};