import React from 'react';
import { Code2, Database, Cloud, Settings } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code2 size={32} />,
      title: "Python & Frameworks",
      skills: [
        { name: "Python", level: 85 },
        { name: "Django/DRF", level: 75 },
        { name: "Flask", level: 70 }
      ]
    },
    {
      icon: <Database size={28} />,
      title: "Databases & Storage",
      skills: [
        { name: "PostgreSQL", level: 95 },
        { name: "MySQL", level: 90 },
        { name: "MSSQLServer", level: 85 }
      ]
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 40 },
        { name: "CI/CD", level: 70 },
        { name: "GIT", level: 85}
      ]
    },
    {
      icon: <Settings size={32} />,
      title: "Tools & Practices",
      skills: [
        { name: "Postman", level: 90 },
        { name: "Jira", level: 85 },
        { name: "Microservices", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-green-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep expertise in Python ecosystem and modern backend development practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-900 p-6 rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-green-400 mb-4">{category.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-green-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;