"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
  return (
    <section
      className="flex items-center justify-center min-h-screen py-20 px-6"
      id="about"
    >
      <div className="max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          <motion.div
            className="w-full md:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/me.jpg"
                alt="Foto de perfil"
                fill
                className="rounded-lg object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          <div className="w-full md:w-2/3 space-y-6">
            <motion.h2
              className="text-3xl font-medium text-text-heading text-center md:text-left"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Sobre Mim
            </motion.h2>

            <motion.p
              className="text-lg text-text-primary leading-relaxed text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Desenvolvedor front-end especializado em criar interfaces modernas
              e responsivas. Com experiência em React, Next.js e sistemas de
              design, meu trabalho combina funcionalidade técnica com
              sensibilidade estética.
            </motion.p>

            <motion.div
              className="pt-4 border-t border-border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p className="text-sm text-text-secondary uppercase tracking-wider mb-3 text-center md:text-left">
                Tecnologias que utilizo
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Tailwind CSS",
                  "JavaScript",
                ].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-sm bg-background-accent rounded-full text-text-primary"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
