import React from 'react';
import { Award, BadgeCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Certifications = () => {
    const [headerRef, headerVisible] = useScrollReveal();
    const [certRef, certVisible] = useScrollReveal();
    const [bannerRef, bannerVisible] = useScrollReveal();

    const certifications = [
        {
            title: "Software Developer Certification",
            issuer: "Infomatronics Project Services",
            level: "Professional",
        },
        {
            title: "Prompt Engineer",
            issuer: "Infomatronics Project Services",
            level: "Professional",
        },
        {
            title: "Software Developer Certification",
            issuer: "Corizo",
            level: "Professional",
        },
        {
            title: "Generative AI Professional",
            issuer: "Oracle",
            level: "Professional",
        }
    ];

    return (
        <section id="certifications" className="py-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div 
                    ref={headerRef} 
                    className={`text-center mb-16 transform transition-all duration-1000 ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Certifications & Achievements</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg">Professional certifications and recognitions</p>
                </div>

                {/* Grid - 2x2 Layout */}
                <div ref={certRef} className="grid md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <div 
                            key={index}
                            className={`bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-1 border border-gray-100 ${certVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                                    <Award className="w-6 h-6 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{cert.issuer}</p>
                                    <div className="flex items-center gap-2">
                                        <BadgeCheck className="w-4 h-4 text-green-600" />
                                        <span className="text-green-600 text-sm font-medium">{cert.level}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Banner */}
                <div 
                    ref={bannerRef}
                    className={`mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-xl transform transition-all duration-1000 delay-700 ${bannerVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-white text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-2">Leadership Experience</h3>
                            <p className="text-blue-100">Led teams, mentored developers, and organized project workflows to enhance collaboration and technical skills</p>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                                <p className="text-4xl font-bold text-white mb-1">3+</p>
                                <p className="text-blue-100 text-sm">Teams Led</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Certifications;
