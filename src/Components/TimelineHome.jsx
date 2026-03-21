// src/Components/TimelineHome.jsx — About page (rauchg.com /about style)
import React from 'react';
import { Linkedin, Github, Instagram, Twitter } from 'lucide-react';

export default function TimelineHome() {
  return (
    <div className="container about-page">
      <img src="/IMG_0437.jpg" alt="V. Lakshen" className="profile-img" />
      <p className="about-bio">
        I'm <strong>V. Lakshen</strong> — a future entrepreneur and industrial automation
        enthusiast based in <strong>Chennai, India</strong>. I build sustainable and innovative
        technological solutions, focusing on upskilling technologies for efficiency
        and creating eco-friendly vehicles for a greener future.
      </p>

      <p className="about-bio">
        Currently serving as <strong>Chairman of IEEE BIT Student Branch</strong>, I lead
        innovation initiatives and foster technical excellence. I also drive engagement
        and progress as <strong>Executive of Development</strong> at IEEE Robotics and
        Automation Society @BIT.
      </p>

      <p className="about-bio">
        My technical stack spans <strong>C, C++, Java, Python, React, Arduino, ESP,
        IoT, PLC, Raspberry Pi, ROS2, YOLO</strong>, and the full <strong>MERN Stack</strong>.
        I'm passionate about design thinking, problem solving, innovation, and sports.
      </p>

      <hr />

      <h2 className="contributions-title">Technical Contributions</h2>

      <ul className="contributions-list">
        <li>
          Appointed as <span className="contrib-highlight">IEEE Day 2025 Ambassador</span>,
          representing and promoting IEEE's global mission of advancing technology for the
          benefit of humanity.
        </li>
        <li>
          Filed a <span className="contrib-highlight">Design Patent</span> (Application Number:
          429057-001) — an industrial design contribution reflecting innovation in product
          development.
        </li>
        <li>
          As <span className="contrib-highlight">Chairman of IEEE BIT Student Branch</span>, I
          lead innovation initiatives and foster technical excellence across the student community.
        </li>
        <li>
          Serving as Executive of Development at <span className="contrib-highlight">IEEE Robotics
          and Automation Society @BIT</span>, driving engagement and progress in robotics &
          automation.
        </li>
        <li>
          Built an <span className="contrib-highlight">IoT Based Home Automation</span> system
          using ESP SEED Module integrated with a React-based Web Platform featuring Live Power
          Usage Monitoring.
        </li>
        <li>
          Developed a <span className="contrib-highlight">Waste Classifier Using PLC</span> for
          Plastic, Metal, and Paper classification using industrial sensors and the YOLO algorithm.
        </li>
        <li>
          Launched <span className="contrib-highlight">3 static websites</span> and an
          <span className="contrib-highlight"> e-commerce platform</span>, applying full-stack web
          development skills in real-world scenarios.
        </li>
        <li>
          Completed a comprehensive <span className="contrib-highlight">Web Development
          Internship</span> at SkillForge, earning a certificate course in modern web technologies.
        </li>
        <li>
          Earned a <span className="contrib-highlight">Diploma in Software Engineering</span> from
          AACE Multimedia Institute with Grade A, covering C, C++, Java, and Python.
        </li>
        <li>
          Active competitive programmer on{' '}
          <a href="https://www.hackerrank.com/profile/lakshen6" target="_blank" rel="noopener noreferrer">HackerRank</a> and{' '}
          <a href="https://leetcode.com/u/KMB4FVP1YU/" target="_blank" rel="noopener noreferrer">LeetCode</a>,
          continuously sharpening problem-solving skills.
        </li>
        <li>
          Strong experience in <span className="contrib-highlight">Arduino</span>,{' '}
          <span className="contrib-highlight">ESP</span>,{' '}
          <span className="contrib-highlight">Raspberry Pi</span>,{' '}
          <span className="contrib-highlight">ROS2</span>, and{' '}
          <span className="contrib-highlight">PLC</span> for industrial automation and embedded
          systems development.
        </li>
      </ul>

      <div className="social-row">
        <a
          href="https://www.linkedin.com/in/v-lakshen-b1103a213/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Linkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/Laksheditings"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Github /> GitHub
        </a>
        <a
          href="https://www.instagram.com/lakshen_india"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Instagram /> Instagram
        </a>
        <a
          href="https://x.com/Lakshen2006"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Twitter /> X / Twitter
        </a>
      </div>
    </div>
  );
}