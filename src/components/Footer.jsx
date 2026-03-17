import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Footer = () => {
    const [headerRef, headerVisible] = useScrollReveal();
    const [formRef, formVisible] = useScrollReveal();

    return (
        <>
            <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div ref={headerRef} className={`text-center mb-16 transform transition-all duration-1000 ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
                        <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
                        <p className="text-gray-300 text-lg">Let's collaborate on your next project</p>
                    </div>
                    <div ref={formRef} className="grid md:grid-cols-2 gap-12">
                        <div className={`space-y-6 transform transition-all duration-1000 delay-200 ${formVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <a href="mailto:sharinath2006@gmail.com" className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                                    <div className="p-3 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Email</p>
                                        <p className="text-white font-medium">sharinath2006@gmail.com</p>
                                    </div>
                                </a>
                                <a href="tel:7358998318" className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                                    <div className="p-3 bg-green-600 rounded-lg group-hover:bg-green-700 transition-colors">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Phone</p>
                                        <p className="text-white font-medium">+91 7358998318</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                                    <div className="p-3 bg-orange-600 rounded-lg">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Location</p>
                                        <p className="text-white font-medium">Chennai, Tamil Nadu</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6">
                                <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
                                <div className="flex gap-4">
                                    <a href="https://www.linkedin.com/in/Harinath03" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                    <a href="https://github.com/Harinath003" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a href="mailto:sharinath2006@gmail.com" className="p-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-110">
                                        <Mail className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`transform transition-all duration-1000 delay-400 ${formVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl">
                                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-gray-300 mb-2 text-sm">Name</label>
                                        <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 mb-2 text-sm">Email</label>
                                        <input type="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all" placeholder="your.email@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 mb-2 text-sm">Message</label>
                                        <textarea rows="5" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all resize-none" placeholder="Your message..."></textarea>
                                    </div>
                                    <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                                        <span>Send Message</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-slate-900 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <p className="text-gray-400 text-center">Designed and Built by Harinath S</p>
                        <div className="flex items-center gap-2 text-gray-400">
                            <span>Made with ❤️ using React & TailwindCSS</span>
                        </div>
                        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Harinath S. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;
