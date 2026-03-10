import React from 'react';
import { Briefcase } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
    {
        company: "Monolith Technologies",
        role: "Software Development Intern",
        period: "June 2025 - September 2025",
        location: "Chennai, India",
        type: "In-Person",
        achievements: [
            "Successfully completed 3-month internship program",
            "Contributed to skill development and career growth initiatives",
            "Worked on enterprise-level software projects"
        ],
        color: "blue"
    },
    {
        company: "Infomatronics Project Services",
        role: "Prompt Engineering Intern",
        period: "October 2024 - October 2024",
        location: "Remote",
        type: "Remote",
        achievements: [
            "Incorporated prompt engineering techniques for UI/UX design",
            "Implemented Firebase Auth, Firestore, and admin panel",
            "Enhanced content management systems for web applications"
        ],
        color: "cyan"
    },
    {
        company: "Infomatronics Project Services",
        role: "Software Developer Intern",
        period: "July 2024 - August 2024",
        location: "Remote",
        type: "Remote",
        achievements: [
            "Developed dark web monitor website using HTML, CSS, JavaScript, TypeScript",
            "Built responsive web applications with modern technologies",
            "Enhanced security features and backend integration"
        ],
        color: "green"
    },
    {
        company: "Corizo",
        role: "Software Developer Intern",
        period: "July 2024 - August 2024",
        location: "Remote",
        type: "Remote",
        achievements: [
            "Built responsive web applications using ReactJS",
            "Developed RESTful APIs with Node.js and ExpressJS",
            "Worked with AWS and Firebase for deployment and hosting"
        ],
        color: "orange"
    }
];

const Experience = () => {
    const [ref, isVisible] = useScrollReveal();

    return (
        <section id="experience" ref={ref} className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-green-600"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Internship Roadmap</h2>
                    <div className="w-24 h-1 bg-cyan-400 mx-auto mb-4"></div>
                    <p className="text-cyan-100 text-lg">My professional journey and growth</p>
                </div>

                <div className="relative">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-cyan-600 via-green-600 to-orange-600"></div>

                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className={`relative mb-12 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : i % 2 === 0 ? "-translate-x-20 opacity-0" : "translate-x-20 opacity-0"}`}
                            style={{ transitionDelay: `${i * 200}ms` }}
                        >
                            <div className={`md:flex items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                <div className="md:w-1/2"></div>
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center shadow-lg z-10">
                                    <Briefcase className="text-blue-600" size={20} />
                                </div>
                                <div className="md:w-1/2">
                                    <div className={`bg-blue-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-blue-600 ${i % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                                                <p className="text-blue-600 font-medium">{exp.role}</p>
                                            </div>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">{exp.period}</span>
                                        </div>
                                        <div className="flex gap-4 mb-4 text-sm text-gray-600">
                                            <span className="flex items-center gap-1">
                                                {/* Mock Location Icon */}
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                                {exp.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                {/* Mock Type Icon */}
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                                {exp.type}
                                            </span>
                                        </div>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            {exp.achievements.map((ach, idx) => (
                                                <li key={idx} className="text-sm">{ach}</li>
                                            ))}
                                        </ul>
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
