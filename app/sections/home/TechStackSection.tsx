"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import resumeData from "@/constants/resume-data.json";

// Import icons from react-icons library
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiShadcnui,
  SiGit,
  SiGithub,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGraphql,
  SiDocker,
  SiAmazon,
  SiFirebase,
  SiRedux,
  SiJest,
  SiJenkins,
  SiExpress,
  SiNestjs,
  SiFigma,
  SiPython,
  SiKubernetes,
  SiVercel,
  SiNetlify,
  SiBootstrap,
  SiSass,
  SiJquery,
  SiPostman,
} from "react-icons/si";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaUserSecret,
  FaMobileAlt,
  FaLaptopCode,
  FaBrain,
} from "react-icons/fa";
import { TbApi, TbBrandReactNative, TbBrandCpp } from "react-icons/tb";
import { AiFillThunderbolt } from "react-icons/ai";
import { VscVscode as SiVisualstudiocode } from "react-icons/vsc";
import { GrJava as SiJava } from "react-icons/gr";

// Tech Stack icon mapping
const techIcons = {
  "C++": <TbBrandCpp className="text-[#00599C]" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  React: <SiReact className="text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <SiNodedotjs className="text-[#339933]" />,
  HTML: <SiHtml5 className="text-[#E34F26]" />,
  CSS: <SiCss3 className="text-[#1572B6]" />,
  Tailwind: <SiTailwindcss className="text-[#06B6D4]" />,
  ShadCn: <SiShadcnui />,
  Git: <SiGit className="text-[#F05032]" />,
  GitHub: <SiGithub />,
  MongoDB: <SiMongodb className="text-[#47A248]" />,
  SQL: <SiPostgresql className="text-[#336791]" />,
  MySQL: <SiMysql className="text-[#4479A1]" />,
  "REST API": <TbApi />,
  GraphQL: <SiGraphql className="text-[#E10098]" />,
  Docker: <SiDocker className="text-[#2496ED]" />,
  AWS: <SiAmazon className="text-[#FF9900]" />,
  Firebase: <SiFirebase className="text-[#FFCA28]" />,
  Redux: <SiRedux className="text-[#764ABC]" />,
  Jest: <SiJest className="text-[#C21325]" />,
  "CI/CD": <SiJenkins className="text-[#D24939]" />,
  Express: <SiExpress />,
  NestJS: <SiNestjs className="text-[#E0234E]" />,
  Python: <SiPython className="text-[#3776AB]" />,
  Java: <SiJava className="text-[#007396]" />,
  "VS Code": <SiVisualstudiocode className="text-[#007ACC]" />,
  Figma: <SiFigma className="text-[#F24E1E]" />,
  Kubernetes: <SiKubernetes className="text-[#326CE5]" />,
  Vercel: <SiVercel />,
  Netlify: <SiNetlify className="text-[#00C7B7]" />,
  "Frontend Development": <FaLaptopCode className="text-[#61DAFB]" />,
  "Backend Development": <FaServer className="text-[#339933]" />,
  "Database Design": <FaDatabase className="text-[#336791]" />,
  "API Integration": <AiFillThunderbolt className="text-[#FFCA28]" />,
  Bootstrap: <SiBootstrap className="text-[#7952B3]" />,
  SASS: <SiSass className="text-[#CC6699]" />,
  jQuery: <SiJquery className="text-[#0769AD]" />,
  "Problem Solving": <FaBrain className="text-[#8A2BE2]" />,
  "Mobile Development": <FaMobileAlt className="text-[#61DAFB]" />,
  "React Native": <TbBrandReactNative className="text-[#61DAFB]" />,
  Security: <FaUserSecret className="text-[#333333]" />,
  DevOps: <FaTools className="text-[#2496ED]" />,
  Postman: <SiPostman className="text-[#FF6C37]" />,
};

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
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

  // Group skills by category
  const skillCategories = [
    {
      title: "Languages & Core",
      items: resumeData.skills.programming_languages,
      accentColor: "from-accent-purple to-accent-blue",
      borderColor: "border-accent-purple",
    },
    {
      title: "Frameworks & Libraries",
      items: resumeData.skills.frameworks_libraries,
      accentColor: "from-accent-blue to-accent-pink",
      borderColor: "border-accent-blue",
    },
    {
      title: "Tools & Infrastructure",
      items: resumeData.skills.tools_technologies,
      accentColor: "from-accent-pink to-accent-purple",
      borderColor: "border-accent-pink",
    },
    {
      title: "Development Skills",
      items: resumeData.skills.development_skills,
      accentColor: "from-accent-purple to-accent-blue",
      borderColor: "border-accent-purple",
    },
  ];

  // Helper function to get icon for a skill
  const getIcon = (skill: string) => {
    // Exact match first
    if (techIcons[skill as keyof typeof techIcons]) {
      return techIcons[skill as keyof typeof techIcons];
    }

    // Try partial match (case insensitive)
    const iconKey = Object.keys(techIcons).find((key) =>
      skill.toLowerCase().includes(key.toLowerCase())
    );

    return iconKey ? (
      techIcons[iconKey as keyof typeof techIcons]
    ) : (
      <FaCode className="text-foreground" />
    );
  };

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-card-background z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent-purple/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent-blue/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-card-border"></div>
            <h2 className="text-lg font-display font-medium px-4">
              MY TOOLKIT
            </h2>
            <div className="h-px w-12 bg-card-border"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-6">
            Tech <span className="gradient-text">Stack</span>
          </h2>

          <p className="text-foreground/70 max-w-2xl mx-auto text-center text-lg">
            A curated collection of technologies and tools I&apos;m proficient
            with, used to build modern and scalable applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="tilt-card"
            >
              <div className="h-full neo-brutalist bg-background p-1">
                <div className="h-full p-6 bg-card-background">
                  <div
                    className={`w-12 h-1.5 mb-4 bg-gradient-to-r ${category.accentColor}`}
                  ></div>

                  <h3 className="text-xl font-display font-semibold mb-6">
                    {category.title}
                  </h3>

                  <ul className="space-y-4">
                    {category.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center group">
                        <span className="mr-3 text-xl opacity-80 group-hover:opacity-100 transition-opacity">
                          {getIcon(skill)}
                        </span>
                        <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                          {skill}
                        </span>
                        <span className="ml-auto w-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-blue group-hover:w-8 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
