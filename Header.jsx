import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img
              src="https://customer-assets.emergentagent.com/job_0a5f23cb-b11a-4dd7-ad02-93360164c108/artifacts/m2p1e6il_logo.jpeg"
              alt="Wani Technology"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('courses')}
              className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('courses')}
              className="bg-cyan-600 hover:bg-cyan-700 text-white transition-colors duration-200"
            >
              Explore Courses
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-cyan-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium text-left"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection('courses')}
                className="bg-cyan-600 hover:bg-cyan-700 text-white w-full"
              >
                Explore Courses
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
