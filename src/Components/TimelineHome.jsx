// src/Components/TimelineHome.jsx
import React from 'react';

const timelineData = [
  {
    year: 2025,
    entries: [
      {
        date: "2025-02",
        title: "IEEE Day 2025 Ambassador",
        desc: "Appointed as IEEE Day 2025 Ambassador",
      },
      {
        date: "2025-01",
        title: "Continued focus on sustainable vehicles & industrial automation",
        desc: "Upskilling in innovative technologies for efficiency and eco-friendly solutions.",
      },
    ],
  },
  {
    year: 2024,
    entries: [
      {
        date: "2024-11",
        title: "Design Patent Filed",
        desc: "Application Number: 429057-001 — industrial design contribution.",
      },
      {
        date: "2024",
        title: "Chairman of IEEE BIT Student Branch",
        desc: "Leading innovation initiatives and fostering technical excellence.",
      },
      {
        date: "2024",
        title: "Executive of Development – IEEE Robotics and Automation Society @BIT",
        desc: "Driving engagement and progress in robotics & automation.",
      },
    ],
  },
  // Add more years if you want (2023, 2022...)
];

export default function TimelineHome() {
  return (
    <div className="container py-12">
      <h1 className="text-5xl font-bold mb-16 text-center tracking-tight">
        V. Lakshen
      </h1>

      {timelineData.map((group) => (
        <section key={group.year} className="mb-24">
          <h2 className="year-header">{group.year}</h2>

          <div className="space-y-9">
            {group.entries.map((entry, i) => (
              <div key={i}>
                <div className="entry-date">
                  {entry.date}
                </div>
                <h3 className="text-xl font-semibold mb-1.5">
                  {entry.title}
                </h3>
                <p className="text-gray-700">{entry.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={`/${group.year}`}
              className="text-[#0066cc] hover:underline text-sm"
            >
              View full {group.year} →
            </a>
          </div>

          <hr />
        </section>
      ))}
    </div>
  );
}