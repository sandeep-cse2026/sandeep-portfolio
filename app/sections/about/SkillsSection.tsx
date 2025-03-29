"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import resumeData from "@/constants/resume-data.json";

// Tech stack icons - comprehensive icon imports
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostgresql,
  SiFigma,
  SiTrello,
  SiJira,
  SiGraphql,
  SiRedux,
  SiAmazon,
  SiVercel,
  SiMysql,
  SiJest,
  SiJenkins,
  SiNestjs,
  SiKubernetes,
  SiNetlify,
  SiBootstrap,
  SiSass,
  SiJquery,
  SiPostman,
  SiDjango,
  SiFlask,
  SiAngular,
  SiVuedotjs,
  SiSvelte,
  SiShadcnui,
} from "react-icons/si";
import { DiVisualstudio as SiVisualstudio } from "react-icons/di";
import { VscVscode as SiVisualstudiocode } from "react-icons/vsc";

import {
  FaJava,
  FaCode,
  FaServer,
  FaTools,
  FaBrain,
  FaPalette,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaBookReader,
  FaLaptopCode,
  FaUserSecret,
} from "react-icons/fa";

import {
  TbApi,
  TbBrandCpp,
  TbBrandReactNative,
  TbBrandThreejs,
  TbWorldWww,
} from "react-icons/tb";
import { IoLogoElectron as TbBrandElectron } from "react-icons/io5";

import { AiFillThunderbolt } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import { DiScrum } from "react-icons/di";

// Map skill names to their icons
const skillIconMap = {
  // Programming Languages

  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
  "C++": <TbBrandCpp className="text-[#00599C]" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  Python: <SiPython className="text-[#3776AB]" />,
  Java: <FaJava className="text-[#007396]" />,
  HTML: <SiHtml5 className="text-[#E34F26]" />,
  CSS: <SiCss3 className="text-[#1572B6]" />,

  // Frameworks & Libraries
  React: <SiReact className="text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  ShadCn: <SiShadcnui />,
  "Node.js": <SiNodedotjs className="text-[#339933]" />,
  Express: <SiExpress className="text-white" />,
  Redux: <SiRedux className="text-[#764ABC]" />,
  GraphQL: <SiGraphql className="text-[#E10098]" />,
  "Three.js": <TbBrandThreejs className="text-[#000000]" />,
  Electron: <TbBrandElectron className="text-[#47848F]" />,
  Angular: <SiAngular className="text-[#DD0031]" />,
  "Vue.js": <SiVuedotjs className="text-[#4FC08D]" />,
  Svelte: <SiSvelte className="text-[#FF3E00]" />,
  Django: <SiDjango className="text-[#092E20]" />,
  Flask: <SiFlask className="text-[#000000]" />,
  Bootstrap: <SiBootstrap className="text-[#7952B3]" />,
  SASS: <SiSass className="text-[#CC6699]" />,
  jQuery: <SiJquery className="text-[#0769AD]" />,

  // Development Skills
  "Frontend Development": <FaLaptopCode className="text-[#61DAFB]" />,
  "Backend Development": <FaServer className="text-[#339933]" />,
  "Full Stack Development": <FaCode className="text-[#E34F26]" />,
  "Responsive Web Design": <FaMobileAlt className="text-[#FF3E00]" />,
  "Database Design": <FaDatabase className="text-[#336791]" />,
  "API Integration": <TbApi className="text-[#FFCA28]" />,
  "Component-Based UI Design": <FaPalette className="text-[#F24E1E]" />,
  "Machine Learning": <FaRobot className="text-[#3776AB]" />,
  "Problem Solving": <FaBrain className="text-[#8A2BE2]" />,
  "Web Development": <TbWorldWww className="text-[#61DAFB]" />,
  "Mobile Development": <FaMobileAlt className="text-[#61DAFB]" />,
  "React Native": <TbBrandReactNative className="text-[#61DAFB]" />,
  Security: <FaUserSecret className="text-[#333333]" />,
  DevOps: <FaTools className="text-[#2496ED]" />,
  "Artificial Intelligence": (
    <GiArtificialIntelligence className="text-[#3776AB]" />
  ),
  "Agile/Scrum": <DiScrum className="text-[#6DB33F]" />,

  // Tools & Technologies
  Git: <SiGit className="text-[#F05032]" />,
  GitHub: <SiGithub className="text-white" />,
  "VS Code": <SiVisualstudiocode className="text-[#007ACC]" />,
  "Visual Studio": <SiVisualstudio className="text-[#5C2D91]" />,
  MongoDB: <SiMongodb className="text-[#47A248]" />,
  Firebase: <SiFirebase className="text-[#FFCA28]" />,
  Docker: <SiDocker className="text-[#2496ED]" />,
  PostgreSQL: <SiPostgresql className="text-[#336791]" />,
  MySQL: <SiMysql className="text-[#4479A1]" />,
  Figma: <SiFigma className="text-[#F24E1E]" />,
  Trello: <SiTrello className="text-[#0079BF]" />,
  Jira: <SiJira className="text-[#0052CC]" />,
  AWS: <SiAmazon className="text-[#FF9900]" />,
  "Cloud Computing": <FaCloud className="text-[#FF9900]" />,
  Vercel: <SiVercel className="text-white" />,
  Netlify: <SiNetlify className="text-[#00C7B7]" />,
  Jest: <SiJest className="text-[#C21325]" />,
  "CI/CD": <SiJenkins className="text-[#D24939]" />,
  NestJS: <SiNestjs className="text-[#E0234E]" />,
  Kubernetes: <SiKubernetes className="text-[#326CE5]" />,
  Postman: <SiPostman className="text-[#FF6C37]" />,
};

