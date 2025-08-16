"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this to an API endpoint
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: <Github size={24} />, href: "https://github.com/davitsimonyan", label: "GitHub", color: "hover:bg-gray-800" },
    { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/davitsimonyan", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: <Mail size={24} />, href: "mailto:davit.simonyan@example.com", label: "Email", color: "hover:bg-red-600" },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 uppercase">
            <span className="border-b-4 border-white pb-2">Get In Touch</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border-2 border-white focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] focus:translate-x-[-2px] focus:translate-y-[-2px] transition-all duration-300 placeholder-gray-600"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border-2 border-white focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] focus:translate-x-[-2px] focus:translate-y-[-2px] transition-all duration-300 placeholder-gray-600"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black border-2 border-white focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] focus:translate-x-[-2px] focus:translate-y-[-2px] transition-all duration-300 resize-none placeholder-gray-600"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-black text-white border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all duration-300 uppercase tracking-wider font-bold flex items-center justify-center group"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="mr-3 group-hover:rotate-12 transition-transform" size={20} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 uppercase">Let's Connect</h3>
                <p className="text-gray-300 mb-8">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin size={20} />
                  <span className="text-gray-300">Yerevan, Armenia</span>
                </div>
                <motion.div 
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 5 }}
                >
                  <Mail size={20} className="group-hover:rotate-12 transition-transform" />
                  <a href="mailto:davit.simonyan@example.com" className="text-gray-300 hover:text-white transition-colors">
                    davit.simonyan@example.com
                  </a>
                </motion.div>
                <div className="flex items-center space-x-4">
                  <Phone size={20} />
                  <span className="text-gray-300">Available for remote work</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 uppercase">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative p-3 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 group overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <span className="relative z-10">{link.icon}</span>
                      <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.span
                        className="absolute inset-0 flex items-center justify-center text-black"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {link.icon}
                      </motion.span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div 
                className="p-6 border-2 border-white bg-black relative overflow-hidden group cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <p className="text-sm uppercase tracking-wider mb-2 relative z-10">Response Time</p>
                <p className="text-2xl font-bold relative z-10">{"< 24 hours"}</p>
                <p className="text-gray-400 mt-2 relative z-10">I typically respond within one business day</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}