"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "Python", level: 4 },
      { name: "Java", level: 4 },
      { name: "Go", level: 3 },
      { name: "C++", level: 3 }
    ],
    icon: "</>",
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 5 },
      { name: "Next.js 14", level: 5 },
      { name: "Vue.js 3", level: 4 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Framer Motion", level: 4 },
      { name: "Three.js", level: 3 }
    ],
    icon: "⚡",
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 5 },
      { name: "Express", level: 5 },
      { name: "FastAPI", level: 4 },
      { name: "GraphQL", level: 4 },
      { name: "REST APIs", level: 5 },
      { name: "Microservices", level: 4 }
    ],
    icon: "⚙️",
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", level: 5 },
      { name: "MongoDB", level: 4 },
      { name: "Redis", level: 4 },
      { name: "MySQL", level: 4 },
      { name: "Prisma", level: 5 },
      { name: "TypeORM", level: 3 }
    ],
    icon: "💾",
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", level: 4 },
      { name: "Kubernetes", level: 3 },
      { name: "AWS", level: 4 },
      { name: "CI/CD", level: 5 },
      { name: "GitHub Actions", level: 5 },
      { name: "Terraform", level: 3 }
    ],
    icon: "🚀",
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 5 },
      { name: "VS Code", level: 5 },
      { name: "Postman", level: 5 },
      { name: "Figma", level: 3 },
      { name: "Jira", level: 4 },
      { name: "Linux", level: 4 }
    ],
    icon: "🛠️",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="min-h-screen py-20 px-4 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 uppercase">
            <span className="border-b-4 border-white pb-2">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="group border-2 border-white p-6 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-300 relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4 border-b-2 border-white pb-2">
                    <h3 className="text-xl font-bold uppercase">
                      {category.title}
                    </h3>
                    <span className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">
                      {category.icon}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-300 group-hover/skill:text-white transition-colors font-medium">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            {skill.level === 5 ? "Expert" : skill.level === 4 ? "Advanced" : "Intermediate"}
                          </span>
                        </div>
                        
                        {/* Skill level bar */}
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`h-1 flex-1 border border-white transition-all duration-300 ${
                                i < skill.level
                                  ? "bg-white"
                                  : "bg-transparent opacity-30"
                              } group-hover/skill:bg-white group-hover/skill:opacity-100`}
                              initial={{ scaleX: 0 }}
                              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: categoryIndex * 0.1 + skillIndex * 0.05 + i * 0.05,
                              }}
                              style={{ transformOrigin: "left" }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 p-8 border-2 border-white text-center relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <h3 className="text-2xl font-bold mb-6 uppercase relative z-10">Spoken Languages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto relative z-10">
              {[
                { lang: "Armenian", level: "Native", flag: "🇦🇲" },
                { lang: "Russian", level: "Fluent", flag: "🇷🇺" },
                { lang: "English", level: "Fluent", flag: "🇬🇧" },
              ].map((language, index) => (
                <motion.div
                  key={language.lang}
                  className="p-4 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 group/lang cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-2xl mb-2">{language.flag}</p>
                  <p className="font-bold uppercase tracking-wider">{language.lang}</p>
                  <p className="text-sm text-gray-400 group-hover/lang:text-gray-600 transition-colors">
                    {language.level}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}