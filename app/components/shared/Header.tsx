"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useUIStore } from "@/app/lib/store";
import { usePathname } from "next/navigation";

const Header = () => {
  const { isMenuOpen, toggleMenu, setMenuOpen } = useUIStore();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Navigation links
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 backdrop-blur-md bg-background/80 border-b border-card-border"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo with signature font */}
        <Link href="/" className="group relative">
          <div className="signature-animation">
            <span className="signature-text text-2xl font-bold gradient-text">
              Sandeep
            </span>
          </div>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-blue transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-1 py-1 transition-all duration-300 font-medium ${
                  isActive ? "text-accent-purple" : "hover:text-accent-blue"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-purple"></span>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-blue transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-border glow-effect bg-card-background px-4 py-2 font-medium"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground neo-brutalist p-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-card-background border-t border-card-border"
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-display ${
                    isActive
                      ? "text-accent-purple"
                      : "text-foreground hover:text-accent-blue"
                  } transition-colors`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border bg-card-background px-4 py-2 font-medium inline-block w-fit"
            >
              Resume
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
