import { useState, useEffect } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    } border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path 
                d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 15.5C2 15.5 2 20.5 8 20.5C14 20.5 17 8 17 8Z" 
                fill="url(#leafGradient)"
              />
              <defs>
                <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(248, 91%, 68%)" />
                  <stop offset="100%" stopColor="hsl(271, 91%, 65%)" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-2xl font-bold text-gray-900">AllergenAI</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-blue-violet-600 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-gray-600 hover:text-blue-violet-600 transition-colors"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-600 hover:text-blue-violet-600 transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="text-gray-600 hover:text-blue-violet-600 transition-colors"
            >
              Download
            </button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-gray-600 w-6 h-6" />
            ) : (
              <Menu className="text-gray-600 w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-gray-100"
          >
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-blue-violet-600 transition-colors text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-gray-600 hover:text-blue-violet-600 transition-colors text-left"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-600 hover:text-blue-violet-600 transition-colors text-left"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('download')}
                className="text-gray-600 hover:text-blue-violet-600 transition-colors text-left"
              >
                Download
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
