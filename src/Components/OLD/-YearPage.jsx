// src/Components/YearPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

// Reuse same static data (later → Google Sheets)
const timelineData = { /* same object as above */ };

export default function YearPage() {
  const { year } = useParams();
  const yearNum = Number(year);

  const yearGroup = timelineData.find(g => g.year === yearNum);

  if (!yearGroup) {
    return (
      <div className="container py-20">
        <h1 className="text-5xl font-bold mb-8">{year}</h1>
        <p className="text-gray-600">No entries found for this year.</p>
      </div>
    );
  }

  return (
    <div className="container py-16">
      <h1 className="text-5xl font-bold mb-16 tracking-tight">{year}</h1>

      <div className="space-y-12">
        {yearGroup.entries.map((entry, i) => (
          <div key={i} className="border-l-4 border-gray-300 pl-6 py-1">
            <div className="text-gray-600 text-sm mb-2">
              {entry.date}
            </div>
            <h3 className="text-2xl font-semibold mb-3">{entry.title}</h3>
            <p className="text-gray-700 leading-relaxed">{entry.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}