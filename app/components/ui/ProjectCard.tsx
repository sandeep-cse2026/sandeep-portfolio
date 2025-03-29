"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Tag,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Define the Project type based on your resume-data.json structure
export type Project = {
  name: string;
  duration: string;
  location?: string;
  description: string;
  technologies?: string[];
  features?: string[];
  challenges?: string[];
  url?: string;
  github?: string;
  image?: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
  isPreview?: boolean;
  category?: string;
};

const ProjectCard = ({
  project,
  isPreview = false, // Flag to indicate if this card is used in the preview section
  category,
}: ProjectCardProps) => {
  // State for expanding/collapsing details
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative h-full neo-brutalist bg-background p-1 group">
      <div className="h-full bg-card-background overflow-hidden flex flex-col">
        {/* Project Image */}
        <div className="relative w-full h-64 bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              fill
              className="object-cover opacity-90 hover:opacity-100 transition-opacity"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-6xl font-bold opacity-10">
                {project.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        <div className="p-6 flex-grow flex flex-col">
          {/* Different header based on preview vs full page */}
          {isPreview ? (
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {project.technologies?.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs font-medium py-1 px-2 bg-card-border text-foreground/70 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          ) : (
            /* Project Category Label (for full project page) */
            <div className="mb-4 flex items-center">
              <span className="bg-card-border py-1 px-2 text-xs font-medium text-foreground/70">
                {category || "Project"}
              </span>
              <div className="h-px flex-grow bg-card-border ml-3"></div>
            </div>
          )}

          {/* Project Title */}
          <h3
            className={`font-display font-semibold mb-2 ${
              isPreview ? "text-xl" : "text-2xl"
            }`}
          >
            {project.name}
          </h3>

          {/* Duration and Location (only shown in full project page) */}
          {!isPreview && project.location && (
            <div className="mb-4 flex items-center text-sm text-foreground/50">
              <span>{project.duration}</span>
              <span className="mx-2">•</span>
              <span>{project.location}</span>
            </div>
          )}

          {/* Project Description */}
          <p
            className={`text-foreground/70 mb-4 ${
              isPreview ? "line-clamp-3" : ""
            }`}
          >
            {project.description}
          </p>

          {/* Technologies list for full page view */}
          {!isPreview &&
            project.technologies &&
            project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-flex items-center text-xs bg-background px-2.5 py-1 rounded-sm"
                  >
                    <Tag size={12} className="mr-1 text-accent-purple" />
                    {tech}
                  </span>
                ))}
              </div>
            )}

          {/* Toggle button for project details */}
          {(project.features?.length || project.challenges?.length) && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`${
                isPreview
                  ? "text-xs text-accent-blue hover:text-accent-purple transition-colors mb-3 self-start"
                  : "flex items-center text-sm text-accent-blue hover:text-accent-purple transition-colors mb-4 self-start"
              }`}
            >
              {isPreview ? (
                isExpanded ? (
                  "Hide Details"
                ) : (
                  "Show Details"
                )
              ) : (
                <>
                  {isExpanded ? "Hide Details " : "Show Details "}
                  {isExpanded ? (
                    <ChevronUp size={16} className="ml-1" />
                  ) : (
                    <ChevronDown size={16} className="ml-1" />
                  )}
                </>
              )}
            </button>
          )}

          {/* Expandable details section */}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={
                isPreview ? "mb-4" : "mb-6 bg-card-border/10 p-4 rounded-sm"
              }
            >
              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle
                      size={isPreview ? 14 : 16}
                      className="text-accent-blue"
                    />
                    <h4
                      className={`${
                        isPreview ? "text-sm" : "text-md"
                      } font-semibold`}
                    >
                      Key Features
                    </h4>
                  </div>
                  <ul
                    className={`${
                      isPreview ? "text-xs" : "text-sm"
                    } text-foreground/70 pl-5 ${isPreview ? "" : "space-y-1"}`}
                  >
                    {isPreview
                      ? project.features.slice(0, 2).map((feature, i) => (
                          <li key={i} className="list-disc mb-0.5">
                            {feature}
                          </li>
                        ))
                      : project.features.map((feature, i) => (
                          <li key={i} className="list-disc">
                            {feature}
                          </li>
                        ))}
                    {isPreview && project.features.length > 2 && (
                      <li className="text-xs text-accent-purple">
                        +{project.features.length - 2} more
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <AlertCircle
                      size={isPreview ? 14 : 16}
                      className="text-accent-pink"
                    />
                    <h4
                      className={`${
                        isPreview ? "text-sm" : "text-md"
                      } font-semibold`}
                    >
                      Challenges Solved
                    </h4>
                  </div>
                  <ul
                    className={`${
                      isPreview ? "text-xs" : "text-sm"
                    } text-foreground/70 pl-5 ${isPreview ? "" : "space-y-1"}`}
                  >
                    {isPreview
                      ? project.challenges.slice(0, 2).map((challenge, i) => (
                          <li key={i} className="list-disc mb-0.5">
                            {challenge}
                          </li>
                        ))
                      : project.challenges.map((challenge, i) => (
                          <li key={i} className="list-disc">
                            {challenge}
                          </li>
                        ))}
                    {isPreview && project.challenges.length > 2 && (
                      <li className="text-xs text-accent-purple">
                        +{project.challenges.length - 2} more
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </motion.div>
          )}

          {/* Footer section */}
          <div
            className={`mt-auto pt-3 flex items-center justify-between border-t border-card-border/30 ${
              isPreview ? "" : "mt-auto"
            }`}
          >
            {isPreview ? (
              <>
                {/* Simple footer for preview cards */}
                <div className="text-xs text-foreground/50">
                  {project.duration}
                </div>
                <div className="flex gap-3">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-accent-purple transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-accent-purple transition-colors"
                      aria-label="View source code"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </>
            ) : (
              /* Footer for full project page */
              <div className="flex gap-4 w-full">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 group-hover:text-accent-purple transition-colors text-sm font-medium"
                  >
                    <Github size={16} className="mr-2" />
                    Source Code
                  </a>
                )}

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-border glow-effect bg-card-background flex items-center px-4 py-2 text-sm font-medium"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Hover effect gradient line */}
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent-purple to-accent-pink group-hover:w-full transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
