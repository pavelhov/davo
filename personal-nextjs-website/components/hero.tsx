"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Terminal, Code2 } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "DAVIT SIMONYAN";
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Software Engineer", "Full-Stack Developer", "Problem Solver", "Tech Enthusiast"];
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]"
          animate={{
            transform: ["translateX(0px)", "translateX(32px)"],
          }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </div>
      
      {/* Floating tech icons */}
      <motion.div
        className="absolute top-20 left-10 opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Terminal size={48} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-10 opacity-20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Code2 size={48} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        {/* Glitch effect name */}
        <motion.h1 
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-mono tracking-tighter relative">
            {text.split('').map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0, y: 50, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.6, -0.05, 0.01, 0.99],
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
          {showCursor && <span className="animate-pulse ml-1">_</span>}
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mb-8"
        >
          <div className="h-8 sm:h-10 relative overflow-hidden">
            <motion.p
              key={roleIndex}
              className="text-xl sm:text-2xl md:text-3xl uppercase tracking-wider absolute inset-0 flex items-center justify-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent bg-300% animate-gradient">
                {roles[roleIndex]}
              </span>
            </motion.p>
          </div>
          <motion.p 
            className="text-sm sm:text-base text-gray-400 uppercase tracking-[0.3em] mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            European University of Yerevan
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
        >
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-8 py-4 border-2 border-white uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Explore Work</span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute inset-0 flex items-center justify-center text-black"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Explore Work
            </motion.span>
          </motion.a>
          
          <motion.a
            href="https://github.com/davitsimonyan"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-white text-black border-2 border-white uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={20} className="relative z-10" />
            <span className="relative z-10">GitHub</span>
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center gap-2 text-white"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Github size={20} />
              <span>GitHub</span>
            </motion.div>
          </motion.a>
          
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-8 py-4 border-2 border-white uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Contact</span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute inset-0 flex items-center justify-center text-black"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Contact
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-gray-400">Scroll</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}