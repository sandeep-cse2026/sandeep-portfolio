import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; // Import both fonts
import "./globals.css";

// Import layout components
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import ClientCursorWrapper from "./components/shared/ClientCursorWrapper";

// Configure Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Define CSS variable
  weight: ["400", "500", "600", "700"], // Fixed: weights → weight
});

// Configure Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"], // Fixed: weights → weight
});

// Update Metadata for the portfolio
export const metadata: Metadata = {
  title: {
    template: "%s | Sandeep Kalla", // Title template
    default: "Sandeep Kalla | Software Developer", // Default title
  },
  description:
    "Portfolio of Sandeep Kalla, a Software Developer specializing in modern web development.",
  // Add Open Graph and other relevant meta tags later
};

// Create a function to handle scroll reveal
const scrollRevealScript = `
  function handleScrollReveal() {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * 0.8;
      if (isVisible) {
        el.classList.add('revealed');
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    handleScrollReveal();
    window.addEventListener('scroll', handleScrollReveal);
  });
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      {/* Apply font variables */}
      <body className="font-sans antialiased bg-deep-black text-light-grey">
        <script dangerouslySetInnerHTML={{ __html: scrollRevealScript }} />

        {/* Background grid effect */}
        <div className="fixed inset-0 z-[-2] opacity-[0.02]">
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:50px_50px]"></div>
        </div>

        {/* Cursor Animation Effect */}
        <ClientCursorWrapper />
        <Header />
        <main className="pt-20">
          {" "}
          {/* Add padding top to account for fixed header */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
