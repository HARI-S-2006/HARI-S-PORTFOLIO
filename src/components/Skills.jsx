import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Code2, Layout, Database, Wrench } from 'lucide-react';

const Skills = () => {
    const [ref, isVisible] = useScrollReveal();

    const skillsData = [
        { title: "Programming Languages", icon: <Code2 size={24} />, iconClasses: "bg-blue-100 text-blue-600", skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"] },
        { title: "Front-End", icon: <Layout size={24} />, iconClasses: "bg-emerald-100 text-emerald-600", skills: ["ReactJS", "HTML5", "CSS3", "TailwindCSS", "Redux"] },
        { title: "Back-End", icon: <Database size={24} />, iconClasses: "bg-purple-100 text-purple-600", skills: ["Node.js", "ExpressJS", "REST APIs", "MongoDB", "SQL"] },
        { title: "Tools & Deployment", icon: <Wrench size={24} />, iconClasses: "bg-rose-100 text-rose-600", skills: ["Git", "GitHub", "Postman", "AWS", "Firebase Hosting"] }
    ];

    return (
        <section id="skills" ref={ref} className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technical Skills</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((skill, index) => (
                        <div
                            key={skill.title}
                            className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className={`inline-flex p-3 rounded-lg mb-4 ${skill.iconClasses}`}>
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{skill.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.skills.map(s => (
                                    <span key={s} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300">
                                        {s}
                                    </span>
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
