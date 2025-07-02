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
  { icon: <FaHtml5 size={28} />, name: "HTML5", color: "text-orange-500" },
  { icon: <FaCss3Alt size={28} />, name: "CSS3", color: "text-blue-500" },
  { icon: <FaJs size={28} />, name: "JavaScript", color: "text-yellow-400" },
  {
    icon: <SiTypescript size={28} />,
    name: "TypeScript",
    color: "text-blue-600",
  },
  { icon: <FaReact size={28} />, name: "React", color: "text-cyan-400" },
  {
    icon: <SiNextdotjs size={28} />,
    name: "Next.js",
    color: "text-gray-800 dark:text-gray-200",
  },
  {
    icon: <SiTailwindcss size={28} />,
    name: "Tailwind",
    color: "text-cyan-600",
  },
  { icon: <FaNode size={28} />, name: "Node.js", color: "text-green-600" },
  {
    icon: <FaGithub size={28} />,
    name: "GitHub",
    color: "text-gray-800 dark:text-gray-200",
  },
];

export const Skills = () => {
  return (
    <section
      className="flex items-center justify-center min-h-screen py-20 px-6 w-full bg-background-primary"
      id="skills"
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-medium text-center mb-12 text-text-heading"
        >
          Minhas Habilidades
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col items-center"
            >
              <div
                className={`p-4 rounded-xl bg-background-secondary ${skill.color} mb-2 transition-all hover:scale-110`}
              >
                {skill.icon}
              </div>
              <p className="text-sm font-medium text-text-primary">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
