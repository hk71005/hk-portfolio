"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-slate-50 font-sans selection:bg-cyan-500/30">
      
      {/* 🧭 Floating Glassmorphism Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0b]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-xl tracking-tighter">HK.</span>
          <div className="flex gap-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="/resume.pdf" target="_blank" className="text-cyan-400 border border-cyan-400/30 px-4 py-1.5 rounded-full hover:bg-cyan-400/10 transition">Resume</a>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        
        {/* 🚀 Hero Section */}
        <motion.header 
          initial="hidden" animate="visible" variants={fadeUp}
          className="text-center py-20"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">G. HARIKRISHNAN</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light">
            Building scalable full stack web applications using React, Python, and modern APIs.
          </p>
          <div className="flex justify-center gap-4 mt-10">
            <a href="#projects" className="bg-cyan-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 transition hover:scale-105">View Work</a>
            <a href="https://github.com/hk71005" target="_blank" className="border border-white/20 px-8 py-3 rounded-full font-semibold hover:bg-white/5 transition">GitHub</a>
          </div>
        </motion.header>

        {/* 👤 About Section */}
        <motion.section 
          id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="py-20 border-t border-white/5 flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1 space-y-6 text-slate-300 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
            <p>I am a final year Computer Science and Business Systems student at MNM Jain Engineering College with a strong interest in frontend and full stack development.</p>
            <p>My projects include AI-powered applications such as object detection systems and language translation platforms. I enjoy solving real-world problems through technology.</p>
          </div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/10">
            {/* Make sure your image is named profile.png in the public folder! */}
            <Image src="/profile.png" alt="Harikrishnan" fill className="object-cover" />
          </div>
        </motion.section>

        {/* ⚡ Skills Section */}
        <motion.section 
          id="skills" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="py-20 border-t border-white/5"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Technical Arsenal</h2>
          <div className="flex flex-wrap gap-4">
            {['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'Python', 'Flask', 'REST APIs', 'Git/GitHub', 'Figma', 'TCP/IP & Networking'].map(skill => (
              <span key={skill} className="bg-[#161617] border border-white/10 px-5 py-2.5 rounded-full text-sm font-medium hover:border-cyan-400/50 hover:text-cyan-400 transition cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        {/* 🍱 Projects Bento Grid */}
        <motion.section 
          id="projects" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="py-20 border-t border-white/5"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Project 1 */}
            <div className="bg-gradient-to-br from-[#161617] to-[#1a1a1c] border border-white/5 p-8 rounded-3xl group hover:border-cyan-500/30 transition-all">
              <h3 className="text-2xl font-bold mb-3">BidIt – AI Marketplace</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">Full stack resale marketplace built with React and Flask allowing users to list products and receive bids with AI powered object categorization.</p>
              <div className="flex gap-3">
                <span className="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full">React</span>
                <span className="text-xs bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full">Flask</span>
                <span className="text-xs bg-white/5 px-3 py-1 rounded-full">YOLO AI</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#161617] border border-white/5 p-8 rounded-3xl hover:border-white/20 transition-all">
              <h3 className="text-2xl font-bold mb-3">AI Language Translator</h3>
              <p className="text-slate-400 mb-6 text-sm">Web application supporting translation across 100+ languages using Azure Translator API with speech features.</p>
              <div className="flex gap-3">
                <span className="text-xs bg-white/5 px-3 py-1 rounded-full">JavaScript</span>
                <span className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full">Azure API</span>
              </div>
            </div>

          </div>
        </motion.section>

        {/* 💼 Experience Section */}
        <motion.section 
          id="experience" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="py-20 border-t border-white/5"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
          <div className="space-y-6">
            <div className="bg-[#161617] border border-white/5 p-8 rounded-3xl flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div>
                <h3 className="text-xl font-bold">AI Virtual Intern</h3>
                <p className="text-cyan-400 text-sm mt-1">CodeAlpha • Remote</p>
              </div>
              <p className="text-slate-400 text-sm md:text-right max-w-md">Developed AI applications using Python including YOLO object detection systems and built preprocessing pipelines.</p>
            </div>
            
            <div className="bg-[#161617] border border-white/5 p-8 rounded-3xl flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div>
                <h3 className="text-xl font-bold">Network Administrator Intern</h3>
                <p className="text-cyan-400 text-sm mt-1">Network Geek • Vadapalani</p>
              </div>
              <p className="text-slate-400 text-sm md:text-right max-w-md">Worked with core networking concepts including NAT, DNS, DHCP, and configured remote access protocols.</p>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="pt-20 pb-10 border-t border-white/5 text-center text-slate-500 text-sm">
          <p>© 2026 G. Harikrishnan. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://linkedin.com/in/harikrishnan-710-g/" target="_blank" className="hover:text-cyan-400">LinkedIn</a>
            <a href="https://github.com/hk71005" target="_blank" className="hover:text-cyan-400">GitHub</a>
            <a href="mailto:gharikrishnan710@gmail.com" className="hover:text-cyan-400">Email</a>
          </div>
        </footer>

      </div>
    </main>
  );
}