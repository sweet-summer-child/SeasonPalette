// Season palette color definitions
const palettes = {
    'deep-winter': ['#000000', '#FFFFFF', '#8B0000', '#00008B', '#4B0082', '#FF1493', '#2F4F4F', '#DC143C', '#191970', '#8B008B', '#C71585', '#4682B4'],
    'cool-winter': ['#2F4F4F', '#FFFFFF', '#DC143C', '#4169E1', '#9370DB', '#FF69B4', '#000080', '#B22222', '#6A5ACD', '#FF1493', '#1E90FF', '#8B008B'],
    'cool-summer': ['#708090', '#E6E6FA', '#B0C4DE', '#9370DB', '#DDA0DD', '#FFB6C1', '#778899', '#C0C0C0', '#87CEEB', '#BA55D3', '#D8BFD8', '#F08080'],
    'soft-summer': ['#A9A9A9', '#F5F5DC', '#BC8F8F', '#8FBC8F', '#D8BFD8', '#F0E68C', '#B0C4DE', '#DDA0DD', '#98FB98', '#FAFAD2', '#D3D3D3', '#E0B0FF'],
    'soft-autumn': ['#8B7355', '#DEB887', '#CD853F', '#D2691E', '#BC8F8F', '#F4A460', '#A0522D', '#DAA520', '#B8860B', '#CD5C5C', '#D2B48C', '#BDB76B'],
    'warm-autumn': ['#8B4513', '#FF8C00', '#DAA520', '#B8860B', '#CD853F', '#D2691E', '#A0522D', '#FF6347', '#FF7F50', '#DC143C', '#8B0000', '#B22222'],
    'warm-spring': ['#FFD700', '#FF6347', '#FF7F50', '#FFA500', '#FFDAB9', '#FFE4B5', '#FF8C00', '#FFB6C1', '#FFFF00', '#F0E68C', '#FA8072', '#FFA07A'],
    'clear-spring': ['#00CED1', '#FF69B4', '#FFD700', '#7FFF00', '#FF1493', '#00FA9A', '#FF6347', '#00BFFF', '#ADFF2F', '#FF00FF', '#00FF7F', '#FFD700']
};

let stream = null;
let currentPalette = 'deep-winter';
let facingMode = 'user'; // Start with front camera

const video = document.getElementById('camera');
const overlay = document.getElementById('overlay');
const ctx = overlay.getContext('2d');
const swatchesContainer = document.getElementById('color-swatches');

// Initialize camera
async function initCamera() {
    try {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }

        stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: facingMode,
                width: { ideal: 1920 },
                height: { ideal: 1080 }
            },
            audio: false
        });

        video.srcObject = stream;
        
        video.onloadedmetadata = () => {
            overlay.width = video.videoWidth;
            overlay.height = video.videoHeight;
            drawOverlay();
        };
    } catch (error) {
        alert('Camera access denied. Please enable camera permissions.');
        console.error('Camera error:', error);
    }
}

// Draw color swatches overlay
function drawOverlay() {
    ctx.clearRect(0, 0, overlay.width, overlay.height);
    
    const colors = palettes[currentPalette];
    const swatchSize = 45;
    const spacing = 12;
    const totalWidth = colors.length * (swatchSize + spacing) - spacing;
    const rows = Math.ceil(colors.length / 6);
    
    colors.forEach((color, index) => {
        const row = Math.floor(index / 6);
        const col = index % 6;
        const rowWidth = Math.min(6, colors.length - row * 6) * (swatchSize + spacing) - spacing;
        const x = (overlay.width - rowWidth) / 2 + col * (swatchSize + spacing);
        const y = overlay.height - 180 + row * (swatchSize + spacing);
        
        // Draw swatch circle
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x + swatchSize / 2, y + swatchSize / 2, swatchSize / 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw border
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 2;
        ctx.stroke();
    });
}

// Update color swatches display
function updateSwatches() {
    swatchesContainer.innerHTML = '';
    const colors = palettes[currentPalette];
    
    colors.forEach(color => {
        const swatch = document.createElement('div');
        swatch.className = 'color-swatch';
        swatch.style.backgroundColor = color;
        swatchesContainer.appendChild(swatch);
    });
}

// Palette button handlers
document.querySelectorAll('.palette-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.palette-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentPalette = btn.dataset.palette;
        drawOverlay();
        updateSwatches();
    });
});

// Toggle camera (front/back)
document.getElementById('toggle-camera').addEventListener('click', () => {
    facingMode = facingMode === 'user' ? 'environment' : 'user';
    initCamera();
});

// Capture photo
document.getElementById('capture').addEventListener('click', () => {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const captureCtx = canvas.getContext('2d');
    
    // Draw video frame
    captureCtx.drawImage(video, 0, 0);
    
    // Draw overlay
    captureCtx.drawImage(overlay, 0, 0);
    
    // Download image
    canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `season-palette-${currentPalette}-${Date.now()}.jpg`;
        a.click();
        URL.revokeObjectURL(url);
    }, 'image/jpeg', 0.95);
});

// Initialize app
initCamera();
updateSwatches();

// Handle orientation changes
window.addEventListener('resize', () => {
    if (video.videoWidth && video.videoHeight) {
        overlay.width = video.videoWidth;
        overlay.height = video.videoHeight;
        drawOverlay();
    }
});
