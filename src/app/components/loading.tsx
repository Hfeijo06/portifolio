"use client";

import { motion } from "framer-motion";

export const Loading = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-background-primary flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [0.98, 1.02, 0.98] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="text-2xl font-bold tracking-tighter text-text-heading mb-8"
        >
          henrique<span className="text-brand-primary">.</span>feijó
        </motion.div>

        <div className="w-32 h-[1px] bg-border relative overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute inset-0 bg-brand-primary"
          />
        </div>
      </motion.div>
    </div>
  );
};