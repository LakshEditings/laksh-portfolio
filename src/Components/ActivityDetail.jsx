// src/Components/ActivityDetail.jsx — Opens when an activity is clicked
// If the activity has a LinkedIn/external link, embeds it via iframe
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
        <>
          <div className="detail-link-bar">
            <a
              href={entry.link}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-external-link"
            >
              <ExternalLink className="detail-external-icon" />
              Open in new tab
            </a>
          </div>

          <div className="detail-embed-container">
            <iframe
              src={entry.link}
              title={entry.title}
              className="detail-iframe"
              frameBorder="0"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          </div>
        </>
      )}

      {!hasLink && (
        <div className="detail-no-link">
          <p>No external link available for this activity.</p>
        </div>
      )}
    </div>
  );
}
