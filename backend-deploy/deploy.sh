#!/bin/bash

echo "🚀 CampusVibe Backend Deployment Script"

# Railway deployment
deploy_railway() {
    echo "Deploying to Railway..."
    railway up
}

# Render deployment
deploy_render() {
    echo "Deploying to Render..."
    echo "Push to GitHub and connect repository in Render dashboard"
}

# Vercel deployment
deploy_vercel() {
    echo "Deploying to Vercel..."
    npx vercel --prod
}

case "$1" in
    railway)
        deploy_railway
        ;;
    render)
        deploy_render
        ;;
    vercel)
        deploy_vercel
        ;;
    *)
        echo "Usage: ./deploy.sh [railway|render|vercel]"
        ;;
esac
