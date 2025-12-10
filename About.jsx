import React from 'react';
import { Target, Lightbulb, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { aboutData } from '../mockData';

const valueIcons = {
  Excellence: Target,
  Innovation: Lightbulb,
  'Practical Learning': Rocket,
  'Student Success': Users
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-cyan-100 text-cyan-700 hover:bg-cyan-100">About Us</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {aboutData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {aboutData.description}
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-100 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {aboutData.mission}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.values.map((value, index) => {
              const IconComponent = valueIcons[value.title];
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-cyan-200"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-cyan-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
