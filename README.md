# CampusVibe

A modern social platform for campus communities built with React and Node.js.

## Project Structure

```
CampusVibe/
├── frontend/           # React frontend application
├── backend/           # Node.js backend API
├── docs/             # Documentation files
├── scripts/          # Utility scripts and setup files
├── sql-migrations/   # Database migration files
├── backups/          # Backup files and old versions
├── .env.example      # Environment variables template
└── README.md         # This file
```

## Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm start
```

## Environment Setup

1. Copy `.env.example` to `.env` in both frontend and backend directories
2. Configure your Supabase credentials
3. Set your API URLs

## Documentation

- [System Design](docs/SYSTEM_DESIGN.md)
- [Development Tasks](docs/DEVELOPMENT_TASKS.md)
- [Frontend-Backend Integration](docs/FRONTEND_BACKEND_INTEGRATION.md)
- [Backend Requirements](docs/backend-requirements.md)
- [Supabase Setup](docs/supabase-setup.md)

## Scripts

- `scripts/setup_direct_messages.js` - Setup direct messaging
- `scripts/clear_posts.js` - Clear posts from database

## Database

SQL migration files are located in `sql-migrations/` directory.

## Deployment

See `docs/render-config.md` for deployment configuration.
