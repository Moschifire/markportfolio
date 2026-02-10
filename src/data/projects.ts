export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  features: string[];
  isFlagship?: boolean;
  image?: string;
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
    title: "AURAÉ",
    isFlagship: true,
    description: "Aurae isn't just a storefront; it's a scalable business platform. I engineered a robust MongoDB architecture to handle complex luxury inventory, paired with a custom administrative suite that provides real-time business insights and role-based control.",
    tech: ["Next.js", "Tailwind CSS", "Mongoose", "MongoDB", "Admin Dashboard"],
    link: "https://aurae-six.vercel.app/",
    image: "/aurae-admin.png",
    features: ["Advanced Inventory & Analytics Dashboard",
      "Dynamic Luxury Product Filtering",
      "Secure Paystack Integration",
      "Role-Based Admin Access"]
  }
];