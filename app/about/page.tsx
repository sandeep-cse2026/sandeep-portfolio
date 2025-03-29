import { Metadata } from "next";
import TimelineSection from "../sections/about/TimelineSection";
import SkillsSection from "../sections/about/SkillsSection";
import Image from "next/image";
export const metadata: Metadata = {
  title: "About | Sandeep Kalla",
  description:
    "Learn about Sandeep Kalla&apos;s background, skills, and experience as a Software Developer.",
};
export default function AboutPage() {
  return (
    <>
      <div className="relative py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent-purple/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent-blue/5 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-card-border"></div>
            <h2 className="text-lg font-display font-medium px-4">
              MY JOURNEY
            </h2>
            <div className="h-px w-12 bg-card-border"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-16">
            <div className="md:col-span-7 reveal-on-scroll">
              <div className="neo-brutalist p-1 bg-background">
                <div className="bg-card-background p-6">
                  <div className="w-16 h-1.5 mb-6 bg-gradient-to-r from-accent-purple to-accent-blue"></div>
                  <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
                    I&apos;m a passionate Software Developer with a focus on
                    creating modern, user-friendly web applications. Currently
                    pursuing my Bachelor&apos;s degree in Computer Science, I
                    combine academic knowledge with practical experience in
                    full-stack development.
                  </p>
                  <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
                    My approach to development emphasizes clean code, intuitive
                    user experiences, and performance optimization. I enjoy
                    tackling complex problems and continuously expanding my
                    technical skills through hands-on projects and learning new
                    technologies.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <div className="p-4 bg-background">
                      <h3 className="font-display font-semibold mb-1 text-accent-purple">
                        Education
                      </h3>
                      <p className="text-foreground/70">
                        B.Tech in Computer Science
                      </p>
                    </div>
                    <div className="p-4 bg-background">
                      <h3 className="font-display font-semibold mb-1 text-accent-blue">
                        Location
                      </h3>
                      <p className="text-foreground/70">Delhi, India</p>
                    </div>
                    <div className="p-4 bg-background">
                      <h3 className="font-display font-semibold mb-1 text-accent-pink">
                        Interests
                      </h3>
                      <p className="text-foreground/70">
                        Web Development, AI, UI/UX
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="md:col-span-5 reveal-on-scroll"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="neo-brutalist p-1 bg-background h-full">
                <div className="bg-card-background h-full flex items-center justify-center relative overflow-hidden">
                  {/* Profile image */}
                  <div className="w-full h-full relative">
                    <Image
                      src="/profile.png"
                      alt="Sandeep Kalla"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority
                      style={{
                        objectPosition: "center 15%", // Adjust this value to properly position the focus on your face
                      }}
                    />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-accent-purple"></div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-accent-blue"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TimelineSection />
      <SkillsSection />
    </>
  );
}
