// scripts/sync-resume.js
// Automatically syncs any newly added CV or Resume PDF to cv.pdf and resume.pdf
// so that Vercel builds NEVER fail when you rename or add a new PDF!

const fs = require('fs');
const path = require('path');

function syncResumeFiles() {
  const resumeDir = path.join(__dirname, '..', 'src', 'Components', 'Resume');
  const publicDir = path.join(__dirname, '..', 'public');

  if (!fs.existsSync(resumeDir)) {
    console.log('[sync-resume] Resume directory not found:', resumeDir);
    return;
  }

  const allFiles = fs.readdirSync(resumeDir);
  const pdfFiles = allFiles
    .filter(f => f.toLowerCase().endsWith('.pdf'))
    .map(f => {
      const fullPath = path.join(resumeDir, f);
      const stat = fs.statSync(fullPath);
      return { name: f, fullPath, mtime: stat.mtimeMs };
    })
    .sort((a, b) => b.mtime - a.mtime); // newest first

  // Find latest CV PDF (excluding the target cv.pdf itself)
  const candidateCv = pdfFiles.find(
    f => f.name.toLowerCase().includes('cv') && f.name.toLowerCase() !== 'cv.pdf'
  );

  // Find latest Resume PDF (excluding the target resume.pdf itself)
  const candidateResume = pdfFiles.find(
    f => f.name.toLowerCase().includes('resume') && f.name.toLowerCase() !== 'resume.pdf'
  );

  // Copy CV
  if (candidateCv) {
    const targetSrcCv = path.join(resumeDir, 'cv.pdf');
    const targetPublicCv = path.join(publicDir, 'cv.pdf');
    fs.copyFileSync(candidateCv.fullPath, targetSrcCv);
    if (fs.existsSync(publicDir)) {
      fs.copyFileSync(candidateCv.fullPath, targetPublicCv);
    }
    console.log(`[sync-resume] Successfully synced CV from "${candidateCv.name}" -> cv.pdf`);
  }

  // Copy Resume
  if (candidateResume) {
    const targetSrcResume = path.join(resumeDir, 'resume.pdf');
    const targetPublicResume = path.join(publicDir, 'resume.pdf');
    fs.copyFileSync(candidateResume.fullPath, targetSrcResume);
    if (fs.existsSync(publicDir)) {
      fs.copyFileSync(candidateResume.fullPath, targetPublicResume);
    }
    console.log(`[sync-resume] Successfully synced Resume from "${candidateResume.name}" -> resume.pdf`);
  }
}

syncResumeFiles();
module.exports = syncResumeFiles;
