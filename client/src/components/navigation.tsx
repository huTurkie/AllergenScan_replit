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
            <div className="w-8 h-8 bg-gradient-to-br from-blue-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Leaf className="text-white w-4 h-4" />
            </div>
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
