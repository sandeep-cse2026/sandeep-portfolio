import { Metadata } from "next";
import ProjectsGrid from "../sections/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects | Sandeep Kalla",
  description:
    "Explore Sandeep Kalla's portfolio of web development and software projects.",
};

export default function ProjectsPage() {
  return (
    <div className="relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_25%,rgba(68,68,68,.2)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.2)_75%)] bg-[length:8px_8px]"></div>
      </div>
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent-purple/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-accent-blue/5 blur-3xl"></div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px w-12 bg-card-border"></div>
          <h2 className="text-lg font-display font-medium px-4">MY WORK</h2>
          <div className="h-px w-12 bg-card-border"></div>
        </div>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-6">
          My <span className="gradient-text">Projects</span>
        </h1>

        <p className="text-foreground/70 text-lg max-w-3xl mx-auto mb-16 text-center">
          Here's a collection of my work that demonstrates my skills and passion
          for creating modern, responsive web applications. Each project
          represents a unique challenge and opportunity to learn and grow as a
          developer.
        </p>

        <ProjectsGrid />
      </div>
    </div>
  );
}
