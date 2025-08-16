"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Globe, Cpu } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Code size={32} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code with best practices",
      stats: "100+ Projects",
    },
    {
      icon: <Globe size={32} />,
      title: "Global Mindset",
      description: "Fluent in Armenian, Russian, and English for international collaboration",
      stats: "3 Languages",
    },
    {
      icon: <Cpu size={32} />,
      title: "Modern Stack",
      description: "Expertise in cutting-edge technologies and cloud-native architectures",
      stats: "20+ Technologies",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 uppercase">
            <span className="border-b-4 border-white pb-2">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p 
                className="text-lg leading-relaxed text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                I am a passionate <span className="text-white font-bold">Software Engineer</span> with 
                a strong foundation in modern web development technologies. My journey in software 
                engineering began at the <span className="text-white font-bold">European University of 
                Yerevan</span>, where I developed a deep understanding of computer science principles 
                and software architecture.
              </motion.p>
              <motion.p 
                className="text-lg leading-relaxed text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                I specialize in building <span className="text-white font-bold">robust, scalable 
                applications</span> with a focus on clean code and exceptional user experiences. 
                My multilingual abilities in <span className="text-white font-bold">Armenian, Russian, 
                and English</span> enable me to collaborate effectively in diverse, international teams.
              </motion.p>
              <motion.p 
                className="text-lg leading-relaxed text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                When I'm not coding, I'm exploring new technologies, contributing to 
                <span className="text-white font-bold"> open-source projects</span>, and continuously 
                learning to stay at the forefront of software development.
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-64 h-64 border-4 border-white"
                  animate={{ rotate: [3, 5, 3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.div 
                    className="w-full h-full bg-black border-4 border-white flex items-center justify-center relative overflow-hidden group cursor-default"
                    animate={{ rotate: [-6, -8, -6] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <motion.span 
                      className="text-6xl font-bold relative z-10"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      DS
                    </motion.span>
                    {/* Animated background lines */}
                    <motion.div
                      className="absolute inset-0 opacity-20"
                      animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      style={{
                        backgroundImage: "linear-gradient(45deg, transparent 48%, white 49%, white 51%, transparent 52%)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border-2 border-white p-6 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-300 relative overflow-hidden cursor-default"
                whileHover={{ scale: 1.02 }}
              >
                {/* Background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="mb-4"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 uppercase">{feature.title}</h3>
                  <p className="text-gray-400 mb-3">{feature.description}</p>
                  <motion.p 
                    className="text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {feature.stats}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}