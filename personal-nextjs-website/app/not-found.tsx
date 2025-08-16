"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl md:text-9xl font-bold mb-4">404</h1>
          <div className="border-4 border-white p-8 mb-8 inline-block">
            <p className="text-2xl uppercase tracking-wider mb-2">Page Not Found</p>
            <p className="text-gray-400">The page you're looking for doesn't exist</p>
          </div>
          <div>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border-2 border-white uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              <Home className="mr-2" size={20} />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}