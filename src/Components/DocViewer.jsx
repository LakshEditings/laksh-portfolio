// src/Components/DocViewer.jsx — Embedded viewer with custom favicon and title
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowLeft, ExternalLink } from 'lucide-react';

export default function DocViewer({ title, file, downloadName }) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title} — V. Lakshen`;
    return () => {
      document.title = prevTitle;
    };
  }, [title]);

  return (
    <div className="doc-viewer-page">
      <header className="doc-viewer-header">
        <div className="doc-viewer-header-inner">
          <Link to="/about" className="doc-viewer-back">
            <ArrowLeft size={16} />
            <span>Portfolio</span>
          </Link>
          <div className="doc-viewer-title">{title} — V. Lakshen</div>
          <div className="doc-viewer-actions">
            <a
              href={file}
              download={downloadName}
              className="doc-viewer-btn"
              title="Download PDF"
            >
              <Download size={15} />
              <span>Download</span>
            </a>
            <a
              href={file}
              target="_blank"
              rel="noopener noreferrer"
              className="doc-viewer-btn doc-viewer-btn-secondary"
              title="Open raw PDF"
            >
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </header>

      <main className="doc-viewer-content">
        <object
          data={`${file}#view=FitH`}
          type="application/pdf"
          className="doc-viewer-frame"
          aria-label={title}
        >
          <iframe
            src={`${file}#view=FitH`}
            className="doc-viewer-frame"
            title={title}
          >
            <div className="doc-viewer-fallback">
              <p>Your browser does not support inline PDFs.</p>
              <a href={file} download={downloadName} className="doc-viewer-btn">
                <Download size={16} /> Download {title}
              </a>
            </div>
          </iframe>
        </object>
      </main>
    </div>
  );
}
