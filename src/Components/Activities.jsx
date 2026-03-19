// src/Components/Activities.jsx — Chronologicals page (rauchg.com main page style)
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { 
  getAchievements, 
  getProjects,
  getCachedAchievementsSync,
  getCachedProjectsSync
} from '../services/googleSheets';

const buildGroups = (achievements, projects) => {
  if (!achievements && !projects) return [];
  
  const allAchievements = [];
  if (achievements) {
    [...achievements].reverse().forEach((a) => {
      allAchievements.push({
        title: a.title,
        detail: a.award || a.subtitle || a.type || '',
        link: a.linkedinpost || '',
        year: a.year || '',
        type: 'achievement'
      });
    });
  }

  const allProjects = [];
  if (projects) {
    [...projects].reverse().forEach((p) => {
      allProjects.push({
        title: p.title,
        detail: p.status || '',
        link: p.link || '',
        year: p.year || '',
        type: 'project'
      });
    });
  }

  // Interleave them so projects and achievements are mixed rather than clustered
  const all = [];
  const maxLen = Math.max(allAchievements.length, allProjects.length);
  for (let i = 0; i < maxLen; i++) {
    if (i < allAchievements.length) all.push(allAchievements[i]);
    if (i < allProjects.length) all.push(allProjects[i]);
  }

  const yearMap = {};
  all.forEach((item) => {
    const y = item.year || 'Other';
    if (!yearMap[y]) yearMap[y] = [];
    yearMap[y].push(item);
  });

  return Object.entries(yearMap)
    .sort(([a], [b]) => {
      if (a === 'Other') return 1;
      if (b === 'Other') return -1;
      return Number(b) - Number(a);
    })
    .map(([year, entries]) => ({ year, entries }));
};

export default function Activities() {
  const navigate = useNavigate();
  
  // Initialize state synchronously from cache if available! Zero flash!
  const cachedAchievements = getCachedAchievementsSync();
  const cachedProjects = getCachedProjectsSync();
  const initialGroups = buildGroups(cachedAchievements, cachedProjects);
  
  const [groups, setGroups] = useState(initialGroups);
  // Only show loading spinner if we didn't have cached data
  const [loading, setLoading] = useState(initialGroups.length === 0);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If we already have cached data, we don't strictly *need* to refetch here 
    // because getAchievements() will just read it again and return instantly.
    // However, fetching ensures we get the latest if cache expired.
    const fetchAll = async () => {
      try {
        const [achievements, projects] = await Promise.all([
          getAchievements(),
          getProjects(),
        ]);

        setGroups(buildGroups(achievements, projects));
        setError(null);
      } catch (err) {
        console.error('Error loading Chronologicals:', err);
        // Only show error if we don't have stale cache displaying
        if (groups.length === 0) {
          setError('Failed to load data. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (entry) => {
    // Navigate to a detail page, pass entry data via state
    navigate(`/activity/${encodeURIComponent(entry.title)}`, {
      state: { entry },
    });
  };

  if (loading) {
    return (
      <div className="container activities-page">
        <div className="loading-container">
          <Loader2 className="spinner" />
          <p className="loading-text">Loading Chronologicals...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container activities-page">
      {error && <p className="error-text">{error}</p>}

      <ul className="timeline-list">
        {groups.map((group) =>
          group.entries.map((entry, i) => (
            <li
              key={`${group.year}-${i}`}
              className={`timeline-row ${entry.type === 'project' ? 'timeline-row-project' : ''}`}
              onClick={() => handleClick(entry)}
              style={{ cursor: 'pointer' }}
            >
              {i === 0 ? (
                <span className="timeline-year">{group.year}</span>
              ) : (
                <span className="timeline-year-spacer" />
              )}
              <span className="timeline-title">{entry.title}</span>
              <span className="timeline-meta">{entry.detail}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
