"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-slate-50 p-6 md:p-24">
      {/* 🚀 Hero Section with Entrance Animation */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-6xl font-bold tracking-tighter bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          G. HARIKRISHNAN
        </h1>
        <p className="mt-4 text-xl text-slate-400">Full Stack Developer & AI Enthusiast</p>
      </motion.header>

      {/* 🍱 Modern Bento Grid for Projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Featured Project (Large) */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 bg-[#161617] border border-white/10 p-8 rounded-3xl backdrop-blur-md"
        >
          <span className="text-cyan-400 text-sm font-mono">Featured Project</span>
          <h3 className="text-3xl font-bold mt-2">BidIt AI Marketplace</h3>
          <p className="text-slate-400 mt-4">Full-stack resale platform with YOLO object detection.</p>
          <div className="flex gap-2 mt-6">
            <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-xs">React</span>
            <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs">Flask</span>
          </div>
        </motion.div>

        {/* Small Project 1 */}
        <motion.div whileHover={{ y: -5 }} className="bg-[#161617] border border-white/10 p-8 rounded-3xl">
          <h3 className="text-xl font-bold">AI Translator</h3>
          <p className="text-slate-400 text-sm mt-2">100+ languages with Azure API.</p>
        </motion.div>

        {/* Small Project 2 */}
        <motion.div whileHover={{ y: -5 }} className="bg-[#161617] border border-white/10 p-8 rounded-3xl">
          <h3 className="text-xl font-bold">Network Admin</h3>
          <p className="text-slate-400 text-sm mt-2">Cisco networking & subnetting logic.</p>
        </motion.div>

        {/* Skills Bento Box */}
        <motion.div className="md:col-span-2 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {['React', 'Next.js', 'Python', 'Flask', 'OpenCV', 'Figma'].map(skill => (
              <span key={skill} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm hover:bg-white/10 transition">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
} 