"use client"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image"; // Import Next.js Image component
import { Project } from "../data/projects";

export default function FlagshipCard({ project }: { project: Project }) {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="relative w-full py-24 border-y border-zinc-900 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* Left: Content (Same as before) */}
                <div>
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-orange-500 font-mono text-sm tracking-tighter uppercase mb-4 block"
                    >
                        Flagship Project
                    </motion.span>

                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                        {project.title}
                    </h2>

                    <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="grid grid-cols-1 gap-3 mb-10">
                        {project.features.map((f, i) => (
                            <div key={i} className="flex items-center gap-3 text-zinc-300">
                                <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                                {f}
                            </div>
                        ))}
                    </div>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all group"
                    >
                        View Live Project
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Right: The Actual Screenshot */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="relative group"
                >
                    {/* Decorative glow behind the image */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

                    <div className="relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
                        {project.image ? (
                            <Image
                                src={project.image}
                                alt="Admin Panel Screenshot"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                            />
                        ) : (
                            <div className="h-64 flex items-center justify-center text-zinc-500">
                                Screenshot Placeholder
                            </div>
                        )}
                    </div>

                    {/* Caption for the image */}
                    <p className="mt-4 text-center text-sm text-zinc-500 italic">
                        Visual: Custom Administrative Dashboard for Inventory Management
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
}