import React, { useState } from 'react';
import { Mail, Linkedin, Globe, Send, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { useToast } from '../hooks/use-toast';
import { contactInfo } from '../mockData';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - will be replaced with backend API
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-cyan-100 text-cyan-700 hover:bg-cyan-100">Get in Touch</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Start Your Learning Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help you choose the right course for your career goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              <Card className="hover:shadow-md transition-shadow border-2 hover:border-cyan-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-cyan-600 hover:text-cyan-700 transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow border-2 hover:border-cyan-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">LinkedIn</h4>
                      <a
                        href={contactInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 hover:text-cyan-700 transition-colors"
                      >
                        Wani Technology
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow border-2 hover:border-cyan-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Website</h4>
                      <a
                        href={`https://${contactInfo.domain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 hover:text-cyan-700 transition-colors"
                      >
                        {contactInfo.domain}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Why Choose Us */}
            <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-100">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Why Choose Wani Technology?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Expert instructors with industry experience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Hands-on practical learning approach</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Flexible learning schedules</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Career support and guidance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-lg border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-sm font-semibold text-gray-900 mb-2">
                      Interested Course
                    </label>
                    <Input
                      id="course"
                      name="course"
                      type="text"
                      value={formData.course}
                      onChange={handleChange}
                      placeholder="e.g., Python, Azure, AWS"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your learning goals..."
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-cyan-600 hover:bg-cyan-700 text-white text-lg transition-colors"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
