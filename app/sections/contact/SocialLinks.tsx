'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import resumeData from '@/constants/resume-data.json';

const SocialLinks = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  // Contact information from resume data
  const { contact } = resumeData;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-deep-black/80 border border-light-grey/20 p-6"
    >
      <h2 className="text-2xl font-semibold text-light-grey mb-8">Connect With Me</h2>
      
      <div className="space-y-6">
        {/* Contact Information */}
        <div className="space-y-4">
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <Mail size={20} className="text-electric-purple" />
            <a 
              href={`mailto:${contact.email}`} 
              className="text-light-grey hover:text-electric-purple transition-colors"
            >
              {contact.email}
            </a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <Phone size={20} className="text-electric-purple" />
            <a 
              href={`tel:${contact.phone}`} 
              className="text-light-grey hover:text-electric-purple transition-colors"
            >
              {contact.phone}
            </a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <MapPin size={20} className="text-electric-purple" />
            <span className="text-light-grey">{contact.location}</span>
          </motion.div>
        </div>
        
        {/* Social Media Links */}
        <div className="pt-6 border-t border-light-grey/20">
          <h3 className="text-lg font-medium text-light-grey mb-4">Find Me On</h3>
          
          <div className="flex flex-col space-y-4">
            <motion.a 
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-light-grey hover:text-electric-purple transition-colors"
              variants={itemVariants}
            >
              <Github size={20} />
              <span>GitHub</span>
            </motion.a>
            
            <motion.a 
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-light-grey hover:text-electric-purple transition-colors"
              variants={itemVariants}
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </motion.a>
          </div>
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="mt-8 pt-6 border-t border-light-grey/20"
          variants={itemVariants}
        >
          <p className="text-light-grey/80">
            Prefer a quick chat? Feel free to reach out on any platform or send me an email. 
            I'm always interested in hearing about new opportunities and projects.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SocialLinks;