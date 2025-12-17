import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, DollarSign, Clock, Route, Recycle, CheckCircle, TreePine } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { companyInfo, benefits, stats } from '../mockData';

const Home = () => {
  const iconMap = {
    Leaf,
    Shield,
    DollarSign,
    Clock,
    Route,
    Recycle,
    CheckCircle,
    TreePine
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900"
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 animate-fade-in">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-6xl font-bold text-emerald-500">X</span>
              <span className="text-6xl font-bold text-white">PLASTIX</span>
            </div>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
              {companyInfo.tagline}
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transforming Waste Into<br />
            <span className="text-emerald-400">Sustainable Infrastructure</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            {companyInfo.mission}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg transition-all hover:shadow-xl hover:scale-105"
              >
                View Our Projects
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg transition-all hover:shadow-xl"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = iconMap[stat.icon];
              return (
                <div key={index} className="text-center">
                  <Icon className="mx-auto mb-3 text-white" size={40} />
                  <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-white/90 text-sm md:text-base">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-emerald-500">Plastix</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our innovative technology delivers superior roads while protecting the environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = iconMap[benefit.icon];
              return (
                <Card
                  key={benefit.id}
                  className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-emerald-600" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{benefit.description}</p>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-emerald-600 font-semibold text-sm">{benefit.stats}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519043916581-33ecfdba3b1c)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-emerald-900/90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Sustainable Roads?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in creating a cleaner, stronger India. Let's discuss how Plastix can transform your next infrastructure project.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-6 text-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
