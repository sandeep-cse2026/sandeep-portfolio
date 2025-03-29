import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class values into a single string, resolving Tailwind CSS conflicts.
 * @param inputs - Class values to combine (strings, arrays, objects).
 * @returns A string of combined and merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
