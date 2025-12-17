import React, { useState } from 'react';
import { MapPin, Ruler, Recycle, Calendar, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { projects } from '../mockData';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.status === filter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-emerald-600 to-emerald-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1536099629323-44806c1ea264)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our <span className="text-emerald-200">Projects</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Transforming India's infrastructure one road at a time
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {['All', 'Completed', 'In Progress'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === status
                    ? 'bg-emerald-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1519043916581-33ecfdba3b1c' : '1503708928676-1cb796a0891e'}`}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`${
                        project.status === 'Completed'
                          ? 'bg-green-500 hover:bg-green-600'
                          : 'bg-orange-500 hover:bg-orange-600'
                      } text-white`}
                    >
                      {project.status === 'Completed' ? (
                        <CheckCircle className="mr-1" size={14} />
                      ) : (
                        <Clock className="mr-1" size={14} />
                      )}
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">{project.name}</CardTitle>
                  <div className="flex items-center text-gray-600 mt-2">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Ruler className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Length</p>
                        <p className="font-semibold text-gray-900">{project.length}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Recycle className="text-emerald-600" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Plastic Used</p>
                        <p className="font-semibold text-gray-900">{project.plasticUsed}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 col-span-2">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Calendar className="text-purple-600" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Completion</p>
                        <p className="font-semibold text-gray-900">{project.completedDate}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Impact in <span className="text-emerald-500">Numbers</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'Total Projects', value: projects.length, suffix: '+' },
              {
                label: 'Roads Built',
                value: projects.reduce((acc, p) => acc + parseInt(p.length), 0),
                suffix: ' km'
              },
              {
                label: 'Plastic Recycled',
                value: projects.reduce((acc, p) => acc + parseInt(p.plasticUsed), 0),
                suffix: ' tons'
              },
              {
                label: 'Completed Projects',
                value: projects.filter(p => p.status === 'Completed').length,
                suffix: ''
              }
            ].map((stat, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardContent className="p-6">
                  <p className="text-4xl font-bold text-emerald-600 mb-2">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
