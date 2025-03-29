"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Cpu, Globe } from "lucide-react";
import { motion, useInView } from "framer-motion";
import resumeData from "@/constants/resume-data.json";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden py-16 md:py-20"
    >
      {/* Dynamic background grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(rgba(160, 32, 240, 0.15) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          backgroundPosition: `${mousePosition.x / 50}px ${
            mousePosition.y / 50
          }px`,
        }}
      ></div>

      {/* Animated gradient orbs */}
      <div
        className="absolute top-1/4 -left-10 w-80 h-80 rounded-full bg-gradient-to-r from-accent-purple/20 to-accent-blue/10 blur-3xl opacity-50 animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-gradient-to-r from-accent-pink/10 to-accent-purple/20 blur-3xl opacity-40 animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Tech icons floating */}
      <div
        className="absolute top-32 left-[15%] opacity-20 animate-float"
        style={{ animationDelay: "0.7s" }}
      >
        <Code size={32} className="text-accent-blue" />
      </div>
      <div
        className="absolute bottom-32 right-[20%] opacity-20 animate-float"
        style={{ animationDelay: "1.2s" }}
      >
        <Globe size={40} className="text-accent-purple" />
      </div>
      <div
        className="absolute top-[40%] right-[15%] opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <Cpu size={36} className="text-accent-pink" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            className="lg:col-span-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className="mb-4 inline-block neo-brutalist py-1 px-3"
            >
              <span className="font-display font-medium">
                Hello there, I&apos;m
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 tracking-tight"
            >
              <span className="glitch-text" data-text={resumeData.name}>
                {resumeData.name}
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-display font-medium mb-6"
            >
              <span className="inline-block bg-gradient-to-r from-accent-purple via-accent-blue to-accent-pink bg-clip-text text-transparent">
                {resumeData.title}
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/80 mb-8 max-w-2xl"
            >
              I create modern, responsive, and user-friendly web experiences
              with a focus on performance and accessibility. Crafting digital
              solutions that blend{" "}
              <span className="text-accent-purple font-medium">creativity</span>{" "}
              with
              <span className="text-accent-blue font-medium">
                {" "}
                technical excellence
              </span>
              .
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/projects" className="inline-block">
                <div className="neo-brutalist px-6 py-3 hover:text-accent-purple transition-colors flex items-center font-medium">
                  Explore My Work
                  <ArrowRight size={18} className="ml-2" />
                </div>
              </Link>
              <Link href="/contact" className="inline-block">
                <div className="gradient-border glow-effect px-6 py-3 bg-card-background text-foreground font-medium">
                  Get In Touch
                </div>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center gap-4"
            >
              <div className="h-px w-12 bg-card-border"></div>
              <p className="text-foreground/60 font-medium">
                Scroll down to see my projects
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-4 hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-0 neo-brutalist">
                <div className="w-full h-full relative bg-card-background flex items-center justify-center overflow-hidden">
                  {/* Custom positioned profile image */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/profile.png"
                      alt="Sandeep Kalla"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{
                        objectPosition: "center 15%", // Adjust this value to position the focus on your face
                      }}
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-accent-purple"></div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-accent-blue"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
