"use client";
import React from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Code,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/sandeep-kalla",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/sandeep-kalla",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://twitter.com/sandeep_kalla",
      label: "Twitter",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:sandeep.cse2026@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-card-background border-t border-card-border pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Info Section */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-display text-2xl font-bold">
                SK<span className="text-accent-purple">.</span>
              </span>
            </Link>
            <p className="text-foreground/80 max-w-md">
              Creating modern, responsive, and user-friendly web experiences
              with cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="font-display text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-foreground/80 hover:text-accent-purple transition-colors flex items-center group"
                  >
                    <span className="w-0 h-px bg-accent-purple transition-all duration-300 mr-0 group-hover:w-2 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="md:col-span-4">
            <h3 className="font-display text-lg font-semibold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glow-effect gradient-border bg-card-background transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/contact"
                className="neo-brutalist inline-flex items-center px-4 py-2 text-sm font-medium"
              >
                Get in Touch <ExternalLink size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-4 border-t border-card-border text-center text-sm text-foreground/60">
          <p>© {currentYear} Sandeep Kalla. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Crafted with <span className="text-accent-pink">♥</span> using
            Next.js, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
