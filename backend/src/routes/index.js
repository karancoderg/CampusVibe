import express from 'express';
import authRoutes from './auth.js';
import postRoutes from './posts.js';
import profileRoutes from './profiles.js';
import chatRoutes from './chat.js';
import searchRoutes from './search.js';
import communityRoutes from './community.js';
import friendRoutes from './friends.js';

const router = express.Router();

// Mount route modules
router.use('/auth', authRoutes);
router.use('/posts', postRoutes);
router.use('/profiles', profileRoutes);
router.use('/chat', chatRoutes);
router.use('/search', searchRoutes);
router.use('/community', communityRoutes);
router.use('/friends', friendRoutes);

// Placeholder image endpoint
router.get('/placeholder/:width/:height', (req, res) => {
  const { width, height } = req.params;
  const w = parseInt(width) || 40;
  const h = parseInt(height) || 40;
  
  // Generate SVG placeholder
  const svg = `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#e5e7eb"/>
    <text x="50%" y="50%" font-family="Arial" font-size="12" fill="#9ca3af" text-anchor="middle" dy=".3em">
      ${w}×${h}
    </text>
  </svg>`;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=31536000');
  res.send(svg);
});

// API info endpoint
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'CampusConnect API v1.0.0',
    endpoints: {
      auth: '/api/auth',
      posts: '/api/posts',
      profiles: '/api/profiles',
      chat: '/api/chat',
      community: '/api/community',
      friends: '/api/friends',
      placeholder: '/api/placeholder/:width/:height'
    }
  });
});

export default router;
