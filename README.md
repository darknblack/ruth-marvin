# 💕 Wedding Invitation Website

A beautiful, modern wedding invitation website built with React and Tailwind CSS. Perfect for hosting on Vercel or any static hosting service.

## ✨ Features

- **Beautiful Hero Section** - Elegant introduction with couple names
- **Live Countdown Timer** - Real-time countdown to the wedding date
- **Our Story Timeline** - Interactive timeline showcasing your love story
- **Event Details** - Ceremony and reception information
- **Photo Gallery** - Showcase your favorite memories together
- **RSVP Form** - Collect responses from your guests
- **Fully Responsive** - Looks great on all devices
- **Modern Design** - Elegant typography and smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/darknblack/ruth-marvin.git
   cd ruth-marvin
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Customize the wedding details:
   - Edit `src/App.jsx` to set your wedding date
   - Update couple names in `src/components/Hero.jsx`
   - Modify story timeline in `src/components/OurStory.jsx`
   - Update event details in `src/components/EventDetails.jsx`
   - Replace placeholder images in `src/components/Gallery.jsx`

4. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. Build for production:
   ```bash
   pnpm build
   # or
   npm run build
   ```

## 📝 Customization Guide

### Setting the Wedding Date

In `src/App.jsx`, update the `weddingDate` variable:
```javascript
const weddingDate = new Date('2024-12-31 18:00:00').getTime()
```

### Changing Couple Names

Edit `src/components/Hero.jsx` and replace "Sarah" and "Michael" with your names.

### Updating Your Story

Modify the `storyTimeline` array in `src/components/OurStory.jsx` with your own milestones.

### Adding Your Photos

Replace the placeholder images in `src/components/Gallery.jsx` with your actual photos. You can:
- Add images to a `public/images` folder
- Use image URLs from a hosting service
- Or use relative paths to your images

### Event Details

Update venue information in `src/components/EventDetails.jsx`.

### RSVP Form

The RSVP form currently logs to console. For production, you'll want to:
- Connect to a backend service
- Use a service like Formspree, Netlify Forms, or EmailJS
- Or integrate with a database

## 🌐 Deployment

### Deploy to Vercel (Recommended)

**GitHub Repository**: https://github.com/darknblack/ruth-marvin

**Production URL**: https://wedding-beta-three.vercel.app

#### Option 1: Deploy via CLI
```bash
# Deploy to production
pnpm deploy

# Deploy to preview
pnpm deploy:preview
```

#### Option 2: Automatic Deployment via GitHub
1. Connect your GitHub repository to Vercel:
   - Go to [Vercel Dashboard](https://vercel.com/darknblacks-projects/wedding/settings/git)
   - Click "Connect Git Repository"
   - Select GitHub and authorize Vercel
   - Choose `darknblack/ruth-marvin`
2. Every push to the `main` branch will automatically deploy to production
3. Pull requests will create preview deployments automatically

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 🎨 Design Features

- Elegant typography using Google Fonts (Dancing Script & Playfair Display)
- Smooth animations and transitions
- Gradient backgrounds
- Responsive design for mobile, tablet, and desktop
- Beautiful color scheme with rose and pink tones

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal use.

## 💝 Credits

Built with love using:
- React
- Tailwind CSS
- Vite
- Google Fonts

---

**Note**: Remember to customize all placeholder content with your actual wedding information before going live!

