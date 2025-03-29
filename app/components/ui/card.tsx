import * as React from "react";

import { cn } from "@/app/lib/utils"; // Adjust import path if needed

// Base Card component
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-none border border-light-grey bg-deep-black text-light-grey shadow-[4px_4px_0px_rgba(237,237,237,0.8)]", // Neo-brutalist: no rounding, border, bg, text, shadow
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

// Card Header component
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)} // Standard padding
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

// Card Title component
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight", // Adjusted size for card title
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

// Card Description component
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-light-grey/80", className)} // Slightly muted description text
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// Card Content component
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} /> // Padding, remove top padding if header exists
));
CardContent.displayName = "CardContent";

// Card Footer component
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)} // Padding, remove top padding
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
