"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Code } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com/davitsimonyan", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/davitsimonyan", label: "LinkedIn" },
    { icon: <Mail size={18} />, href: "mailto:davit.simonyan@example.com", label: "Email" },
  ];

  return (
    <footer className="border-t-2 border-white py-12 px-4 relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: "linear-gradient(45deg, white 25%, transparent 25%, transparent 75%, white 75%, white), linear-gradient(45deg, white 25%, transparent 25%, transparent 75%, white 75%, white)",
          backgroundSize: "30px 30px",
          backgroundPosition: "0 0, 15px 15px",
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-2">DS</h3>
            <p className="text-sm text-gray-400 uppercase tracking-wider">
              Davit Simonyan
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Software Engineer
            </p>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 border border-white hover:bg-white hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-xs text-gray-400 flex items-center justify-center md:justify-start gap-1">
              <span>© {currentYear}</span>
              <span>•</span>
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={12} className="inline" fill="currentColor" />
              </motion.span>
              <span>in Yerevan, Armenia</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Code size={14} className="text-gray-400" />
            <span className="text-xs text-gray-400">Powered by</span>
            <div className="flex items-center gap-1">
              {['Next.js 14', 'TypeScript', 'Tailwind'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-2 py-0.5 border border-gray-600 text-xs text-gray-400 hover:border-white hover:text-white transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xs uppercase tracking-wider hover:text-gray-300 transition-all duration-300 inline-flex items-center gap-2 group"
            whileHover={{ y: -2 }}
          >
            <span>Back to Top</span>
            <motion.span
              animate={{ y: [-2, 0, -2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↑
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}