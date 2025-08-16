"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "NextCommerce Platform",
    description: "Modern e-commerce solution with real-time inventory, Stripe payments, and admin dashboard",
    tech: ["Next.js 14", "TypeScript", "Stripe", "PostgreSQL", "Prisma", "TailwindCSS"],
    github: "https://github.com/davitsimonyan/nextcommerce",
    live: "https://nextcommerce-demo.vercel.app",
    featured: true,
  },
  {
    title: "TaskFlow Pro",
    description: "Real-time collaborative task management with Kanban boards, team chat, and analytics",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "Docker"],
    github: "https://github.com/davitsimonyan/taskflow",
    live: "https://taskflow.example.com",
    featured: true,
  },
  {
    title: "AI Content Studio",
    description: "GPT-powered content generation platform with SEO optimization and multilingual support",
    tech: ["Python", "FastAPI", "OpenAI", "React", "PostgreSQL", "Celery"],
    github: "https://github.com/davitsimonyan/ai-content",
    live: "https://ai-content-studio.com",
    featured: false,
  },
  {
    title: "CryptoTracker Dashboard",
    description: "Real-time cryptocurrency portfolio tracker with advanced charting and alerts",
    tech: ["Vue.js 3", "D3.js", "WebSocket", "Express", "Redis"],
    github: "https://github.com/davitsimonyan/cryptotracker",
    live: "https://cryptotrack.io",
    featured: false,
  },
  {
    title: "SecureBank Mobile",
    description: "Banking app with biometric auth, P2P transfers, and blockchain integration",
    tech: ["React Native", "TypeScript", "Node.js", "Web3.js", "JWT"],
    github: "https://github.com/davitsimonyan/securebank",
    live: null,
    featured: false,
  },
  {
    title: "CloudOps Platform",
    description: "Kubernetes cluster management with automated scaling and monitoring",
    tech: ["Go", "Docker", "K8s", "Prometheus", "Grafana", "Terraform"],
    github: "https://github.com/davitsimonyan/cloudops",
    live: "https://cloudops-platform.dev",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="min-h-screen py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 uppercase">
            <span className="border-b-4 border-white pb-2">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-black border-2 border-white relative overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-300">
                  {project.featured && (
                    <div className="absolute top-0 right-0 bg-white text-black px-2 py-1 text-xs uppercase font-bold">
                      Featured
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Code2 size={24} className="group-hover:text-gray-300 transition-colors" />
                      </motion.div>
                      <div className="flex gap-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:scale-125 transition-transform"
                          aria-label="GitHub repository"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Github size={20} />
                        </motion.a>
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-125 transition-transform"
                            aria-label="Live project"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <ExternalLink size={20} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold mb-2 group-hover:text-gray-200 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-2 py-1 border border-white text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-all cursor-default"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                  {/* Project hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                  />
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <motion.a
              href="https://github.com/davitsimonyan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-white uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="mr-3 group-hover:rotate-12 transition-transform" size={20} />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}