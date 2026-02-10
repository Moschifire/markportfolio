"use client"
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { contactInfo } from "../data/projects";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
        >
            <div className="flex items-center justify-between w-full max-w-6xl px-6 py-3 border bg-black/50 backdrop-blur-md border-zinc-800 rounded-full">
                <span className="text-sm font-bold tracking-tighter uppercase tracking-widest text-white">
                    {contactInfo.name}
                </span>

                <div className="flex items-center gap-6 text-zinc-400">
                    <a href={contactInfo.github} target="_blank" className="hover:text-white transition-colors">
                        <Github size={18} />
                    </a>
                    <a href={contactInfo.linkedin} target="_blank" className="hover:text-white transition-colors">
                        <Linkedin size={18} />
                    </a>
                    <a href={`mailto:${contactInfo.email}`} className="px-4 py-1.5 text-xs font-medium bg-white text-black rounded-full hover:bg-orange-500 hover:text-white transition-all">
                        Let&apos;s Talk
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}