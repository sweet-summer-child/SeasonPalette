// Season palette color definitions - arranged by shade similarity
const palettes = {
    'deep-winter': [
        // Blacks and dark grays
        '#000000', '#1C1C1C', '#1E1E1E', '#2F4F4F', '#191970',
        // Whites and light grays
        '#FFFFFF', '#F5F5F5', '#E0E0E0', '#C0C0C0', '#708090',
        // Deep reds and burgundies
        '#8B0000', '#A52A2A', '#B22222', '#DC143C', '#CD5C5C',
        // Deep blues
        '#00008B', '#000080', '#0000CD', '#191970', '#4169E1',
        // Purples and magentas
        '#4B0082', '#483D8B', '#6A5ACD', '#8B008B', '#9400D3',
        // Pinks and hot pinks
        '#C71585', '#FF1493', '#FF00FF', '#DA70D6', '#FF69B4',
        // Blue-grays and steel blues
        '#2F4F4F', '#4682B4', '#B8860B', '#8A2BE2', '#1E90FF'
    ],
    'cool-winter': [
        // Dark grays and charcoals
        '#1C1C1C', '#2F4F4F', '#708090', '#5F9EA0', '#778899',
        // Whites and icy tones
        '#FFFFFF', '#F0F8FF', '#E0FFFF', '#DCDCDC', '#B0C4DE',
        // Cool reds and crimsons
        '#8B0000', '#B22222', '#DC143C', '#CD5C5C', '#C71585',
        // Royal and navy blues
        '#000080', '#191970', '#0000FF', '#0000CD', '#4169E1',
        // Cool purples
        '#4B0082', '#6A5ACD', '#8A2BE2', '#9370DB', '#BA55D3',
        // Hot pinks and magentas
        '#FF1493', '#FF69B4', '#FF6EB4', '#DA70D6', '#FF00FF',
        // Cool blues
        '#1E90FF', '#4682B4', '#8B008B', '#2F4F4F', '#1E90FF'
    ],
    'cool-summer': [
        // Medium grays
        '#696969', '#778899', '#708090', '#A9A9A9', '#C0C0C0',
        // Soft whites and lavenders
        '#F0F8FF', '#E6E6FA', '#DCDCDC', '#D3D3D3', '#D8BFD8',
        // Dusty roses and mauves
        '#BC8F8F', '#F08080', '#FFB6C1', '#FFC0CB', '#DDA0DD',
        // Soft blues
        '#B0C4DE', '#ADD8E6', '#B0E0E6', '#87CEEB', '#87CEFA',
        // Periwinkles and soft purples
        '#9370DB', '#9966CC', '#BA55D3', '#DDA0DD', '#EE82EE',
        // Powder blues and aquas
        '#AFEEEE', '#B0C4DE', '#C0C0C0', '#D8BFD8', '#E6E6FA',
        // Muted tones
        '#778899', '#A9A9A9', '#BC8F8F', '#E0B0FF', '#D8BFD8'
    ],
    'soft-summer': [
        // Soft grays and taupes
        '#A9A9A9', '#BEBEBE', '#C0C0C0', '#D3D3D3', '#C1CDC1',
        // Creams and ivories
        '#F5F5DC', '#FFFFF0', '#FFFACD', '#FAF0E6', '#FAFAD2',
        // Dusty roses and mauves
        '#BC8F8F', '#D2B48C', '#DEB887', '#F5DEB3', '#E6E6FA',
        // Soft greens
        '#8FBC8F', '#9ACD32', '#90EE90', '#98FB98', '#E0EEE0',
        // Soft purples and lavenders
        '#D8BFD8', '#DDA0DD', '#E0B0FF', '#B0C4DE', '#E6E6FA',
        // Soft yellows
        '#F0E68C', '#EEE8AA', '#FAFAD2', '#BDB76B', '#F5DEB3',
        // Muted earth tones
        '#A9A9A9', '#C0C0C0', '#D3D3D3', '#F5F5DC', '#D2B48C'
    ],
    'soft-autumn': [
        // Warm browns and taupes
        '#8B7355', '#A0826D', '#A0522D', '#8B7355', '#B87333',
        // Beiges and tans
        '#DEB887', '#D2B48C', '#F5DEB3', '#FAEBD7', '#D2B48C',
        // Warm oranges and terracottas
        '#CD853F', '#D2691E', '#CC7722', '#CD853F', '#D2691E',
        // Golden browns
        '#DAA520', '#B8860B', '#C19A6B', '#B8860B', '#DAA520',
        // Dusty roses and corals
        '#BC8F8F', '#CD5C5C', '#BC8F8F', '#F4A460', '#DEB887',
        // Warm golds and yellows
        '#E3A857', '#C9AE5D', '#E3CF57', '#BDB76B', '#F5DEB3',
        // Earth tones
        '#A0522D', '#C19A6B', '#D2691E', '#BDB76B', '#8B7355'
    ],
    'warm-autumn': [
        // Deep browns and chocolates
        '#8B4513', '#A0522D', '#A52A2A', '#8B4513', '#8B0000',
        // Burnt oranges and rusts
        '#FF8C00', '#FF4500', '#D2691E', '#FF8C00', '#C04000',
        // Golden yellows
        '#DAA520', '#B8860B', '#FFD700', '#DAA520', '#B8860B',
        // Warm oranges
        '#FFA500', '#FF7F50', '#FF6347', '#FFA500', '#FF7F50',
        // Terracottas and siennas
        '#CD853F', '#D2691E', '#CD853F', '#D2691E', '#A0522D',
        // Warm reds and crimsons
        '#DC143C', '#B22222', '#CD5C5C', '#DC143C', '#8B0000',
        // Corals and salmons
        '#FF6347', '#E9967A', '#FA8072', '#FF4500', '#FF7F50'
    ],
    'warm-spring': [
        // Bright golds
        '#FFD700', '#FFD700', '#FFC125', '#FFB90F', '#FFD700',
        // Warm yellows
        '#FFFF00', '#FFFFE0', '#FFEC8B', '#F0E68C', '#FFDEAD',
        // Peachy corals
        '#FF6347', '#FF7F50', '#FF7256', '#FA8072', '#FF6347',
        // Bright oranges
        '#FFA500', '#FF8C00', '#FFA500', '#FF8C00', '#FFA07A',
        // Warm pinks
        '#FFB6C1', '#FFDAB9', '#FFE4B5', '#FFEFD5', '#FFD39B',
        // Apricots and peaches
        '#FFA07A', '#FA8072', '#FFDEAD', '#FFDAB9', '#FFE4B5',
        // Light warm tones
        '#FFEC8B', '#F0E68C', '#FFEFD5', '#FFD39B', '#FFC125'
    ],
    'clear-spring': [
        // Bright turquoises and cyans
        '#00CED1', '#40E0D0', '#00BFFF', '#00CED1', '#40E0D0',
        // Bright pinks and magentas
        '#FF69B4', '#FF1493', '#FF69B4', '#FF1493', '#FF00FF',
        // Bright yellows and golds
        '#FFD700', '#FFFF00', '#FFD700', '#FFD700', '#FFFF00',
        // Bright greens
        '#7FFF00', '#00FA9A', '#00FF7F', '#32CD32', '#00FF00',
        // Bright corals and reds
        '#FF6347', '#FF6347', '#FF6347', '#1E90FF', '#00BFFF',
        // Lime and chartreuse
        '#ADFF2F', '#7FFF00', '#ADFF2F', '#32CD32', '#00FF7F',
        // Vivid blues
        '#1E90FF', '#00BFFF', '#40E0D0', '#00FA9A', '#FF69B4'
    ]
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

// Draw color swatches overlay - optimized for iPhone display
function drawOverlay() {
    ctx.clearRect(0, 0, overlay.width, overlay.height);
    
    const colors = palettes[currentPalette];
    
    // Fixed 5 columns layout
    const cols = 5;
    const rows = Math.ceil(colors.length / cols);
    
    // Maximize screen usage - account for controls at bottom
    const availableWidth = overlay.width * 0.75; // Use 75% of width
    const availableHeight = overlay.height * 0.70; // Use 70% of height (leave room for controls)
    
    // Calculate optimal circle size to fill the space
    const horizontalSpacing = availableWidth * 0.02; // 2% of width for spacing
    const verticalSpacing = availableHeight * 0.015; // 1.5% of height for spacing
    
    const swatchSizeByWidth = (availableWidth - (cols - 1) * horizontalSpacing) / cols;
    const swatchSizeByHeight = (availableHeight - (rows - 1) * verticalSpacing) / rows;
    const swatchSize = Math.min(swatchSizeByWidth, swatchSizeByHeight);
    
    const totalWidth = cols * swatchSize + (cols - 1) * horizontalSpacing;
    const totalHeight = rows * swatchSize + (rows - 1) * verticalSpacing;
    
    const startX = (overlay.width - totalWidth) / 2;
    const startY = (overlay.height - totalHeight) / 2;
    
    colors.forEach((color, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const x = startX + col * (swatchSize + horizontalSpacing) + swatchSize / 2;
        const y = startY + row * (swatchSize + verticalSpacing) + swatchSize / 2;
        
        // Draw swatch circle
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, swatchSize / 2, 0, Math.PI * 2);
        ctx.fill();
    });
}



// Palette button handlers
document.querySelectorAll('.palette-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.palette-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentPalette = btn.dataset.palette;
        drawOverlay();
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

// Handle orientation changes
window.addEventListener('resize', () => {
    if (video.videoWidth && video.videoHeight) {
        overlay.width = video.videoWidth;
        overlay.height = video.videoHeight;
        drawOverlay();
    }
});
