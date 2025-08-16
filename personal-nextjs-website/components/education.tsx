"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="min-h-screen py-20 px-4 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 uppercase">
            <span className="border-b-4 border-white pb-2">Education</span>
          </h2>

          <div className="relative">
            {/* Animated Timeline line */}
            <motion.div 
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white to-transparent"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex items-start mb-12"
            >
              {/* Animated Timeline dot */}
              <motion.div 
                className="absolute left-6 w-4 h-4 bg-white border-2 border-black rounded-full z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.5 }}
              />
              
              <div className="ml-16 flex-1">
                <motion.div 
                  className="bg-black border-2 border-white p-8 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                    style={{
                      backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  
                  <div className="flex items-center mb-4 relative z-10">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <GraduationCap size={32} className="mr-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold uppercase">Software Engineering</h3>
                  </div>
                  
                  <h4 className="text-xl mb-4 text-gray-300 relative z-10">European University of Yerevan</h4>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6 relative z-10">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>Bachelor's Degree</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>Yerevan, Armenia</span>
                    </div>
                  </div>

                  <div className="space-y-2 relative z-10">
                    <p className="text-gray-300 font-bold">Key Coursework:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {[
                        "Data Structures",
                        "Algorithms",
                        "Web Development",
                        "Database Systems",
                        "Software Architecture",
                        "Computer Networks",
                        "Operating Systems",
                        "Machine Learning",
                        "Mobile Development"
                      ].map((course, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-1 border border-white text-xs uppercase hover:bg-white hover:text-black transition-all cursor-default"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative flex items-start"
            >
              {/* Animated Timeline dot */}
              <motion.div 
                className="absolute left-6 w-4 h-4 bg-white border-2 border-black rounded-full z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.5 }}
              />
              
              <div className="ml-16 flex-1">
                <motion.div 
                  className="bg-black border-2 border-white p-8 relative overflow-hidden group hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <h3 className="text-xl font-bold uppercase mb-4 relative z-10 flex items-center">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="mr-3"
                    >
                      💡
                    </motion.span>
                    Continuous Learning
                  </h3>
                  <p className="text-gray-300 mb-4 relative z-10">
                    Actively pursuing knowledge through online courses, certifications, and hands-on projects
                  </p>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Node.js",
                      "AWS",
                      "Docker",
                      "GraphQL",
                      "PostgreSQL"
                    ].map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1 border border-white text-xs uppercase hover:bg-white hover:text-black transition-all cursor-default"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                        whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}