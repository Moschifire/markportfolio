"use client"
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-orange-500/50 transition-colors"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <a href={project.link} className="text-zinc-400 hover:text-orange-500">
          <ExternalLink size={20} />
        </a>
      </div>
      
      <p className="text-zinc-400 mb-6">{project.description}</p>
      
      <div className="space-y-2 mb-6">
        {project.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-zinc-300">
            <CheckCircle2 size={14} className="text-orange-500" />
            {feature}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="px-3 py-1 text-xs font-medium bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}