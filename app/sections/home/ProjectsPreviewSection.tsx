"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import resumeData from "@/constants/resume-data.json";
import ProjectCard from "@/app/components/ui/ProjectCard";

const ProjectsPreviewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  // Get featured projects for preview (3 is a good number for showcase)
  const previewProjects = resumeData.projects.slice(0, 3);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_25%,rgba(68,68,68,.2)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.2)_75%)] bg-[length:8px_8px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-card-border"></div>
            <h2 className="text-lg font-display font-medium px-4">MY WORK</h2>
            <div className="h-px w-12 bg-card-border"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-6">
            Featured <span className="gradient-text-pink">Projects</span>
          </h2>

          <p className="text-foreground/70 max-w-2xl mx-auto text-center text-lg">
            Check out some of my recent work and personal projects that showcase
            my skills and interests
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {previewProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard project={project} index={index} isPreview={true} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link href="/projects" className="inline-block">
            <div className="gradient-border glow-effect bg-card-background px-8 py-4 font-display font-medium flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreviewSection;
