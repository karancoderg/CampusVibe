# Render Configuration for CampusVibe Backend

## Service Settings

**Name:** `campusvibe-backend`
**Environment:** `Node`
**Region:** `Oregon (US West)` or closest to you
**Branch:** `main`
**Root Directory:** `backend`

## Build & Deploy Settings

**Build Command:**
```
npm install
```

**Start Command:**
```
npm start
```

## Environment Variables

Add these in Render Dashboard → Environment:

```
NODE_ENV=production
PORT=3000
SUPABASE_URL=https://tefsuxgslyowilylcqtw.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlZnN1eGdzbHlvd2lseWxjcXR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxMTExMTYsImV4cCI6MjA3MjY4NzExNn0.pAFVoJgBBdnUnzST2nO-wSgSXB4juiv7oErcLlNpIaI
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlZnN1eGdzbHlvd2lseWxjcXR3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NzExMTExNiwiZXhwIjoyMDcyNjg3MTE2fQ.6v82VuPhy0KU01hom4AesZCx0JPOq_sfTy4icr_2vNg
```

## Health Check

**Health Check Path:** `/health`

## Auto-Deploy

✅ Enable "Auto-Deploy" for automatic deployments on git push
