import React, { useState, useEffect } from 'react';
import { Code, Github, ExternalLink, Loader2, X, Play } from 'lucide-react';
import { getProjects } from '../services/googleSheets';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        console.error('Error loading projects:', err);
        setError('Failed to load projects. Please try again later.');
        setProjects([
          {
            title: 'IoT Based Home Automation',
            description: 'ESP SEED Module integrated with React-based Web Platform with Live Power Usage Monitoring',
            status: 'Completed',
            tech: ['ESP', 'React', 'IoT'],
            link: '',
            image: ''
          },
          {
            title: 'Waste Classifier Using PLC',
            description: 'Plastic, Metal, Paper classification using Sensors + YOLO Algorithm',
            status: 'Completed',
            tech: ['PLC', 'YOLO', 'Sensors'],
            link: '',
            image: ''
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectClick = (project) => {
    if (project.image && project.image.trim() !== '') {
      setSelectedProject(project);
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProject(null);
    setIsHovering(false);
  };

  const handleMouseMove = (e) => {
    if (selectedProject?.link) {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleImageClick = () => {
    if (selectedProject?.link && selectedProject.link.trim() !== '') {
      window.open(selectedProject.link, '_blank');
      closePopup();
    }
  };

  // Helper to check if image is a Google Drive video
  const isGoogleDriveVideo = (url) => {
    return url && url.includes('drive.google.com') && (url.includes('video') || url.includes('.mp4') || url.includes('?usp=sharing'));
  };

  // Helper to get embed URL for Google Drive video
  const getDriveEmbedUrl = (url) => {
    // Extract file ID from Drive URL
    const fileIdMatch = url.match(/\/file\/d\/([a-zA-Z0-9-_]+)/) || url.match(/id=([a-zA-Z0-9-_]+)/);
    if (fileIdMatch) {
      const fileId = fileIdMatch[1];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return url; // Fallback to original
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
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
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          {error && (
            <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center">
              {error}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                onClick={() => handleProjectClick(project)}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group ${
                  project.image ? 'cursor-pointer' : ''
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-all">
                    <Code className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/30' 
                        : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                    {project.image && (
                      <span className="text-xs text-cyan-400">Click to view</span>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech && project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Launched 3 Static Websites and an E-Commerce Site</p>
            <a href="https://github.com/Laksheditings" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all hover:border-cyan-500/50">
              <Github className="w-5 h-5" />
              <span>View More on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Image/Video Popup */}
      {showPopup && selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closePopup}
        >
          <div className="relative w-full max-w-5xl mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closePopup}
              className="absolute -top-12 right-0 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10">
              <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border-b border-white/10">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <p className="text-gray-300 mt-2">{selectedProject.description}</p>
              </div>
              
              <div 
                className="relative group"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={handleImageClick}
                style={{ cursor: selectedProject.link ? 'pointer' : 'default' }}
              >
                {isGoogleDriveVideo(selectedProject.image) ? (
                  <iframe
                    src={getDriveEmbedUrl(selectedProject.image)}
                    className="w-full h-auto max-h-[70vh] object-contain bg-black/50"
                    frameBorder="0"
                    allowFullScreen
                    title={selectedProject.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    loop
                    autoPlay
                    onClick={handleImageClick}
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto max-h-[70vh] object-contain bg-black/50"
                    onClick={handleImageClick}
                  />
                )}
                
                {/* Custom Cursor Text - "To Video" */}
                {selectedProject.link && isHovering && (
                  <div
                    className="absolute pointer-events-none z-20"
                    style={{
                      left: `${mousePos.x}px`,
                      top: `${mousePos.y}px`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="flex items-center space-x-2 px-4 py-2 bg-cyan-500 rounded-full shadow-lg">
                      <Play className="w-4 h-4 text-white" fill="white" />
                      <span className="text-white font-semibold text-sm whitespace-nowrap">To Video</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 bg-white/5">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tech && selectedProject.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Play className="w-4 h-4" fill="white" />
                    <span>Watch Project Video</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;