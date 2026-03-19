"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Contact = () => {
  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/in/seulinkedin" },
    { name: "GitHub", href: "https://github.com/seuusuario" },
  ];

  return (
    <section 
      className="py-32 px-6 max-w-4xl mx-auto min-h-[60vh] flex flex-col justify-center border-t border-border/30" 
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-12"
      >

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-[1px] bg-brand-primary" />
            <span className="text-brand-primary font-mono text-sm tracking-widest uppercase">04. Contatos</span>
            <div className="w-8 h-[1px] bg-brand-primary" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-text-heading tracking-tighter">
            Vamos construir algo <br /> 
            <span className="italic font-light">memorável juntos.</span>
          </h2>
        </div>

        <div className="py-10 border-y border-border/30 group">
          <a 
            href="mailto:henrique@exemplo.com"
            className="text-2xl md:text-5xl font-medium text-text-primary hover:text-brand-primary transition-all duration-500 flex items-center justify-between"
          >
            henriquefeijo06@gmail.com
            <motion.div
              whileHover={{ rotate: 45 }}
              className="text-brand-primary transition-transform duration-300"
            >
              <ArrowUpRight size={48} strokeWidth={1} />
            </motion.div>
          </a>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-4">
          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1 group"
              >
                {link.name}
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
          
          <p className="text-xs text-text-secondary/50 font-mono uppercase tracking-widest">
            Disponível para contratos CLT<span className="lowercase">s</span> e PJ<span className="lowercase">s</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};