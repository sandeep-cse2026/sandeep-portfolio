"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import resumeData from "@/constants/resume-data.json";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaCode,
} from "react-icons/fa";

const TimelineSection = () => {
  // Track which experience items are expanded
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  // State to check if we're in browser environment
  const [isBrowser, setIsBrowser] = useState(false);

  // Animation controls with higher threshold for better timing
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Create separate controls for each timeline section
  const educationControls = useAnimation();
  const experienceControls = useAnimation();
  const certificationControls = useAnimation();

  // Create separate refs for each section
  const [educationRef, educationInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [experienceRef, experienceInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [certificationRef, certificationInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Check if we're in browser environment
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // Trigger animations when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Trigger animations for individual sections
  useEffect(() => {
    if (educationInView) {
      educationControls.start("visible");
    }
  }, [educationControls, educationInView]);

  useEffect(() => {
    if (experienceInView) {
      experienceControls.start("visible");
    }
  }, [experienceControls, experienceInView]);

  useEffect(() => {
    if (certificationInView) {
      certificationControls.start("visible");
    }
  }, [certificationControls, certificationInView]);

  // Animation variants with improved timing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "spring", bounce: 0.2 },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  // Dot variants for marker on timeline
  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.5, delay: 0.3, type: "spring", stiffness: 300 },
    },
  };

  // Card hover animation
  const cardHoverAnimation = {
    rest: {
      scale: 1,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  // Toggle expanded state for an item
  const toggleExpand = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Handle responsive visibility safely (without window reference during SSR)
  const getResponsiveClasses = (index: number) => {
    if (!isBrowser) return "";

    const isExpanded = expandedItems.includes(index);
    if (isExpanded) return "";

    return "hidden md:block";
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent-blue/5 blur-3xl"></div>
      <div className="absolute bottom-60 right-20 w-60 h-60 rounded-full bg-accent-pink/5 blur-3xl"></div>
      <div className="absolute top-60 right-10 w-40 h-40 rounded-full bg-accent-purple/5 blur-3xl"></div>

      {/* Grid pattern for visual texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px w-12 bg-card-border"></div>
          <h2 className="text-lg font-display font-medium px-4">MY JOURNEY</h2>
          <div className="h-px w-12 bg-card-border"></div>
        </div>

        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional <span className="gradient-text">Timeline</span>
        </motion.h2>

        <div ref={ref} className="max-w-4xl mx-auto relative">
          {/* Education Timeline */}
          <motion.div
            ref={educationRef}
            className="mb-20"
            initial="hidden"
            animate={educationControls}
            variants={containerVariants}
          >
            {/* Section Header with improved styling */}
            <motion.div
              className="flex items-center mb-12 neo-brutalist p-4 w-fit"
              variants={itemVariants}
            >
              <div className="mr-4 text-3xl bg-gradient-to-r from-accent-purple to-accent-blue inline-block text-transparent bg-clip-text">
                <FaGraduationCap />
              </div>
              <h3 className="text-2xl font-display font-bold">Education</h3>
              <div className="ml-4 h-[2px] w-20 bg-gradient-to-r from-accent-purple to-transparent"></div>
            </motion.div>

            <div className="relative">
              {/* Education timeline container */}
              <div className="relative pl-12 pb-12">
                {/* Fixed timeline line with proper height and position */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 h-full bg-gradient-to-b from-accent-purple to-accent-blue"
                  initial="hidden"
                  animate={educationInView ? "visible" : "hidden"}
                  variants={lineVariants}
                  style={{ transformOrigin: "top" }}
                ></motion.div>

                <motion.div className="relative mb-12" variants={itemVariants}>
                  {/* Fixed dot position in education timeline */}
                  <motion.div
                    className="absolute w-7 h-7 bg-card-background border-2 border-accent-purple rounded-full -left-[14px] top-6 flex items-center justify-center glow-effect z-10"
                    variants={dotVariants}
                  >
                    <motion.div
                      className="w-3 h-3 bg-accent-purple rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }}
                    ></motion.div>
                  </motion.div>

                  {/* Education card with hover animation */}
                  <motion.div
                    className="gradient-border p-6 bg-card-background shadow-lg cursor-pointer"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={cardHoverAnimation}
                    onClick={() => toggleExpand(-1)}
                  >
                    <h4 className="text-xl font-display font-semibold">
                      {resumeData.education.degree}
                    </h4>
                    <p className="text-foreground/70 mt-1">
                      {resumeData.education.institution}
                    </p>
                    <p className="text-sm text-accent-purple mt-2 font-medium">
                      {resumeData.education.duration}
                    </p>

                    {/* Divider */}
                    <div className="w-1/3 h-px bg-gradient-to-r from-accent-purple/30 to-transparent my-3"></div>

                    <p className="mt-2 text-foreground/80">
                      {resumeData.education.description ||
                        "Focusing on computer science fundamentals, algorithms, data structures, and modern web technologies."}
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Experience Timeline with improved animations */}
          <motion.div
            ref={experienceRef}
            initial="hidden"
            animate={experienceControls}
            variants={containerVariants}
            className="mb-20"
          >
            <motion.div
              className="flex items-center mb-12 neo-brutalist p-4 w-fit"
              variants={itemVariants}
            >
              <div className="mr-4 text-3xl bg-gradient-to-r from-accent-blue to-accent-pink inline-block text-transparent bg-clip-text">
                <FaBriefcase />
              </div>
              <h3 className="text-2xl font-display font-bold">Experience</h3>
              <div className="ml-4 h-[2px] w-20 bg-gradient-to-r from-accent-blue to-transparent"></div>
            </motion.div>

            {/* Timeline items container with proper positioning */}
            <div className="relative">
              <div className="relative pl-12">
                {/* Main vertical timeline line that's always present */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 h-full bg-gradient-to-b from-accent-blue to-accent-pink/50"
                  initial="hidden"
                  animate={experienceInView ? "visible" : "hidden"}
                  variants={lineVariants}
                  style={{ transformOrigin: "top" }}
                ></motion.div>

                {/* Experience items */}
                {resumeData.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pb-16 last:pb-0"
                    variants={itemVariants}
                  >
                    {/* Timeline marker dot - fixed positioning to be aligned with card header */}
                    <motion.div
                      className="absolute w-7 h-7 bg-card-background border-2 border-accent-blue rounded-full -left-[14px] top-6 flex items-center justify-center z-10"
                      variants={dotVariants}
                    >
                      <motion.div
                        className="w-3 h-3 bg-accent-blue rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: index * 0.2,
                        }}
                      ></motion.div>
                    </motion.div>

                    {/* Experience card with hover and click animation */}
                    <motion.div
                      className="gradient-border p-6 bg-card-background shadow-lg cursor-pointer"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      variants={cardHoverAnimation}
                      onClick={() => toggleExpand(index)}
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                        <h4 className="text-xl font-display font-semibold">
                          {exp.role}
                        </h4>
                        <span className="px-3 py-1 bg-accent-blue/10 text-accent-blue text-sm font-medium rounded-full">
                          {exp.duration}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 items-center mt-1">
                        <p className="text-foreground/70 font-medium">
                          {exp.company}
                        </p>
                        <span className="text-xs px-2 py-0.5 bg-card-border/30 rounded-full">
                          {exp.location}
                        </span>
                      </div>

                      {/* Divider */}
                      <div className="w-1/3 h-px bg-gradient-to-r from-accent-blue/30 to-transparent my-3"></div>

                      <p className="mt-2 text-foreground/80">
                        {exp.description}
                      </p>

                      {/* Animated line that appears when card is clicked */}
                      {expandedItems.includes(index) && (
                        <motion.div
                          className="w-full h-px bg-gradient-to-r from-accent-blue to-transparent my-4"
                          initial={{ scaleX: 0, originX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        ></motion.div>
                      )}

                      {/* Technologies used with improved visual */}
                      {exp.technologies && (
                        <motion.div
                          className={`mt-4 p-3 bg-card-border/10 rounded-sm border-l-2 border-accent-blue/40 ${getResponsiveClasses(
                            index
                          )}`}
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{
                            opacity:
                              expandedItems.includes(index) ||
                              (isBrowser && window.innerWidth > 768)
                                ? 1
                                : 0,
                            height:
                              expandedItems.includes(index) ||
                              (isBrowser && window.innerWidth > 768)
                                ? "auto"
                                : 0,
                            marginTop:
                              expandedItems.includes(index) ||
                              (isBrowser && window.innerWidth > 768)
                                ? 16
                                : 0,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <FaCode className="text-accent-blue text-sm" />
                            <p className="text-xs font-medium text-foreground/70">
                              TECHNOLOGIES
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="text-xs px-2 py-1 bg-card-background border border-card-border/50 text-foreground/80 rounded-sm hover:border-accent-blue/30 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Courses & Certifications with improved visual design */}
          <motion.div
            ref={certificationRef}
            className="mt-10"
            initial="hidden"
            animate={certificationControls}
            variants={containerVariants}
          >
            <motion.div
              className="flex items-center mb-12 neo-brutalist p-4 w-fit"
              variants={itemVariants}
            >
              <div className="mr-4 text-3xl bg-gradient-to-r from-accent-pink to-accent-purple inline-block text-transparent bg-clip-text">
                <FaCertificate />
              </div>
              <h3 className="text-2xl font-display font-bold">
                Certifications
              </h3>
              <div className="ml-4 h-[2px] w-20 bg-gradient-to-r from-accent-pink to-transparent"></div>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.courses.map((course, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
                    transition: {
                      duration: 0.3,
                      ease: "easeInOut",
                    },
                  }}
                >
                  {/* Diamond accent shape */}
                  <div className="absolute w-3 h-3 bg-accent-pink rotate-45 -left-1.5 top-1/2 -translate-y-1/2 z-10"></div>

                  {/* Accent line */}
                  <div className="absolute h-[2px] w-4 bg-accent-pink left-[-20px] top-1/2 -translate-y-1/2"></div>

                  <div className="p-5 bg-card-background border border-card-border shadow-sm hover:border-accent-pink/40 transition-colors relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                      <FaCertificate className="w-full h-full" />
                    </div>

                    <p className="text-foreground/90 font-medium">{course}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
