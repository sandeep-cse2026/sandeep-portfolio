'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/app/components/ui/button';
import { Send } from 'lucide-react';

// Define form schema with zod
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Initialize react-hook-form with zod validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    // In a real application, you would send this data to your backend
    // For now, we'll just simulate a submission with a timeout
    try {
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form after successful submission
      reset();
      
      // Show success message (in a real app, you might use a toast notification)
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      animate="visible"
      className="bg-deep-black/80 border border-light-grey/20 p-6"
    >
      <h2 className="text-2xl font-semibold text-light-grey mb-6">Send a Message</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-light-grey">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className="w-full p-3 bg-deep-black border border-light-grey/30 text-light-grey focus:border-electric-purple outline-none transition-colors"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-light-grey">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full p-3 bg-deep-black border border-light-grey/30 text-light-grey focus:border-electric-purple outline-none transition-colors"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="block text-light-grey">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            className="w-full p-3 bg-deep-black border border-light-grey/30 text-light-grey focus:border-electric-purple outline-none transition-colors resize-none"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2"
        >
          {isSubmitting ? 'Sending...' : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;