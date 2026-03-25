// src/Components/Contact.jsx
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Twitter, Code, Download, Brain } from 'lucide-react'; // Added Brain for LeetCode

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Get In Touch</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a href="mailto:lakshen6@gmail.com" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-all">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-semibold">lakshen6@gmail.com</p>
              </div>
            </div>
          </a>

          <a href="tel:+916381439927" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-all">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-semibold">+91 6381439927</p>
              </div>
            </div>
          </a>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-12">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-cyan-500/10 rounded-lg">
              <MapPin className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Address</p>
              <p className="text-white">C2A Ragav Nivas, Vijayalakshmi Nagar</p>
              <p className="text-white">3rd Main Road, Nanmangalam</p>
              <p className="text-white">Chennai - 117, Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-6">Connect with me on social media</p>
          <div className="flex justify-center space-x-4 mb-6">
            <a href="https://www.linkedin.com/in/v-lakshen-b1103a213/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 rounded-full transition-all hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Laksheditings" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 rounded-full transition-all hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/lakshen_india" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 rounded-full transition-all hover:scale-110">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://x.com/Lakshen2006" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 rounded-full transition-all hover:scale-110">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://www.hackerrank.com/profile/lakshen6" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 rounded-full transition-all hover:scale-110">
              <Code className="w-6 h-6" />
            </a>
            {/* New from p5 */}
            <a href="https://leetcode.com/u/KMB4FVP1YU/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 rounded-full transition-all hover:scale-110">
              <Brain className="w-6 h-6" />
            </a>
          </div>
          {/* New: Resume Download from p5 */}
          <a href="Lakshen-Brief-Resume-30.10.25.pdf" download className="inline-flex items-center space-x-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition-all">
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
          <p className="text-gray-400 mt-4 text-sm">Hobbies: Sports, Programming, Music, Sudoku | Interests: Design Thinking, Travelling, Problem Solving, Innovating, Sports</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;