import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, BarChart, CheckCircle2, Play } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { courses } from '../mockData';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const foundCourse = courses.find(c => c.id === parseInt(courseId));
    setCourse(foundCourse);
  }, [courseId]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Course not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="mb-8 hover:bg-gray-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Course Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Badge className="bg-cyan-100 text-cyan-700">{course.level}</Badge>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                  {course.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Video Section */}
              <Card className="mb-8 overflow-hidden shadow-lg">
                <div className="relative aspect-video bg-gray-900">
                  <iframe
                    src={course.videoUrl}
                    title={course.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 text-cyan-600">
                    <Play className="w-5 h-5" />
                    <span className="font-semibold">Course Introduction</span>
                  </div>
                </CardContent>
              </Card>

              {/* Course Topics */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.topics.map((topic, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-lg border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Details</h3>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-cyan-600" />
                        <span className="text-gray-700 font-medium">Duration</span>
                      </div>
                      <span className="text-gray-900 font-semibold">{course.duration}</span>
                    </div>

                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                      <div className="flex items-center space-x-3">
                        <BarChart className="w-5 h-5 text-cyan-600" />
                        <span className="text-gray-700 font-medium">Level</span>
                      </div>
                      <span className="text-gray-900 font-semibold">{course.level}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                        <span className="text-gray-700 font-medium">Certificate</span>
                      </div>
                      <span className="text-gray-900 font-semibold">Yes</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => {
                      navigate('/');
                      setTimeout(() => {
                        const element = document.getElementById('contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                    className="w-full h-12 bg-cyan-600 hover:bg-cyan-700 text-white text-lg mb-4"
                  >
                    Enroll Now
                  </Button>

                  <div className="bg-cyan-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700 text-center">
                      Have questions? Contact us at{' '}
                      <a href="mailto:info@wani.llc" className="text-cyan-600 font-semibold hover:underline">
                        info@wani.llc
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetail;
