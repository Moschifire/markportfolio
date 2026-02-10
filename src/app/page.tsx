import ProjectCard from "../components/ProjectCard";
import FlagshipCard from "../components/FlagshipCard";
import { projects } from "../data/projects";

export default function Home() {
  const flagship = projects.find(p => p.isFlagship);
  const otherProjects = projects.filter(p => !p.isFlagship);

  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="h-[70vh] flex flex-col justify-center max-w-6xl mx-auto px-6">
        <h1 className="text-7xl font-bold tracking-tighter mb-4">Engineering <br/> Excellence.</h1>
        <p className="text-zinc-500 text-2xl max-w-xl font-light">
          Full-stack solutions for security, luxury, and industry.
        </p>
      </section>

      {/* FLAGSHIP SHOWCASE */}
      {flagship && <FlagshipCard project={flagship} />}

      {/* Grid for the other 2 projects */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <h3 className="text-zinc-600 uppercase text-xs tracking-widest mb-12 font-bold">More Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}