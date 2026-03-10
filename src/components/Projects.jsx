import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const [ref, isVisible] = useScrollReveal();

    const projectsData = [
        { title: "Ultraz E-Commerce Platform", description: "Full-featured e-commerce website with shopping cart, product catalog, and responsive design. Built with modern web technologies for optimal user experience.", tech: ["HTML5", "CSS3", "JavaScript", "Firebase"], link: "https://ultraz.netlify.app/", gradientClasses: "from-blue-600 to-blue-400" },
        { title: "Dark Web Monitor", description: "Advanced monitoring application for tracking and analyzing web activities with real-time capabilities. Features comprehensive dashboard and alert system.", tech: ["HTML5", "CSS3", "JavaScript", "TypeScript"], link: "https://darkwebdm.netlify.app/", gradientClasses: "from-slate-600 to-slate-400" }
    ];

    return (
        <section id="projects" ref={ref} className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg">Showcasing my work and technical expertise</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projectsData.map((project, index) => (
                        <div
                            key={project.title}
                            className={`group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className={`h-2 bg-gradient-to-r ${project.gradientClasses}`}></div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    {project.link !== "#" && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                                            <ExternalLink size={16} />
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105">
                                        <Github size={16} />
                                        <span>Code</span>
                                    </button>
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
