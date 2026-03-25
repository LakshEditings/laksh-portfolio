import React, { useState, useEffect } from 'react';
import { Award, Loader2, X, ExternalLink } from 'lucide-react';
import { getAchievements } from '../services/googleSheets';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        setLoading(true);
        const data = await getAchievements();
        setAchievements(data);
        setError(null);
      } catch (err) {
        console.error('Error loading achievements:', err);
        setError('Failed to load achievements. Please try again later.');
        setAchievements([]); // Empty - no fallback to see real data
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  const handleAchievementClick = (achievement) => {
    if (achievement.linkedinpost && achievement.linkedinpost.trim() !== '') {
      setSelectedPost(achievement.linkedinpost);
      setShowPopup(true);

      // Auto redirect after 5 seconds
      setTimeout(() => {
        window.open(achievement.linkedinpost, '_blank');
        setShowPopup(false);
        setSelectedPost(null);
      }, 5000);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedPost(null);
  };

  if (loading) {
    return (
      <section id="achievements" className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 text-cyan-400 animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="achievements" className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          
          {error && (
            <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center">
              {error}
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, idx) => (
              <div 
                key={idx} 
                onClick={() => handleAchievementClick(achievement)}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 ${
                  achievement.linkedinpost ? 'cursor-pointer' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Award className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      achievement.type === 'International' 
                        ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30' :
                      achievement.type === 'Winner' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/30' :
                      achievement.type === 'Finalist' 
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30' :
                        'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {achievement.type}
                    </span>
                    {achievement.linkedinpost && (
                      <ExternalLink className="w-4 h-4 text-cyan-400" />
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                {achievement.subtitle && <p className="text-sm text-gray-400 mb-2">{achievement.subtitle}</p>}
                <p className="text-cyan-400 font-semibold">{achievement.award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn Embed Popup */}
      {showPopup && selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl mx-4">
            <button
              onClick={closePopup}
              className="absolute -top-12 right-0 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center">
                <p className="text-sm">Redirecting to LinkedIn in 5 seconds...</p>
              </div>
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <iframe
                  src={`${selectedPost}?embed=true`}
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  title="LinkedIn Post"
                />
              </div>
              <div className="p-4 bg-gray-50 text-center">
                <a
                  href={selectedPost}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all"
                  onClick={closePopup}
                >
                  <span>Open in LinkedIn</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Achievements;