import React from 'react';
import { Server, Database, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Server size={24} />,
      title: "4+ Years Experience",
      description: "Proven expertise in building high-performance backend systems and APIs"
    },
    {
      icon: <Database size={24} />,
      title: "Data Architecture",
      description: "Designed and optimized database systems handling millions of records"
    },
    {
      icon: <Shield size={24} />,
      title: "Security Focused",
      description: "Implemented robust authentication, authorization, and data protection"
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Expert",
      description: "Optimized systems to handle 100K+ requests per second with low latency"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-green-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about building robust, scalable backend systems that form the backbone 
            of modern applications. I specialize in Python ecosystems and distributed architectures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              As a Senior Python Backend Developer, I've architected and built systems that serve millions 
              of users daily. My expertise spans from designing RESTful APIs and GraphQL endpoints to 
              implementing complex microservices architectures.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I have deep experience with Django, FastAPI, Flask, and async Python frameworks. 
              My approach combines clean code principles with performance optimization, ensuring 
              systems are both maintainable and highly efficient.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Beyond coding, I'm passionate about DevOps practices, database optimization, and 
              mentoring junior developers. I regularly contribute to open-source Python projects 
              and speak at Python conferences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-green-400 mb-4">{highlight.icon}</div>
                <h3 className="text-white font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;