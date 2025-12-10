import React from 'react';
import { Mail, Linkedin, Globe, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
import { contactInfo } from '../mockData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="https://customer-assets.emergentagent.com/job_0a5f23cb-b11a-4dd7-ad02-93360164c108/artifacts/m2p1e6il_logo.jpeg"
                alt="Wani Technology"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering professionals with cutting-edge technology education and training.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('courses')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-lg font-bold mb-4">Popular Courses</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Microsoft Azure</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Python Programming</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Amazon AWS</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Databricks</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://${contactInfo.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  <span>{contactInfo.domain}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Wani Technology. All rights reserved.
            </p>
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-cyan-400 hover:bg-gray-800"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