// Default icon for skills without a specific icon
const defaultIcons = {
  programming_languages: <FaCode className="text-accent-purple" />,
  frameworks_libraries: <FaBookReader className="text-accent-blue" />,
  development_skills: <FaBrain className="text-accent-pink" />,
  tools_technologies: <FaTools className="text-accent-blue" />,
};

const SkillsSection = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Trigger animations when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // State for tracking hovered skill
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Skill categories with icons
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: resumeData.skills.programming_languages,
      icon: defaultIcons.programming_languages,
      color: "accent-purple",
    },
    {
      title: "Frameworks & Libraries",
      skills: resumeData.skills.frameworks_libraries,
      icon: defaultIcons.frameworks_libraries,
      color: "accent-blue",
    },
    {
      title: "Development Skills",
      skills: resumeData.skills.development_skills,
      icon: defaultIcons.development_skills,
      color: "accent-pink",
    },
    {
      title: "Tools & Technologies",
      skills: resumeData.skills.tools_technologies,
      icon: defaultIcons.tools_technologies,
      color: "accent-blue",
    },
  ];

  // Function to get the icon for a skill
  const getSkillIcon = (skill: string) => {
    // Exact match first
    if (skillIconMap[skill as keyof typeof skillIconMap]) {
      return skillIconMap[skill as keyof typeof skillIconMap];
    }

    // Try partial match (case insensitive)
    const iconKey = Object.keys(skillIconMap).find((key) =>
      skill.toLowerCase().includes(key.toLowerCase())
    );

    return iconKey ? (
      skillIconMap[iconKey as keyof typeof skillIconMap]
    ) : (
      <FaCode />
    );
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent-purple/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent-blue/5 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px w-12 bg-card-border"></div>
          <h2 className="text-lg font-display font-medium px-4">
            MY EXPERTISE
          </h2>
          <div className="h-px w-12 bg-card-border"></div>
        </div>
        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="neo-brutalist p-1 bg-background"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 10px 30px -15px var(--${category.color})`,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-card-background p-6 h-full relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] -z-10"></div>

                <div
                  className={`flex items-center gap-3 mb-6 text-${category.color}`}
                >
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-display font-bold">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex flex-col items-center gap-2 group"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      <div className="w-12 h-12 rounded-md flex items-center justify-center bg-card-border/20 group-hover:bg-gradient-to-br group-hover:from-accent-purple/20 group-hover:to-accent-blue/20 transition-all duration-300">
                        <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                          {getSkillIcon(skill)}
                        </span>
                      </div>
                      <span className="text-sm text-center text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                        {skill}
                      </span>

                      {/* Skill tooltip */}
                      {hoveredSkill === skill && (
                        <motion.div
                          className="absolute bg-card-background border border-card-border px-3 py-2 text-xs rounded-md shadow-lg z-20 w-max max-w-[200px] text-center"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            bottom: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            marginBottom: "8px",
                          }}
                        >
                          {skill}
                          {/* Tooltip arrow */}
                          <div className="absolute w-2 h-2 bg-card-background border-r border-b border-card-border transform rotate-45 -bottom-1 left-1/2 -ml-1"></div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interests Section */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={itemVariants}
        >
          <div className="neo-brutalist p-1 bg-background">
            <div className="bg-card-background p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-purple/5 rounded-full -mr-12 -mt-12"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent-blue/5 rounded-full -ml-8 -mb-8"></div>

              <h3 className="text-2xl font-display font-bold mb-8 text-center">
                <span className="gradient-text">Areas of Interest</span>
              </h3>

              <div className="flex flex-wrap justify-center gap-4">
                {resumeData.interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-3 border border-card-border hover:border-accent-purple/50 hover:shadow-[0_0_15px_rgba(160,32,240,0.15)] transition-all duration-300 relative"
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      rotate: Math.random() < 0.5 ? -1 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <span className="relative z-10 font-medium">
                      {interest}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
