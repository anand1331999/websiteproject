import React from 'react';
import { BookOpen, TrendingUp, Award, Users } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-white relative overflow-hidden">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-cyan-500 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-blue-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white border border-cyan-200 rounded-full px-4 py-2 mb-8 shadow-sm">
            <Award className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-medium text-gray-700">Industry-Leading Technology Training</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Master Technology
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              Transform Your Career
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Learn cutting-edge technologies from industry experts. Build real-world skills in cloud computing, programming, data engineering, and quality assurance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              onClick={() => scrollToSection('courses')}
              size="lg"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Courses
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-6 text-lg transition-all duration-200"
            >
              Get in Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-lg mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-cyan-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">9+</div>
              <div className="text-sm text-gray-600">Professional Courses</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-sm text-gray-600">Practical Learning</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-lg mx-auto mb-3">
                <Users className="w-6 h-6 text-cyan-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">Expert</div>
              <div className="text-sm text-gray-600">Instructors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
