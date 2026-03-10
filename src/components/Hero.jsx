import React from 'react';
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero = () => {
    const [ref, isVisible] = useScrollReveal();

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
                    <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                        <div className="space-y-2">
                            <p className="text-blue-400 text-lg font-medium animate-fade-in">Hello, I'm</p>
                            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">HARINATH S</h1>
                            <p className="text-2xl md:text-3xl text-gray-300 font-medium">Software Developer</p>
                            <p className="text-lg text-gray-400 font-medium">3rd Year CSE Student</p>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                            Motivated Software Developer specializing in building scalable web applications with ReactJS, Node.js, and modern technologies. Passionate about creating exceptional user experiences and solving complex problems.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a href="#contact" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105">Get In Touch</a>
                            <a href="#projects" className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300">View Work</a>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <a href="mailto:sharinath2006@gmail.com" className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/Harinath003" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/Harinath003" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                        <div className="flex flex-col gap-2 pt-2 text-gray-300">
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                <span>7358998318</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>Chennai, Tamil Nadu</span>
                            </div>
                        </div>
                    </div>

                    <div className={`flex justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
                            <img src="/Potrait.png" alt="HARINATH S" className="relative w-80 h-[28rem] md:w-96 md:h-[32rem] object-cover rounded-2xl border-4 border-blue-400/30 shadow-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
