"use client"
import { contactInfo } from "../data/projects";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-zinc-950 border-t border-zinc-900 pt-24 pb-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">Ready to build something <span className="text-orange-500 text-italic font-serif italic">extraordinary?</span></h2>
                        <p className="text-zinc-400 text-lg max-w-sm">
                            Currently open to new opportunities and interesting collaborations.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 justify-end items-start md:items-end">
                        <a
                            href={`mailto:${contactInfo.email}`}
                            className="text-2xl md:text-4xl font-light text-zinc-300 hover:text-orange-500 transition-colors flex items-center gap-2 group"
                        >
                            {contactInfo.email}
                            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 gap-6">
                    <p className="text-zinc-500 text-sm">
                        © {new Date().getFullYear()} {contactInfo.name}. All rights reserved.
                    </p>

                    <div className="flex gap-8 text-zinc-400">
                        <a href={contactInfo.github} className="hover:text-white flex items-center gap-2 text-sm">
                            <Github size={16} /> GitHub
                        </a>
                        <a href={contactInfo.linkedin} className="hover:text-white flex items-center gap-2 text-sm">
                            <Linkedin size={16} /> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}