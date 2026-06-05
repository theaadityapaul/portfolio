import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Spatial Connect",
    tech: "Next.js, Three.js, WebRTC, Socket.io",
    description: "Real-time, multi-user 3D spatial networking application delivering hardware-accelerated WebGL graphics.",
    span: "md:col-span-7",
  },
  {
    title: "Smart Inventory",
    tech: "FastAPI, scikit-learn, PostgreSQL",
    description: "Full-stack system with ML models to predict future sales demand based on historical data.",
    span: "md:col-span-5",
  },
  {
    title: "Health Monitor",
    tech: "Flask, Swift, PostgreSQL",
    description: "System to track real-time vital signs with a watchOS wearable app for alerts.",
    span: "md:col-span-5",
  },
  {
    title: "ProcWatch",
    tech: "Python, Streamlit, psutil",
    description: "Intelligent system monitoring dashboard with Focus Mode to optimize high-priority app performance.",
    span: "md:col-span-7",
  }
];

export const SectionWorks = () => {
  return (
    <section id="work" className="bg-bg py-16 md:py-32 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-5xl md:text-7xl text-text-primary tracking-tight">
              Featured <span className="font-display italic">projects</span>
            </h2>
            <p className="text-muted mt-4 max-w-md">
              A selection of scalable architectures, from real-time 3D twins to ML-driven backend systems.
            </p>
          </div>
          <a href="https://github.com/theaadityapaul" target="_blank" rel="noreferrer" className="hidden md:inline-flex relative group rounded-full text-sm px-6 py-3 border border-stroke bg-surface text-text-primary hover:border-transparent transition-all overflow-hidden items-center gap-2">
            <span className="absolute inset-0 rounded-full border border-transparent group-hover:accent-gradient opacity-0 group-hover:opacity-100 z-0 transition-opacity" style={{ padding: '1px', margin: '-1px', maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />
            <span className="relative z-10">View Github</span>
            <span className="relative z-10">→</span>
          </a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <div key={i} className={`group relative aspect-square md:aspect-auto md:min-h-[400px] bg-surface border border-stroke rounded-3xl overflow-hidden ${project.span}`}>
              {/* Subtle Halftone Background */}
              <div className="absolute inset-0 opacity-20 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
              
              <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/80 transition-all duration-500 backdrop-blur-none group-hover:backdrop-blur-md z-10 flex flex-col justify-end p-8">
                <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="inline-flex items-center rounded-full bg-white px-4 py-2 mb-4 relative">
                    <span className="absolute inset-[-2px] rounded-full accent-gradient animate-gradient-shift -z-10" />
                    <span className="text-bg text-xs font-medium uppercase tracking-wider">{project.tech}</span>
                  </div>
                  <h3 className="text-3xl font-display italic text-text-primary mb-2">{project.title}</h3>
                  <p className="text-muted text-sm">{project.description}</p>
                </div>
              </div>

              {/* Default State Text (Visible before hover) */}
              <div className="absolute top-8 left-8 z-0 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-2xl text-muted/50 font-display italic">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};