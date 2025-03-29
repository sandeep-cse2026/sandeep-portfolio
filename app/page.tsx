import { Metadata } from "next";
import Image from "next/image";
import HeroSection from "./sections/home/HeroSection";
import TechStackSection from "./sections/home/TechStackSection";
import ProjectsPreviewSection from "./sections/home/ProjectsPreviewSection";

export const metadata: Metadata = {
  title: "Sandeep Kalla | Software Developer",
  description: "Portfolio of Sandeep Kalla, a Software Developer specializing in modern web development.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <ProjectsPreviewSection />
    </>
  );
}

// This Footer component is not being used since we have a Footer component in the shared components folder
// Removing this component to avoid confusion and errors
