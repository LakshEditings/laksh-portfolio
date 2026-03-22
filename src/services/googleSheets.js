import Papa from 'papaparse';

// Your Google Sheets CSV URLs
const SHEETS_CONFIG = {
  achievements: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS3ItVPiLBmG3XHjv26iSA1qkTpqIV9FMpplI4icXQ8s0tIfT---FKmLpdmY7e0-KZmA0vResTLLcpp/pub?output=csv',
  projects: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDbVMoiQwdZH634HNq9DNSDOYCx5tdmSSzUn3Q4wISXrtYyiMda9n1KA0LwW_oiYFmglBNNK9Rt5zO/pub?output=csv'
};

const CACHE_KEY_PREFIX = 'sheetsCache_';
const CACHE_EXPIRY_MS = 5 * 60 * 1000; // 5 minutes

// Fetch data from Google Sheets CSV
const fetchSheetData = async (sheetType) => {
  try {
    const cacheKey = CACHE_KEY_PREFIX + sheetType;
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      try {
        const parsedCache = JSON.parse(cachedData);
        // Check if cache is still valid
        if (new Date().getTime() - parsedCache.timestamp < CACHE_EXPIRY_MS) {
          console.log(`⚡ Using cached data for ${sheetType}`);
          return parsedCache.data;
        }
      } catch (e) {
        console.warn('Cache parsing failed, fetching new data');
      }
    }

    // Cache expired or not found, fetch fresh data
    const timestamp = new Date().getTime();
    const urlWithCacheBust = `${SHEETS_CONFIG[sheetType]}&_=${timestamp}`;
    
    console.log(`🔍 Fetching fresh ${sheetType} from API`);
    
    const response = await fetch(urlWithCacheBust, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const csvText = await response.text();
    
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          console.log(`✅ Parsed fresh ${sheetType} data`);
          
          // Save to cache
          localStorage.setItem(cacheKey, JSON.stringify({
            timestamp: new Date().getTime(),
            data: results.data
          }));
          
          resolve(results.data);
        },
        error: (error) => {
          console.error(`❌ Parse error for ${sheetType}:`, error);
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error(`❌ Fetch error for ${sheetType}:`, error);
    throw error;
  }
};

// Helper: read cache synchronously
const getCachedDataSync = (sheetType) => {
  try {
    const cachedData = localStorage.getItem(CACHE_KEY_PREFIX + sheetType);
    if (cachedData) {
      const parsedCache = JSON.parse(cachedData);
      if (new Date().getTime() - parsedCache.timestamp < CACHE_EXPIRY_MS) {
        return parsedCache.data;
      }
    }
  } catch (e) {
    // ignore
  }
  return null;
};

// Helper: Extract 4-digit year from title (e.g. "Appathon 2021" -> "2021")
const extractYear = (text) => {
  if (!text) return '';
  const match = text.match(/\b(19\d{2}|20\d{2})\b/);
  return match ? match[1] : '';
};

export const getCachedAchievementsSync = () => {
  const data = getCachedDataSync('achievements');
  if (!data) return null;
  
  return data
    .filter(item => item.title && item.title.trim() !== '')
    .map(item => ({
      title: (item.title || '').trim(),
      subtitle: (item.subtitle || '').trim(),
      award: (item.award || '').trim(),
      type: (item.type || 'Finalist').trim(),
      linkedinpost: (item.linkedinpost || '').trim(),
      year: (item.year || '').trim() || extractYear(item.title),
      views: parseInt(item.views) || 0,
    }));
};

// Get all achievements
export const getAchievements = async () => {
  try {
    const data = await fetchSheetData('achievements');
    console.log('🎯 Raw achievements data before mapping:', data);
    
    const mapped = data
      .filter(item => item.title && item.title.trim() !== '')
      .map(item => ({
        title: (item.title || '').trim(),
        subtitle: (item.subtitle || '').trim(),
        award: (item.award || '').trim(),
        type: (item.type || 'Finalist').trim(),
        linkedinpost: (item.linkedinpost || '').trim(),
        year: (item.year || '').trim() || extractYear(item.title),
        views: parseInt(item.views) || 0,
      }));
    
    console.log('🎯 Mapped achievements:', mapped);
    return mapped;
  } catch (error) {
    console.error('❌ Error getting achievements:', error);
    return [];
  }
};

export const getCachedProjectsSync = () => {
  const data = getCachedDataSync('projects');
  if (!data) return null;

  return data
    .filter(item => item.title && item.title.trim() !== '')
    .map(item => {
      let techArray = [];
      if (item.tech) {
        const techStr = String(item.tech).replace(/^["']|["']$/g, '');
        techArray = techStr.split(',').map(t => t.trim()).filter(t => t);
      }
      
      return {
        title: (item.title || '').trim(),
        description: (item.description || '').trim(),
        status: (item.status || 'Ongoing').trim(),
        tech: techArray,
        link: (item.link || '').trim(),
        image: (item.image || '').trim(),
        year: (item.year || '').trim() || extractYear(item.title),
        views: parseInt(item.views) || 0,
      };
    });
};

// Get all projects
export const getProjects = async () => {
  try {
    const data = await fetchSheetData('projects');
    console.log('🎯 Raw projects data before mapping:', data);
    
    const mapped = data
      .filter(item => item.title && item.title.trim() !== '')
      .map(item => {
        // Handle tech field - might have quotes or be a plain string
        let techArray = [];
        if (item.tech) {
          const techStr = String(item.tech).replace(/^["']|["']$/g, ''); // Remove surrounding quotes
          techArray = techStr.split(',').map(t => t.trim()).filter(t => t);
        }
        
        return {
          title: (item.title || '').trim(),
          description: (item.description || '').trim(),
          status: (item.status || 'Ongoing').trim(),
          tech: techArray,
          link: (item.link || '').trim(),
          image: (item.image || '').trim(),
          year: (item.year || '').trim() || extractYear(item.title),
          views: parseInt(item.views) || 0,
        };
      });
    
    console.log('🎯 Mapped projects:', mapped);
    return mapped;
  } catch (error) {
    console.error('❌ Error getting projects:', error);
    return [];
  }
};
const googleSheets = {
  getAchievements,
  getProjects
};

export default googleSheets;