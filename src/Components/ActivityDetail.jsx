// src/Components/ActivityDetail.jsx — Opens when an activity is clicked
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function ActivityDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const entry = location.state?.entry;

  if (!entry) {
    return (
      <div className="container detail-page">
        <button className="back-btn" onClick={() => navigate('/activities')}>
          <ArrowLeft className="back-icon" /> Back to chronologicals
        </button>
        <p className="detail-empty">No activity data found.</p>
      </div>
    );
  }

  const hasLink = entry.link && entry.link.trim() !== '';

  return (
    <div className="container detail-page">
      <button className="back-btn" onClick={() => navigate('/activities')}>
        <ArrowLeft className="back-icon" /> Back to chronologicals
      </button>

      <h1 className="detail-title">{entry.title}</h1>

      {entry.detail && (
        <p className="detail-subtitle">{entry.detail}</p>
      )}

      {hasLink && (
        <div className="detail-link-card">
          <p className="detail-link-desc">
            This activity has an external link. Click below to view it on the platform.
          </p>
          <a
            href={entry.link}
            target="_blank"
            rel="noopener noreferrer"
            className="detail-primary-link"
          >
            Visit External Link <ExternalLink className="detail-external-icon" />
          </a>
        </div>
      )}

      {!hasLink && (
        <div className="detail-no-link">
          <p>No external link available for this activity.</p>
        </div>
      )}
    </div>
  );
}
