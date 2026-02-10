export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "semafc",
    title: "SEMAFC",
    description: "Professional landing page for a fire safety outfit specializing in procurement and maintenance.",
    tech: ["React.js", "Tailwind CSS"],
    link: "https://semafc.co",
    features: ["Responsive Design", "Service Showcasing", "Lead Generation Focus"]
  },
  {
    id: "tutor-app",
    title: "Cognitive Test App",
    description: "A high-integrity testing platform for tutoring applicants with built-in anti-cheating mechanisms.",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://cognitive-test-sand.vercel.app/",
    features: ["Tab-switch detection", "Fullscreen enforcement", "Automatic score deduction for violations"]
  },
  {
    id: "aurae",
    title: "Aurae",
    description: "A premium e-commerce experience for luxury goods with a robust administrative backbone.",
    tech: ["Next.js","Tailwind CSS", "Mongoose", "MongoDB", "Admin Dashboard"],
    link: "https://aurae-six.vercel.app/",
    features: ["Inventory Management", "Secure Checkout", "Business Analytics Dashboard"]
  }
];