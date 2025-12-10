import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cloud, Code2, Database, CheckCircle, Zap, Coffee, Sparkles, Layers, Server, ArrowRight, Clock, BarChart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { courses } from '../mockData';

const iconMap = {
  Cloud: Cloud,
  Code2: Code2,
  Database: Database,
  CheckCircle: CheckCircle,
  Zap: Zap,
  Coffee: Coffee,
  Sparkles: Sparkles,
  Layers: Layers,
  Server: Server
};

const Courses = () => {
  const navigate = useNavigate();

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
    window.scrollTo(0, 0);
  };

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-cyan-100 text-cyan-700 hover:bg-cyan-100">Our Courses</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Expand Your Tech Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive selection of technology courses designed to boost your career
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const IconComponent = iconMap[course.icon];
            return (
              <Card
                key={course.id}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-cyan-200"
                onClick={() => handleCourseClick(course.id)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <IconComponent className="w-7 h-7 text-cyan-600" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-cyan-600 transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BarChart className="w-4 h-4" />
                      <span>{course.level}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors"
                  >
                    Watch Course
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
