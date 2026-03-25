import React from 'react';
import { Linkedin, Github, Instagram, Twitter, ChevronDown } from 'lucide-react';

const Hero = ({ onSectionChange }) => {  // Changed prop from scrollToSection to onSectionChange
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-blue-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="mb-6 inline-block">
          <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
            IEEE Day 2025 Ambassador
          </div>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          V. LAKSHEN
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Future Entrepreneur | Industrial Automation Enthusiast
        </p>
        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
          Passionate about Industrial Automation and Sustainable Development. Upskilling Innovative Technologies for Efficiency and Eco-Friendly Solutions.
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <a href="https://www.linkedin.com/in/v-lakshen-b1103a213/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/Laksheditings" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/lakshen_india" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all hover:scale-110">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://x.com/Lakshen2006" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all hover:scale-110">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
        <button 
          onClick={() => onSectionChange('contact')} 
          className="ripple px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
        >
          Get In Touch
        </button>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;