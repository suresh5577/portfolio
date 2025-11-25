import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, MapIcon } from 'lucide-react';

const Hero: React.FC = () => {
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="block">Hello, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Suresh Satyawada
            </span>
          </h1>
          
          {/* <div class="section__pic-container">
        <img decoding="async" id="profile1" src="/home/dileep/Documents/Sample/React/FrontEnd/CodeExamples/Portfolio_Website/asset/assets/profile-pic1.png" alt="My Profile  profile picture" title="Dileep Kumar Mantena" style="width: 100px; height: 100px;"  />
    </div>
     */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Senior Python Backend Developer with 4+ years of experience building scalable APIs, 
            microservices, and distributed systems that power mission-critical applications.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/suresh5577"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-green-600 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} className="text-white" />
            </a>
            <a
              href="https://linkedin.com/in/suresh-satyawada"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-green-600 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a
              href="mailto:suresh.python57@gmail.com"
              className="p-3 bg-gray-800 hover:bg-green-600 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} className="text-white" />
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gray-800 hover:bg-green-600 rounded-full transition-all duration-300 transform hover:scale-110">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-300">suresh.python57@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gray-800 hover:bg-green-600 rounded-full transition-all duration-300 transform hover:scale-110">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-gray-300">+91 97032 91029</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gray-800 hover:bg-green-600 rounded-full transition-all duration-300 transform hover:scale-110">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-300">Amalapuram , Andhra Pradesh</p>
                </div>
              </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;