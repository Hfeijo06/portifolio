"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
  const technologies = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
  ];

  return (
    <section
      className="relative flex items-center justify-center min-h-screen py-24 px-6 bg-background-primary overflow-hidden"
      id="about"
    >
      <div className="max-w-5xl w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-16 items-center"
        >
          <motion.div
            className="w-full md:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-primary/30 rounded-2xl transition-all duration-500 group-hover:-bottom-2 group-hover:-right-2" />
              
              <div className="relative w-72 h-72 md:w-80 md:h-96 overflow-hidden rounded-2xl bg-background-secondary border border-border">
                <Image
                  src="/me.jpg" 
                  alt="Henrique Feijó"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-primary/40 to-transparent" />
              </div>

            </div>
          </motion.div>

          <div className="w-full md:w-3/5 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-[1px] bg-brand-primary" />
                <span className="text-brand-primary font-mono text-sm tracking-widest uppercase">01. Sobre mim</span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-text-heading tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Transformando código em <span className="text-brand-primary">arte digital.</span>
              </motion.h2>
            </div>

            <motion.div
              className="space-y-4 text-text-primary text-lg leading-relaxed font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>
                Olá! Sou o Henrique, um desenvolvedor focado no ecossistema <span className="text-text-heading font-medium">React & Next.js</span>. 
                Minha jornada é movida pela curiosidade de como as coisas funcionam sob o capô e pela paixão de criar interfaces que não apenas funcionam, mas encantam.
              </p>
              <p>
                Acredito que um bom front-end é a ponte invisível entre a lógica complexa e a experiência humana. Por isso, foco em performance, acessibilidade e, claro, um design impecável.
              </p>
            </motion.div>

            <motion.div
              className="pt-6 border-t border-border/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-text-secondary uppercase tracking-[0.2em] mb-6 font-semibold">
                Meu Arsenal Tecnológico
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-text-secondary hover:text-brand-primary transition-colors duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    <span className="font-mono text-sm">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Detalhe Decorativo de Fundo */}
      <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none select-none">
        <h1 className="text-[20rem] font-bold leading-none translate-y-20 translate-x-20">ABOUT</h1>
      </div>
    </section>
  );
};