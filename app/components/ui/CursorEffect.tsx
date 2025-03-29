"use client";

import { useEffect, useRef } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiDocker,
  SiPython,
  SiVite,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { VscVscode as SiVscode } from "react-icons/vsc";
import { TbBrandCpp, TbBrandReactNative } from "react-icons/tb";
import { renderToString } from "react-dom/server";

const CursorEffect = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    // Define the tech icons to use in the animation
    const techIconComponents = [
      <SiJavascript color="#F7DF1E" />,
      <SiTypescript color="#3178C6" />,
      <SiReact color="#61DAFB" />,
      <SiNextdotjs color="#FFFFFF" />,
      <SiNodedotjs color="#339933" />,
      <SiHtml5 color="#E34F26" />,
      <SiCss3 color="#1572B6" />,
      <SiTailwindcss color="#06B6D4" />,
      <SiGit color="#F05032" />,
      <SiMongodb color="#47A248" />,
      <SiPostgresql color="#336791" />,
      <SiGraphql color="#E10098" />,
      <SiDocker color="#2496ED" />,
      <SiPython color="#3776AB" />,
      <FaJava color="#007396" />,
      <TbBrandCpp color="#00599C" />,
      <SiVscode color="#007ACC" />,
      <FaAws color="#FF9900" />,
      <TbBrandReactNative color="#61DAFB" />,
      <SiVite color="#646CFF" />,
    ];

    // Convert React icons to SVG strings
    const techIconStrings = techIconComponents.map((icon) =>
      renderToString(icon)
    );

    // Create a container for all particle divs
    const particlesContainer = document.createElement("div");
    particlesContainer.style.position = "fixed";
    particlesContainer.style.top = "0";
    particlesContainer.style.left = "0";
    particlesContainer.style.width = "100%";
    particlesContainer.style.height = "100%";
    particlesContainer.style.pointerEvents = "none";
    particlesContainer.style.zIndex = "999";
    document.body.appendChild(particlesContainer);

    // Dynamically import p5 only on the client side
    import("p5").then((p5Module) => {
      const p5 = p5Module.default;

      // Create sketch
      const sketch = (p: {
        setup: () => void;
        createCanvas: (arg0: number, arg1: number) => any;
        frameRate: (arg0: number) => void;
        clear: () => void;
        draw: () => void;
        lerp: (arg0: number, arg1: any, arg2: number) => number;
        mouseX: any;
        mouseY: any;
        random: (arg0: number, arg1: number | undefined) => number;
        windowResized: () => void;
        resizeCanvas: (arg0: number, arg1: number) => void;
      }) => {
        // Array to hold particle objects
        const particles: any[] = [];

        // Mouse position values with better smoothing
        let mouseX = 0;
        let mouseY = 0;
        // Previous mouse positions for velocity calculation
        let pmouseX = 0;
        let pmouseY = 0;
        // Track distance moved for spacing icons
        let distanceSinceLastParticle = 0;
        // Minimum distance between particles
        const minDistanceBetweenParticles = 40; // Minimum pixels between new particles

        // Settings for cursor effect
        const maxParticles = 30;
        const smoothingFactor = 0.3;

        // Size range for icons
        const minSize = 30;
        const maxSize = 45;

        p.setup = () => {
          // Create canvas that covers the entire window
          const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
          canvas.style("position", "fixed");
          canvas.style("top", "0");
          canvas.style("left", "0");
          canvas.style("pointer-events", "none");
          canvas.style("z-index", "998"); // Below the particles container
          p.frameRate(60);
          p.clear();
        };

        p.draw = () => {
          // Clear canvas with transparency for trail effect
          p.clear();

          // Update mouse position with enhanced smoothing
          mouseX = p.lerp(mouseX, p.mouseX, smoothingFactor);
          mouseY = p.lerp(mouseY, p.mouseY, smoothingFactor);

          // Calculate mouse velocity
          const mouseVelX = mouseX - pmouseX;
          const mouseVelY = mouseY - pmouseY;
          const mouseMoveDistance = Math.sqrt(
            mouseVelX * mouseVelX + mouseVelY * mouseVelY
          );

          // Accumulate distance moved
          distanceSinceLastParticle += mouseMoveDistance;

          // Create particles based on mouse movement and distance threshold
          if (
            mouseMoveDistance > 3 &&
            distanceSinceLastParticle >= minDistanceBetweenParticles && // Only spawn when enough distance covered
            particles.length < maxParticles
          ) {
            // Reset distance counter
            distanceSinceLastParticle = 0;

            // Add some randomization to position to reduce direct overlapping
            const offsetX = p.random(-10, 10);
            const offsetY = p.random(-10, 10);

            // Choose a random tech icon
            const iconIndex = Math.floor(p.random(0, techIconStrings.length));
            const icon = techIconStrings[iconIndex];

            // Create particle with tech icon - smoother animation settings
            const particle = {
              position: {
                x: mouseX + offsetX,
                y: mouseY + offsetY,
              },
              velocity: {
                // Add some spread to the initial velocity
                x: p.random(-2, 2) + mouseVelX * 0.03,
                y: p.random(-2, 2) + mouseVelY * 0.03,
              },
              icon: icon,
              size: p.random(minSize, maxSize),
              rotation: p.random(0, Math.PI * 2),
              rotationSpeed: p.random(-0.03, 0.03),
              lifespan: 255,
              maxLife: p.random(80, 130),
              div: null,
            };

            // Create div for this particle
            const div = document.createElement("div");
            div.style.position = "absolute";
            div.style.left = `${particle.position.x}px`;
            div.style.top = `${particle.position.y}px`;
            div.style.transform = `translate(-50%, -50%) rotate(${
              particle.rotation
            }rad) scale(${particle.size / 24})`;
            div.style.opacity = "1";
            div.style.pointerEvents = "none";
            div.style.transition = "opacity 0.1s ease-out";
            div.innerHTML = icon;

            particlesContainer.appendChild(div);
            particle.div = div;

            particles.push(particle);
          }

          // Update and draw particles
          for (let i = particles.length - 1; i >= 0; i--) {
            const particle = particles[i];

            // Update position based on velocity
            particle.position.x += particle.velocity.x;
            particle.position.y += particle.velocity.y;

            // Apply friction - increased for smoother deceleration
            particle.velocity.x *= 0.98;
            particle.velocity.y *= 0.98;

            // Update rotation
            particle.rotation += particle.rotationSpeed;

            // Reduce lifespan
            particle.lifespan -= 255 / particle.maxLife;

            // Update div if it exists
            if (particle.div) {
              const opacity = particle.lifespan / 255;
              particle.div.style.left = `${particle.position.x}px`;
              particle.div.style.top = `${particle.position.y}px`;
              particle.div.style.transform = `translate(-50%, -50%) rotate(${
                particle.rotation
              }rad) scale(${particle.size / 24})`;
              particle.div.style.opacity = opacity.toString();
            }

            // Remove particles that have faded out
            if (particle.lifespan <= 0) {
              if (particle.div) {
                particle.div.remove();
              }
              particles.splice(i, 1);
            }
          }

          // Save current mouse position for next frame
          pmouseX = mouseX;
          pmouseY = mouseY;
        };

        // Handle window resize
        p.windowResized = () => {
          p.resizeCanvas(window.innerWidth, window.innerHeight);
        };
      };

      // Initialize p5 instance
      const p5Instance = new p5(sketch, containerRef.current);

      // Return a cleanup function
      return () => {
        p5Instance.remove();
        particlesContainer.remove();
      };
    });

    // Clean up function
    return () => {
      if (particlesContainer) {
        particlesContainer.remove();
      }
    };
  }, []);

  return <div ref={containerRef} />;
};

export default CursorEffect;
