import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Python Backend Developer",
      company: "Nueve IT Solutions Pvt Ltd",
      location: "Visakhapatnam, Andhra Pradesh",
      period: "October 2021 - September 2025",
      description: "Senior Python Backend Developer with extensive experience in building scalable web applications using Python and Django for US-based banks and credit unions. Architected microservices handling real-time data ingestion and analysis.",
      achievements: [
        "Reduced API response time by 60% through database optimization and caching",
        "Built event-driven architecture processing 1M+ events per minute",
        "Led migration from monolith to microservices, improving deployment frequency by 10x"
      ]
    },
    {
      title: "Python Backend Developer",
      company: "The One Technologies Pvt Ltd.",
      location: "Ahmedabad, Gujarat",
      period: "March 2020 - June 2020",
      description: "Python Developer with strong experience in designing and developing full-featured e-commerce applications. Skilled in building responsive, user-friendly UI screens using HTML, CSS, JavaScript, and Django templates to ensure a seamless and engaging user experience.",
      achievements: [
        "Developed core backend modules using Python and Django",
        "Designed and optimized database models using PostgreSQL",
        "Achieved 99.99% uptime through robust error handling and monitoring"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="text-green-400">Journey</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-green-400"></div>
          
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-4 border-gray-900"></div>
              
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Briefcase size={20} className="text-green-400 mr-2" />
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-green-400 mb-2">{exp.company}</h4>
                    <div className="flex items-center text-gray-400 text-sm space-x-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;