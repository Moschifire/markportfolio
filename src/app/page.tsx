import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500/30">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
            Crafting Digital <br /> Experiences.
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Full-stack developer focused on building secure testing environments, 
            high-end e-commerce, and professional business landing pages.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-sm uppercase tracking-widest text-orange-500 font-semibold mb-12">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-900 text-zinc-500 text-sm">
        © {new Date().getFullYear()} Mark Oladeinde. Built with Next.js.
      </footer>
    </main>
  );
}