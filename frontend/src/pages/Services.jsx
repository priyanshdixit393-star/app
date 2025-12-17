import React from 'react';
import { Construction, Lightbulb, Wrench, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { services } from '../mockData';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const iconMap = {
    1: Construction,
    2: Lightbulb,
    3: Wrench
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1534097575056-ddba81f714c8)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our <span className="text-emerald-400">Services</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive sustainable road construction solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.id];
              return (
                <Card
                  key={service.id}
                  className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-emerald-600" size={32} />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="text-emerald-500 flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-500">Technology Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How we transform plastic waste into durable roads
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Collection & Sorting',
                description: 'We collect and sort plastic waste, focusing on non-biodegradable materials suitable for road construction.'
              },
              {
                step: '02',
                title: 'Processing & Melting',
                description: 'Plastic is cleaned, shredded, and melted at controlled temperatures to achieve optimal consistency.'
              },
              {
                step: '03',
                title: 'Bitumen Mixing',
                description: 'Melted plastic is mixed with bitumen to create a superior binding material for road construction.'
              },
              {
                step: '04',
                title: 'Road Laying',
                description: 'The plastic-enhanced mixture is laid using standard road construction equipment, ensuring quality and durability.'
              }
            ].map((process, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 text-8xl font-bold text-emerald-50 group-hover:text-emerald-100 transition-colors">
                  {process.step}
                </div>
                <CardContent className="p-6 relative z-10">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-4 font-bold text-lg">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Proven Technology',
                    description: 'Our patented process has been tested and proven across multiple projects with excellent results.'
                  },
                  {
                    title: 'Expert Team',
                    description: 'Experienced engineers and technicians ensure every project meets the highest quality standards.'
                  },
                  {
                    title: 'Cost Savings',
                    description: 'Reduce construction and maintenance costs while improving road quality and longevity.'
                  },
                  {
                    title: 'Environmental Impact',
                    description: 'Make a positive environmental contribution by recycling plastic waste in your infrastructure projects.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="text-white" size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1493612276216-ee3925520721"
                alt="Innovation"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Sustainable Project?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Get in touch with our team to discuss how we can help with your infrastructure needs.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-6 text-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
