import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Courses from '../components/Courses';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Courses />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
