import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Include pages dir if you use it
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Standard components
    './app/**/*.{js,ts,jsx,tsx,mdx}', // App router components/pages
    './sections/**/*.{js,ts,jsx,tsx,mdx}', // Custom sections directory
  ],
  theme: {
    extend: {
      colors: {
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
        'card-background': 'var(--card-background)',
        'card-border': 'var(--card-border)',
        'accent-purple': 'var(--accent-purple)',
        'accent-blue': 'var(--accent-blue)',
        'accent-pink': 'var(--accent-pink)',
        
        // Legacy colors for compatibility
        'deep-black': '#0A0A0A',
        'electric-purple': '#A020F0',
        'electric-purple-light': '#B24CF0',
        'electric-purple-dark': '#8010D0',
        'electric-purple-100': '#F0E6FA',
        'electric-purple-200': '#E0CCF5',
        'electric-purple-300': '#C799EB',
        'electric-purple-400': '#B266E5',
        'electric-purple-500': '#A020F0',
        'electric-purple-600': '#8010D0',
        'electric-purple-700': '#6008A0',
        'electric-purple-800': '#400670',
        'electric-purple-900': '#200340',
        'light-grey': '#EDEDED',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Default sans-serif font
        display: ['Space_Grotesk', 'sans-serif'], // Display headings font
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ], // Standard monospace stack
      },
      // Neo-Brutalist specific styles
      boxShadow: {
        'neo-brutal-light': '4px 4px 0px rgba(237, 237, 237, 0.8)', // Using light-grey shadow
        'neo-brutal-purple': '4px 4px 0px rgba(160, 32, 240, 0.8)', // Using electric-purple shadow
        'neo-brutal-purple-glow': '0 0 15px rgba(160, 32, 240, 0.5), 4px 4px 0px rgba(160, 32, 240, 0.8)', // Glowing purple shadow
        'neo-brutal-dark': '4px 4px 0px rgba(10, 10, 10, 0.8)', // Using deep-black shadow
        'glow': 'var(--hover-glow)', // Glow effect from CSS variables
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #A020F0 0%, #8010D0 100%)',
        'gradient-purple-light': 'linear-gradient(135deg, #B24CF0 0%, #A020F0 100%)',
        'gradient-purple-dark': 'linear-gradient(135deg, #8010D0 0%, #6008A0 100%)',
        'grid-white': 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1h98v98H1V1z\' stroke=\'%23FFFFFF\' stroke-width=\'.5\' fill=\'none\' stroke-opacity=\'.1\'/%3E%3C/svg%3E")',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(160, 32, 240, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(160, 32, 240, 0.8)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      }
    },
  },
  plugins: [], // Add any Tailwind plugins here if needed later
}

export default config
