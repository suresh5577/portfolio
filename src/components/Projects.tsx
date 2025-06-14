import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Real-time Analytics API",
      description: "High-performance analytics platform built with FastAPI and PostgreSQL, processing 10M+ events daily with sub-100ms response times.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500",
      tech: ["FastAPI", "PostgreSQL", "Redis", "Celery", "Docker"],
      liveUrl: "https://analytics-api-demo.com",
      githubUrl: "https://github.com/username/analytics-api",
      featured: true
    },
    {
      title: "Microservices E-commerce Backend",
      description: "Scalable e-commerce backend with separate services for inventory, payments, and user management. Built with Django and deployed on Kubernetes.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500",
      tech: ["Django", "PostgreSQL", "RabbitMQ", "Kubernetes", "AWS"],
      liveUrl: "https://ecommerce-backend.com",
      githubUrl: "https://github.com/username/ecommerce-microservices",
      featured: true
    },
    {
      title: "ML Model Serving Platform",
      description: "MLOps platform for deploying and monitoring machine learning models at scale. Features A/B testing and real-time model performance tracking.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500",
      tech: ["Flask", "TensorFlow", "MongoDB", "Prometheus", "Grafana"],
      liveUrl: "https://ml-platform-demo.com",
      githubUrl: "https://github.com/username/ml-serving-platform",
      featured: true
    },
    {
      title: "Financial Data Pipeline",
      description: "Real-time financial data processing pipeline handling market data feeds and generating trading signals with low-latency requirements.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=500",
      tech: ["Python", "Apache Kafka", "ClickHouse", "Redis"],
      liveUrl: "https://findata-pipeline.com",
      githubUrl: "https://github.com/username/financial-pipeline",
      featured: false
    },
    {
      title: "GraphQL API Gateway",
      description: "Unified GraphQL API gateway aggregating data from multiple microservices with intelligent caching and rate limiting.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=500",
      tech: ["GraphQL", "Python", "Redis", "PostgreSQL"],
      liveUrl: "https://graphql-gateway.com",
      githubUrl: "https://github.com/username/graphql-gateway",
      featured: false
    },
    {
      title: "IoT Data Collector",
      description: "Scalable IoT data collection system processing sensor data from thousands of devices with real-time alerting capabilities.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=500",
      tech: ["Django", "InfluxDB", "MQTT", "Elasticsearch"],
      liveUrl: "https://iot-collector.com",
      githubUrl: "https://github.com/username/iot-collector",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-green-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcase of scalable backend systems and APIs built with Python and modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;