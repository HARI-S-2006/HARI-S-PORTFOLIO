import React from 'react';
import { GraduationCap, Briefcase, Code } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
    const [headerRef, headerVisible] = useScrollReveal();
    const [contentRef, contentVisible] = useScrollReveal();

    return (
        <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-blue-50 to-cyan-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={headerRef} className={`text-center mb-16 transform transition-all duration-1000 ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                </div>
                <div ref={contentRef} className="max-w-4xl mx-auto items-center">
                    <div className={`space-y-6 transform transition-all duration-1000 delay-200 ${contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <p className="text-gray-700 text-lg leading-relaxed text-center">
                            I'm a passionate Software Developer currently pursuing my B.E. in Computer Science Engineering at Panimalar Engineering College, Chennai. With hands-on experience in building scalable web applications, I specialize in modern technologies like ReactJS, Node.js, ExpressJS, and Firebase.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed text-center">
                            My journey in software development has been enriched through multiple internships at leading companies like Monolith Technologies, Infomatronics, and Corizo. I've contributed to real-world projects including e-commerce platforms and web monitoring systems. I'm committed to writing clean, maintainable code and continuously expanding my technical expertise.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                            <div className="flex flex-col items-center p-6 bg-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                                <GraduationCap className="w-8 h-8 text-blue-600 mb-3" />
                                <p className="text-gray-900 font-semibold text-center">CSE Student</p>
                                <p className="text-gray-600 text-sm text-center">3rd Year</p>
                            </div>
                            <div className="flex flex-col items-center p-6 bg-green-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                                <Briefcase className="w-8 h-8 text-green-600 mb-3" />
                                <p className="text-gray-900 font-semibold text-center">3+ Internships</p>
                                <p className="text-gray-600 text-sm text-center">Completed</p>
                            </div>
                            <div className="flex flex-col items-center p-6 bg-orange-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                                <Code className="w-8 h-8 text-orange-600 mb-3" />
                                <p className="text-gray-900 font-semibold text-center">6+ Projects</p>
                                <p className="text-gray-600 text-sm text-center">Built</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;
