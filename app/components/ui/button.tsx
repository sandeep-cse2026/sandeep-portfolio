import * as React from "react";
import { Slot } from "@radix-ui/react-slot"; // Useful for 'asChild' prop pattern
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/app/lib/utils"; // Adjust import path if needed

// Define button variants using CVA
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-purple text-light-grey border border-electric-purple-400 hover:bg-gradient-purple-light hover:border-electric-purple-300 shadow-neo-brutal-purple hover:shadow-neo-brutal-purple-glow transition-all duration-300", // Modern gradient with glow effect
        destructive:
          "bg-red-600 text-light-grey hover:bg-red-700 border border-red-700 shadow-[2px_2px_0px_rgba(237,237,237,0.8)]",
        outline:
          "border-2 border-electric-purple bg-transparent text-electric-purple hover:bg-electric-purple/10 hover:shadow-neo-brutal-purple transition-all duration-300",
        secondary:
          "bg-deep-black text-electric-purple border border-electric-purple hover:bg-electric-purple/10 shadow-neo-brutal-purple transition-all duration-300",
        ghost: "hover:bg-electric-purple/10 hover:text-electric-purple transition-all duration-300",
        link: "text-electric-purple underline-offset-4 hover:underline hover:text-electric-purple-300 transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Define Button props extending standard HTMLButtonElement attributes and CVA variants
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean; // Prop to render as a child component (e.g., Link)
}

// Create the Button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"; // Use Slot if asChild is true
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button"; // Set display name for debugging

export { Button, buttonVariants }; // Export component and variants
