// src/Components/About.jsx
import React from 'react';

export default function About() {
  return (
    <div className="container py-20">
      <h1 className="text-5xl font-bold mb-16 tracking-tight">About</h1>

      <div className="prose prose-lg max-w-none text-gray-800">
        <p>
          I am a future entrepreneur and industrial automation enthusiast dedicated 
          to building sustainable and innovative technological solutions. My focus 
          lies in upskilling innovative technologies for efficiency and creating 
          sustainable vehicles for a greener future.
        </p>

        <p>
          Currently serving as Chairman of IEEE BIT Student Branch, I lead 
          innovation initiatives and foster technical excellence in the student 
          community. I also hold the position of Executive of Development at 
          IEEE Robotics and Automation Society @BIT, where I drive engagement 
          and progress.
        </p>

        <hr className="my-12" />

        <h2 className="text-3xl font-bold mb-8">Technical Contributions & Milestones</h2>

        <ul className="contributions">
          <li>Design Patent Filed — Application Number 429057-001</li>
          <li>Launched 3 static websites and 1 e-commerce platform</li>
          <li>Completed internships and certificate courses in Web Development (SkillForge) and Diploma in Software Engineering (AACE Multimedia Institute — Grade A)</li>
          <li>Strong experience in C, C++, Java, Python, React, Arduino, ESP, IoT, PLC, Raspberry Pi, ROS2, YOLO, MERN Stack</li>
          <li>Passionate about sustainable impact, continuous learning, design thinking, problem solving, and innovation</li>
        </ul>
      </div>
    </div>
  );
}