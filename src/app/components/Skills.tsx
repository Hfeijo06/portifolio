"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 size={32} />, name: "HTML5" },
  { icon: <FaCss3Alt size={32} />, name: "CSS3" },
  { icon: <FaJs size={32} />, name: "JavaScript" },
  { icon: <SiTypescript size={32} />, name: "TypeScript" },
  { icon: <FaReact size={32} />, name: "React" },
  { icon: <SiNextdotjs size={32} />, name: "Next.js" },
  { icon: <SiTailwindcss size={32} />, name: "Tailwind" },
  { icon: <FaNode size={32} />, name: "Node.js" },
  { icon: <FaGithub size={32} />, name: "GitHub" },
];

export const Skills = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen py-24 px-6 bg-background-primary"
      id="skills"
    >
      <div className="w-full max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-[1px] bg-brand-primary" />
            <span className="text-brand-primary font-mono text-sm tracking-widest uppercase">02. Arsenal</span>
            <div className="w-8 h-[1px] bg-brand-primary" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-text-heading tracking-tight"
          >
            Tecnologias e <span className="text-brand-primary">Ferramentas</span>
          </motion.h2>
          <p className="text-text-secondary max-w-md text-center font-light">
            Construindo o futuro da web com as melhores práticas e as ferramentas mais modernas do mercado.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-2xl bg-background-secondary/50 border border-border/50 flex flex-col items-center justify-center transition-all duration-300 hover:border-brand-primary hover:bg-background-secondary shadow-sm"
            >

              <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              
              <div className="relative text-text-secondary group-hover:text-brand-primary transition-colors duration-300 mb-4">
                {skill.icon}
              </div>
              
              <p className="relative text-xs font-mono tracking-wider uppercase text-text-secondary group-hover:text-text-primary transition-colors duration-300 text-center">
                {skill.name}
              </p>

              <div className="absolute bottom-4 w-1 h-1 rounded-full bg-brand-primary scale-0 group-hover:scale-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <h1 className="text-[15rem] font-bold leading-none -rotate-90">SKILLS</h1>
      </div>
    </section>
  );
};