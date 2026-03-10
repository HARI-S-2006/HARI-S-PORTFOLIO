import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Certifications = () => {
    const [headerRef, headerVisible] = useScrollReveal();
    const [certRef, certVisible] = useScrollReveal();

    return (
        <section id="certifications" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={headerRef} className={`text-center mb-16 transform transition-all duration-1000 ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Certifications</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div ref={certRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 transform transition-all duration-700 ${certVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-blue-50 rounded-lg">
                                <Award className="w-6 h-6 text-blue-600" />
                            </div>
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">AWS Cloud Practitioner</h3>
                        <p className="text-blue-600 font-medium mb-1">Amazon Web Services</p>
                        <p className="text-gray-500 text-sm">Issued: Jan 2024</p>
                    </div>

                    <div className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 transform transition-all duration-700 delay-200 ${certVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-blue-50 rounded-lg">
                                <Award className="w-6 h-6 text-blue-600" />
                            </div>
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Meta Front-End Developer</h3>
                        <p className="text-blue-600 font-medium mb-1">Coursera</p>
                        <p className="text-gray-500 text-sm">Issued: Nov 2023</p>
                    </div>

                    <div className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 transform transition-all duration-700 delay-400 ${certVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-blue-50 rounded-lg">
                                <Award className="w-6 h-6 text-blue-600" />
                            </div>
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Postman API Fundamentals</h3>
                        <p className="text-blue-600 font-medium mb-1">Postman</p>
                        <p className="text-gray-500 text-sm">Issued: Sep 2023</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Certifications;
