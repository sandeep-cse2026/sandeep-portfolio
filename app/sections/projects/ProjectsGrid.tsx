"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import resumeData from "@/constants/resume-data.json";
import ProjectCard from "@/app/components/ui/ProjectCard";

const ProjectsGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Helper function to get a category from project name (or index as fallback)
  const getProjectCategory = (projectName: string, index: number) => {
    const categories = ["Web App", "Full Stack", "Frontend", "API", "UI/UX"];
    // Use project name to determine category or fallback to index-based selection
    if (projectName.includes("AI")) return "AI";
    if (projectName.includes("File")) return "File Transfer";
    if (projectName.includes("Portfolio")) return "Personal";
    if (projectName.includes("E-commerce")) return "E-commerce";
    if (projectName.includes("Task")) return "Productivity";
    if (projectName.includes("Anime") || projectName.includes("Ani"))
      return "Entertainment";
    if (projectName.includes("Turbo") || projectName.includes("Code"))
      return "Developer Tool";

    // Fallback to a category from the list
    return categories[index % categories.length];
  };

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {resumeData.projects.map((project, index) => {
          const projectCategory = getProjectCategory(project.name, index);

          return (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard
                project={project}
                index={index}
                category={projectCategory}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ProjectsGrid;
