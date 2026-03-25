import React from 'react';
import { Briefcase, Award } from 'lucide-react';

const Experience = () => {
  const experience = [
    {
      title: 'Web Development',
      company: 'SkillForge',
      type: 'Certificate Course & Internship',
      description: 'Completed comprehensive web development training'
    },
    {
      title: 'Diploma in Software Engineering',
      company: 'AACE Multimedia Institute',
      grade: 'Grade A',
      description: 'C, C++, Java, Python'
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {experience.map((exp, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-cyan-400 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-2">{exp.type}</p>
                  {exp.grade && <p className="text-sm text-green-400 mb-2">{exp.grade}</p>}
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Award className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-bold">Design Patent Filed</h3>
          </div>
          <p className="text-gray-300">Application Number: <span className="text-cyan-400">429057-001</span></p>
        </div>
      </div>
    </section>
  );
};

export default Experience;