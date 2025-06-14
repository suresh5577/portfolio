import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            {/* <div className="text-2xl font-bold text-white mb-4">
              <span className="text-blue-400"></span>Portfolio
            </div> */}
            <p className="text-gray-300 mb-6 max-w-md">
              Passionate about creating innovative solutions that make a difference. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <Github size={20} className="text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <Twitter size={20} className="text-white" />
              </a>
              <a
                href="mailto:alex.johnson@email.com"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Technical Consulting</li>
              <li>Team Leadership</li>
              <li>Code Review</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Alex Johnson. All rights reserved.
            </div>
            
            <div className="flex items-center text-gray-300 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 mx-1" />
              <span>and lots of coffee</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;