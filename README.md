# Season Palette Finder

A mobile web app for determining color season palettes using your phone's camera.

## Features

- Live camera preview with color palette overlays
- 8 season palettes: Deep Winter, Cool Winter, Cool Summer, Soft Summer, Soft Autumn, Warm Autumn, Warm Spring, Clear Spring
- Switch between front and back cameras
- Capture and save photos with palette overlays
- Optimized for iPhone and mobile browsers

## How to Use

1. Open `index.html` in your mobile browser (Safari on iPhone)
2. Allow camera permissions when prompted
3. Select a season palette from the buttons
4. View the color swatches overlaid on your camera feed
5. Use "Switch Camera" to toggle between front/back cameras
6. Tap "Capture" to save a photo with the palette overlay

## Running Locally

For testing on your iPhone:

1. Start a local server in this directory:
   ```
   python -m http.server 8000
   ```
   or
   ```
   npx serve
   ```

2. Find your computer's local IP address
3. On your iPhone, open Safari and navigate to `http://YOUR_IP:8000`

## Notes

- Camera access requires HTTPS in production (use a service like Netlify, Vercel, or GitHub Pages)
- Works best in Safari on iOS
- The app is a Progressive Web App (PWA) - you can add it to your home screen
