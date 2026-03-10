import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <a href="#home" className="text-2xl font-bold transition-colors duration-300 text-white">HARINATH S</a>
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="transition-colors duration-300 hover:text-blue-400 text-white">Home</a>
                        <a href="#about" className="transition-colors duration-300 hover:text-blue-400 text-white">About</a>
                        <a href="#skills" className="transition-colors duration-300 hover:text-blue-400 text-white">Skills</a>
                        <a href="#experience" className="transition-colors duration-300 hover:text-blue-400 text-white">Experience</a>
                        <a href="#projects" className="transition-colors duration-300 hover:text-blue-400 text-white">Projects</a>
                        <a href="#certifications" className="transition-colors duration-300 hover:text-blue-400 text-white">Certifications</a>
                        <a href="#contact" className="transition-colors duration-300 hover:text-blue-400 text-white">Contact</a>
                    </div>
                    <button className="md:hidden transition-colors duration-300 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-slate-900 absolute top-full left-0 w-full shadow-lg border-t border-white/10">
                    <div className="px-4 py-4 space-y-4 flex flex-col">
                        <a href="#home" className="text-white hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>Home</a>
                        <a href="#about" className="text-white hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>About</a>
                        <a href="#skills" className="text-white hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>Skills</a>
                        <a href="#experience" className="text-white hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>Experience</a>
                        <a href="#projects" className="text-white hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>Projects</a>
                        <a href="#certifications" className="text-white hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>Certifications</a>
                        <a href="#contact" className="text-white hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};
export default Navbar;
