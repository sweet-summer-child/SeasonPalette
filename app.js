// Season palette color definitions with subcategories
const palettes = {
    'deep-winter-general': [
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
    'deep-winter-lights-brights': [
        // Icy whites and light grays
        '#FFFFFF', '#F5F5F5', '#F8F8FF', '#FFFAFA', '#F0FFFF',
        '#E0E0E0', '#F0F8FF', '#DCDCDC', '#C0C0C0', '#E6E6FA',
        // Bright pinks and magentas
        '#FF1493', '#FF00FF', '#FF69B4', '#DA70D6', '#FFB6C1',
        '#FFC0CB', '#FFE4E1', '#FFF0F5', '#C71585', '#DDA0DD',
        // Bright blues
        '#4169E1', '#1E90FF', '#4682B4', '#00BFFF', '#87CEEB',
        '#B0E0E6', '#87CEFA', '#B0C4DE', '#ADD8E6', '#AFEEEE',
        // Bright reds and purples
        '#DC143C', '#CD5C5C', '#8A2BE2', '#D8BFD8', '#F0F8FF'
    ],
    'deep-winter-deeps': [
        // Deep blacks and navies
        '#000080', '#00008B', '#0000CD', '#191970', '#4B0082',
        '#483D8B', '#2F4F4F', '#708090', '#5F9EA0', '#36454F',
        // Deep reds and burgundies
        '#8B0000', '#A52A2A', '#B22222', '#DC143C', '#800000',
        '#CD5C5C', '#C71585', '#8B4513', '#A0522D', '#B8860B',
        // Deep purples and blues
        '#8B008B', '#9400D3', '#6A5ACD', '#4169E1', '#4682B4',
        '#8A2BE2', '#6A5ACD', '#483D8B', '#191970', '#000080'
    ],
    'deep-winter-dark-neutrals': [
        // Pure blacks to dark grays
        '#000000', '#1C1C1C', '#1E1E1E', '#28282B', '#36454F',
        '#3B3B3B', '#414141', '#454545', '#4A4A4A', '#505050',
        // Medium dark grays
        '#555555', '#5A5A5A', '#696969', '#708090', '#778899',
        '#2F4F4F', '#36454F', '#3C3C3C', '#434343', '#4D4D4D',
        // Light grays
        '#595959', '#666666', '#737373', '#808080', '#8B8B8B',
        '#A9A9A9', '#BEBEBE', '#C0C0C0', '#D3D3D3', '#DCDCDC',
        '#E0E0E0', '#E8E8E8', '#F5F5F5', '#191970', '#2F4F4F'
    ],
    'deep-winter-mids': [
        // Medium grays and blues
        '#708090', '#778899', '#5F9EA0', '#4682B4', '#A9A9A9',
        '#C0C0C0', '#B0C4DE', '#87CEEB', '#87CEFA', '#B0E0E6',
        // Medium purples and pinks
        '#6A5ACD', '#9370DB', '#BA55D3', '#DA70D6', '#C71585',
        '#8B008B', '#8A2BE2', '#DDA0DD', '#AFEEEE', '#ADD8E6',
        // Medium reds and earth tones
        '#CD5C5C', '#B22222', '#DC143C', '#4169E1', '#1E90FF',
        '#BC8F8F', '#CD853F', '#D2691E', '#B8860B', '#DAA520',
        '#BDB76B', '#8FBC8F', '#90EE90', '#98FB98', '#9370DB'
    ],
    'cool-winter-general': [
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
    'cool-winter-lights-brights': [
        // Icy whites and light tones
        '#FFFFFF', '#F0F8FF', '#E0FFFF', '#F5F5F5', '#DCDCDC',
        '#F8F8FF', '#FFFAFA', '#B0C4DE', '#ADD8E6', '#AFEEEE',
        // Bright pinks and magentas
        '#FF1493', '#FF69B4', '#FF00FF', '#DA70D6', '#EE82EE',
        '#FF6EB4', '#FFB6C1', '#FFC0CB', '#FFE4E1', '#FFF0F5',
        // Bright blues
        '#4169E1', '#1E90FF', '#00BFFF', '#87CEEB', '#B0E0E6',
        '#87CEFA', '#4682B4', '#6495ED', '#E0FFFF', '#F0F8FF',
        // Bright purples and reds
        '#C71585', '#BA55D3', '#9370DB', '#8A2BE2', '#9400D3',
        '#DC143C', '#CD5C5C', '#B0C4DE', '#DDA0DD', '#D8BFD8'
    ],
    'cool-winter-deeps': [
        // Deep blacks and navies
        '#000080', '#00008B', '#0000CD', '#0000FF', '#191970',
        '#1C1C1C', '#2F4F4F', '#36454F', '#000000', '#1E4D8B',
        // Deep reds and burgundies
        '#8B0000', '#B22222', '#DC143C', '#C71585', '#800000',
        '#A52A2A', '#CD5C5C', '#B22222', '#8B0000', '#C71585',
        // Deep purples and blues
        '#4B0082', '#483D8B', '#6A5ACD', '#8B008B', '#9400D3',
        '#800080', '#4B0082', '#6A0DAD', '#4169E1', '#1E90FF',
        // Deep cool tones
        '#2F4F4F', '#708090', '#5F9EA0', '#4682B4', '#000080'
    ],
    'cool-winter-dark-neutrals': [
        // Pure blacks to dark grays
        '#000000', '#1C1C1C', '#2F4F4F', '#36454F', '#28282B',
        '#3B3B3B', '#414141', '#454545', '#4A4A4A', '#505050',
        // Medium dark grays
        '#555555', '#5A5A5A', '#696969', '#708090', '#778899',
        '#2F4F4F', '#36454F', '#3C3C3C', '#434343', '#4D4D4D',
        // Light grays
        '#595959', '#666666', '#737373', '#808080', '#8B8B8B',
        '#A9A9A9', '#BEBEBE', '#C0C0C0', '#D3D3D3', '#DCDCDC',
        '#E0E0E0', '#E8E8E8', '#F0F0F0', '#F5F5F5', '#FAFAFA'
    ],
    'cool-winter-mids': [
        // Medium grays and blues
        '#708090', '#778899', '#5F9EA0', '#4682B4', '#6495ED',
        '#A9A9A9', '#C0C0C0', '#D3D3D3', '#DCDCDC', '#E0E0E0',
        // Medium purples and pinks
        '#6A5ACD', '#9370DB', '#BA55D3', '#DA70D6', '#C71585',
        '#8B008B', '#8A2BE2', '#DDA0DD', '#D8BFD8', '#E6E6FA',
        // Medium blues and reds
        '#CD5C5C', '#DC143C', '#B22222', '#4169E1', '#1E90FF',
        '#87CEEB', '#B0C4DE', '#ADD8E6', '#B0E0E6', '#AFEEEE',
        '#87CEFA', '#6495ED', '#4682B4', '#5F9EA0', '#708090'
    ],
    'cool-summer-general': [
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
    'cool-summer-lights-brights': [
        // Soft whites and pastels
        '#F0F8FF', '#F5F5F5', '#FFFAFA', '#F8F8FF', '#E6E6FA',
        '#DCDCDC', '#D3D3D3', '#E0E0E0', '#F0F0F0', '#FAFAFA',
        // Soft pinks and roses
        '#FFB6C1', '#FFC0CB', '#FFE4E1', '#FFF0F5', '#FAEBD7',
        '#F08080', '#E9967A', '#FA8072', '#FFA07A', '#FFE4E1',
        // Soft blues and aquas
        '#E0FFFF', '#F0FFFF', '#AFEEEE', '#B0E0E6', '#ADD8E6',
        '#87CEEB', '#87CEFA', '#B0C4DE', '#D8BFD8', '#DDA0DD',
        // Soft purples and lavenders
        '#EE82EE', '#E0B0FF', '#D8BFD8', '#E6E6FA', '#F0E68C',
        '#FFFACD', '#FAFAD2', '#EEE8AA', '#F5DEB3', '#FFFFF0'
    ],
    'cool-summer-deeps': [
        // Deep grays and charcoals
        '#696969', '#708090', '#778899', '#2F4F4F', '#556B2F',
        '#36454F', '#3C3C3C', '#434343', '#4D4D4D', '#595959',
        // Deep muted greens
        '#6B8E23', '#808000', '#8B7355', '#A0522D', '#8B4513',
        '#556B2F', '#6B8E23', '#808000', '#2F4F4F', '#3C3C3C',
        // Deep purples and blues
        '#9370DB', '#8A2BE2', '#9400D3', '#8B008B', '#800080',
        '#BA55D3', '#9966CC', '#663399', '#6A5ACD', '#483D8B',
        // Deep muted reds
        '#BC8F8F', '#CD5C5C', '#A52A2A', '#8B4513', '#A0522D',
        '#5F9EA0', '#4682B4', '#6495ED', '#4169E1', '#1E90FF'
    ],
    'cool-summer-dark-neutrals': [
        // Dark grays
        '#696969', '#708090', '#778899', '#2F4F4F', '#36454F',
        '#3C3C3C', '#434343', '#4D4D4D', '#595959', '#666666',
        // Medium grays
        '#737373', '#808080', '#8B8B8B', '#A9A9A9', '#BEBEBE',
        '#C0C0C0', '#D3D3D3', '#DCDCDC', '#E0E0E0', '#E8E8E8',
        // Muted earth tones
        '#696969', '#778899', '#708090', '#2F4F4F', '#556B2F',
        '#6B8E23', '#808000', '#8B7355', '#A0826D', '#8B8B8B',
        // Light grays
        '#A9A9A9', '#BEBEBE', '#C0C0C0', '#D3D3D3', '#DCDCDC',
        '#E0E0E0', '#E8E8E8', '#F0F0F0', '#F5F5F5', '#FAFAFA'
    ],
    'cool-summer-mids': [
        // Medium grays
        '#778899', '#708090', '#A9A9A9', '#C0C0C0', '#BEBEBE',
        '#D3D3D3', '#DCDCDC', '#E0E0E0', '#696969', '#808080',
        // Medium purples and mauves
        '#9370DB', '#BA55D3', '#DDA0DD', '#D8BFD8', '#E0B0FF',
        '#9966CC', '#8A2BE2', '#BC8F8F', '#CD5C5C', '#F08080',
        // Medium blues
        '#B0C4DE', '#ADD8E6', '#87CEEB', '#87CEFA', '#B0E0E6',
        '#AFEEEE', '#5F9EA0', '#4682B4', '#6495ED', '#6A5ACD',
        // Medium earth tones
        '#BC8F8F', '#D2B48C', '#DEB887', '#BDB76B', '#F0E68C',
        '#EEE8AA', '#D3D3D3', '#C0C0C0', '#A9A9A9', '#778899'
    ],
    'soft-summer-general': [
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
    'soft-summer-lights-brights': [
        // Soft whites and creams
        '#FFFFF0', '#FFFACD', '#FAFAD2', '#F5F5DC', '#FAF0E6',
        '#FFF5EE', '#FAEBD7', '#FFEFD5', '#FFE4E1', '#FFF0F5',
        // Soft lavenders and purples
        '#E6E6FA', '#E0B0FF', '#D8BFD8', '#DDA0DD', '#EE82EE',
        '#F0F8FF', '#E0FFFF', '#F0FFFF', '#F5FFFA', '#F0FFF0',
        // Soft blues and aquas
        '#E0EEE0', '#F5FFFA', '#AFEEEE', '#B0E0E6', '#ADD8E6',
        '#87CEEB', '#87CEFA', '#B0C4DE', '#D8BFD8', '#E6E6FA',
        // Soft yellows and pastels
        '#FFFACD', '#FAFAD2', '#EEE8AA', '#F0E68C', '#FFFFE0',
        '#FFFFF0', '#F5F5DC', '#FAF0E6', '#FFF5EE', '#E0E0E0'
    ],
    'soft-summer-deeps': [
        // Deep muted greens
        '#8FBC8F', '#6B8E23', '#808000', '#556B2F', '#66CDAA',
        '#2E8B57', '#3CB371', '#20B2AA', '#008B8B', '#2F4F4F',
        // Deep muted browns and roses
        '#8B7355', '#A0826D', '#BC8F8F', '#CD5C5C', '#A52A2A',
        '#8B4513', '#A0522D', '#B8860B', '#DAA520', '#BDB76B',
        // Deep purples and blues
        '#9370DB', '#8A2BE2', '#9400D3', '#8B008B', '#BA55D3',
        '#708090', '#778899', '#696969', '#2F4F4F', '#5F9EA0',
        // Deep cool tones
        '#4682B4', '#6495ED', '#4169E1', '#6A5ACD', '#483D8B'
    ],
    'soft-summer-dark-neutrals': [
        // Dark grays
        '#696969', '#708090', '#778899', '#A9A9A9', '#BEBEBE',
        '#666666', '#737373', '#808080', '#8B8B8B', '#595959',
        // Medium grays
        '#C0C0C0', '#D3D3D3', '#DCDCDC', '#E0E0E0', '#E8E8E8',
        '#F0F0F0', '#F5F5F5', '#FAFAFA', '#FFFFFF', '#F8F8F8',
        // Muted earth tones
        '#8B7355', '#A0826D', '#BC8F8F', '#D2B48C', '#DEB887',
        '#696969', '#778899', '#708090', '#2F4F4F', '#556B2F',
        // Light neutrals
        '#6B8E23', '#808000', '#8B8B8B', '#A9A9A9', '#BEBEBE'
    ],
    'soft-summer-mids': [
        // Medium grays and taupes
        '#A9A9A9', '#BEBEBE', '#C0C0C0', '#D3D3D3', '#BC8F8F',
        '#D2B48C', '#DEB887', '#F5DEB3', '#BDB76B', '#D2B48C',
        // Medium greens
        '#8FBC8F', '#9ACD32', '#90EE90', '#98FB98', '#66CDAA',
        '#3CB371', '#2E8B57', '#20B2AA', '#5F9EA0', '#4682B4',
        // Medium purples and mauves
        '#D8BFD8', '#DDA0DD', '#E0B0FF', '#B0C4DE', '#9370DB',
        '#BA55D3', '#DA70D6', '#EE82EE', '#D8BFD8', '#E6E6FA',
        // Medium yellows and blues
        '#F0E68C', '#EEE8AA', '#FAFAD2', '#FFFACD', '#F5DEB3'
    ],
    'soft-autumn-general': [
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
    'soft-autumn-lights-brights': [
        '#FAEBD7', '#F5DEB3', '#FFEFD5', '#FFE4B5', '#FFDAB9',
        '#FFDEAD', '#FFE4C4', '#FFEBCD', '#FFF8DC', '#FFFAF0',
        '#F0E68C', '#EEE8AA', '#FAFAD2', '#FFFACD', '#FFFFE0',
        '#E3CF57', '#F4A460', '#FFD39B', '#FFDAB9', '#FFEFD5',
        '#DEB887', '#D2B48C', '#F5DEB3', '#C19A6B', '#E3A857',
        '#BDB76B', '#DAA520', '#B8860B', '#C9AE5D', '#D2B48C',
        '#FAEBD7', '#F5F5DC', '#FFF5EE', '#FAF0E6', '#FFFFF0'
    ],
    'soft-autumn-deeps': [
        '#8B4513', '#A0522D', '#A52A2A', '#8B7355', '#B87333',
        '#CD853F', '#D2691E', '#CC7722', '#C04000', '#8B4513',
        '#DAA520', '#B8860B', '#CD853F', '#D2691E', '#A0522D',
        '#BC8F8F', '#CD5C5C', '#A52A2A', '#8B4513', '#A0826D',
        '#8B7355', '#6B4423', '#704214', '#654321', '#5C4033',
        '#8B4513', '#A0522D', '#CD853F', '#D2691E', '#B8860B',
        '#A0826D', '#8B7355', '#B87333', '#CC7722', '#C04000'
    ],
    'soft-autumn-dark-neutrals': [
        '#8B7355', '#A0826D', '#8B4513', '#6B4423', '#704214',
        '#654321', '#5C4033', '#4E3629', '#3D2B1F', '#362819',
        '#696969', '#708090', '#778899', '#A9A9A9', '#8B8B8B',
        '#8B7355', '#A0826D', '#BC8F8F', '#D2B48C', '#C19A6B',
        '#A0522D', '#8B4513', '#6B4423', '#704214', '#654321',
        '#BEBEBE', '#C0C0C0', '#D3D3D3', '#DCDCDC', '#E0E0E0',
        '#8B7355', '#A0826D', '#BC8F8F', '#D2B48C', '#DEB887'
    ],
    'soft-autumn-mids': [
        '#A0826D', '#BC8F8F', '#D2B48C', '#DEB887', '#C19A6B',
        '#CD853F', '#D2691E', '#DAA520', '#B8860B', '#BDB76B',
        '#F4A460', '#E3A857', '#C9AE5D', '#CC7722', '#B87333',
        '#BC8F8F', '#CD5C5C', '#F08080', '#E9967A', '#FA8072',
        '#F0E68C', '#EEE8AA', '#FAFAD2', '#BDB76B', '#DAA520',
        '#8B7355', '#A0826D', '#A0522D', '#8B4513', '#B8860B',
        '#D2B48C', '#DEB887', '#F5DEB3', '#C19A6B', '#E3A857'
    ],
    'warm-autumn-general': [
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
    'warm-autumn-lights-brights': [
        // Bright golds and yellows
        '#FFD700', '#FFC125', '#FFB90F', '#FFEC8B', '#F0E68C',
        '#FAFAD2', '#FFFACD', '#FFFFE0', '#FFFFF0', '#F5F5DC',
        // Bright oranges and corals
        '#FFA500', '#FF8C00', '#FF7F50', '#FF6347', '#FF4500',
        '#FFA07A', '#FA8072', '#E9967A', '#F4A460', '#FFD39B',
        // Light peaches and creams
        '#FFDAB9', '#FFE4B5', '#FFDEAD', '#FFEFD5', '#FFE4C4',
        '#FFEBCD', '#FFF8DC', '#FFFAF0', '#FFF5EE', '#FAEBD7',
        // Warm light tones
        '#DAA520', '#B8860B', '#CD853F', '#D2B48C', '#DEB887'
    ],
    'warm-autumn-deeps': [
        // Deep browns and chocolates
        '#8B4513', '#A0522D', '#A52A2A', '#800000', '#8B0000',
        '#6B4423', '#704214', '#654321', '#5C4033', '#4E3629',
        // Deep reds and burgundies
        '#B22222', '#DC143C', '#CD5C5C', '#A52A2A', '#8B4513',
        '#8B0000', '#800000', '#A52A2A', '#B22222', '#DC143C',
        // Deep oranges and terracottas
        '#D2691E', '#CD853F', '#CC7722', '#C04000', '#8B4513',
        '#A0522D', '#CD853F', '#D2691E', '#B8860B', '#DAA520',
        // Deep earth tones
        '#8B4513', '#A0522D', '#CD853F', '#D2691E', '#B8860B'
    ],
    'warm-autumn-dark-neutrals': [
        // Deep browns
        '#8B4513', '#A0522D', '#6B4423', '#704214', '#654321',
        '#5C4033', '#4E3629', '#3D2B1F', '#362819', '#2C1810',
        // Dark grays
        '#696969', '#708090', '#778899', '#8B8B8B', '#A9A9A9',
        '#666666', '#737373', '#808080', '#595959', '#4D4D4D',
        // Warm dark neutrals
        '#8B7355', '#A0826D', '#BC8F8F', '#D2B48C', '#C19A6B',
        '#8B4513', '#A0522D', '#A52A2A', '#800000', '#8B0000',
        // Light grays
        '#BEBEBE', '#C0C0C0', '#D3D3D3', '#DCDCDC', '#E0E0E0'
    ],
    'warm-autumn-mids': [
        // Medium browns and tans
        '#CD853F', '#D2691E', '#DAA520', '#B8860B', '#BDB76B',
        '#C19A6B', '#D2B48C', '#DEB887', '#F5DEB3', '#BC8F8F',
        // Medium oranges
        '#FF8C00', '#FFA500', '#FF7F50', '#FF6347', '#FF4500',
        '#F4A460', '#E9967A', '#FA8072', '#FFA07A', '#CD5C5C',
        // Medium reds and golds
        '#DC143C', '#B22222', '#A52A2A', '#8B4513', '#A0522D',
        '#CC7722', '#C04000', '#B87333', '#C9AE5D', '#E3A857',
        // Medium earth tones
        '#DAA520', '#B8860B', '#CD853F', '#D2691E', '#A0522D'
    ],
    'warm-spring-general': [
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
    'warm-spring-lights-brights': [
        // Bright yellows and golds
        '#FFFF00', '#FFFFE0', '#FFFACD', '#FAFAD2', '#FFFFE0',
        '#FFD700', '#FFC125', '#FFB90F', '#FFEC8B', '#F0E68C',
        // Bright peachy corals
        '#FF6347', '#FF7F50', '#FF7256', '#FA8072', '#FFA07A',
        '#FFD39B', '#FFDAB9', '#FFE4B5', '#FFEFD5', '#FFE4C4',
        // Bright oranges and pinks
        '#FFA500', '#FF8C00', '#FFB6C1', '#FFDAB9', '#FFDEAD',
        '#FFEFD5', '#FFEBCD', '#FFF8DC', '#FFFAF0', '#FFF5EE',
        // Light warm tones
        '#FFFFE0', '#FFFFF0', '#F5F5DC', '#FAF0E6', '#FAEBD7'
    ],
    'warm-spring-deeps': [
        // Deep oranges and reds
        '#FF8C00', '#FF4500', '#FF6347', '#DC143C', '#B22222',
        '#CD5C5C', '#A52A2A', '#8B4513', '#C04000', '#CC7722',
        // Deep warm tones
        '#FFA500', '#FF7F50', '#FA8072', '#E9967A', '#F4A460',
        '#FF7256', '#FF6347', '#DC143C', '#B22222', '#8B4513',
        // Deep golds and browns
        '#DAA520', '#B8860B', '#CD853F', '#D2691E', '#A0522D',
        '#B87333', '#A0522D', '#8B4513', '#BDB76B', '#CC7722',
        // Deep earth tones
        '#DAA520', '#B8860B', '#CD853F', '#D2691E', '#BDB76B'
    ],
    'warm-spring-dark-neutrals': [
        // Warm browns
        '#8B7355', '#A0826D', '#BC8F8F', '#D2B48C', '#C19A6B',
        '#8B4513', '#A0522D', '#6B4423', '#704214', '#654321',
        // Medium grays
        '#696969', '#708090', '#778899', '#8B8B8B', '#A9A9A9',
        '#BEBEBE', '#C0C0C0', '#D3D3D3', '#DCDCDC', '#E0E0E0',
        // Warm neutrals
        '#8B7355', '#A0826D', '#BC8F8F', '#D2B48C', '#DEB887',
        '#F5DEB3', '#C19A6B', '#E3A857', '#C9AE5D', '#BDB76B',
        // Light grays
        '#A9A9A9', '#BEBEBE', '#C0C0C0', '#D3D3D3', '#DCDCDC'
    ],
    'warm-spring-mids': [
        // Medium oranges and corals
        '#FFA500', '#FF8C00', '#FF7F50', '#FF6347', '#FA8072',
        '#FFA07A', '#E9967A', '#F4A460', '#FFD39B', '#FFDAB9',
        // Medium golds and yellows
        '#FFD700', '#FFC125', '#FFB90F', '#FFEC8B', '#F0E68C',
        '#FFDEAD', '#FFE4B5', '#FFEFD5', '#FFE4C4', '#FFEBCD',
        // Medium browns and tans
        '#DAA520', '#B8860B', '#CD853F', '#D2691E', '#BDB76B',
        '#FFB6C1', '#FFDAB9', '#FFDEAD', '#F5DEB3', '#D2B48C',
        // Medium warm tones
        '#C19A6B', '#E3A857', '#C9AE5D', '#DEB887', '#BC8F8F'
    ],
    'clear-spring-general': [
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
    ],
    'clear-spring-lights-brights': [
        // Bright yellows and whites
        '#FFFF00', '#FFFFE0', '#F0FFFF', '#E0FFFF', '#FFFACD',
        '#FAFAD2', '#FFFFF0', '#F5F5DC', '#FFFAFA', '#F0F8FF',
        // Bright turquoises and cyans
        '#00FFFF', '#00CED1', '#40E0D0', '#7FFFD4', '#BFEFFF',
        '#AFEEEE', '#00E5EE', '#00C5CD', '#00B2EE', '#87CEEB',
        // Bright pinks and magentas
        '#FF69B4', '#FF1493', '#FF00FF', '#EE82EE', '#DA70D6',
        '#FFC0CB', '#FFB6C1', '#FFDAB9', '#FFE4B5', '#FFEFD5',
        // Bright greens and blues
        '#7FFF00', '#ADFF2F', '#00FF00', '#00FF7F', '#00FA9A',
        '#00BFFF', '#87CEEB', '#87CEFA', '#1E90FF', '#4169E1'
    ],
    'clear-spring-deeps': [
        // Deep turquoises and teals
        '#00CED1', '#008B8B', '#20B2AA', '#5F9EA0', '#008080',
        '#00868B', '#00C5CD', '#00B2EE', '#009ACD', '#007BA7',
        // Deep pinks and magentas
        '#FF1493', '#C71585', '#FF00FF', '#8B008B', '#9400D3',
        '#8B0A50', '#CD1076', '#EE1289', '#FF1493', '#C71585',
        // Deep yellows and golds
        '#FFD700', '#DAA520', '#B8860B', '#FF8C00', '#FFA500',
        '#CD8500', '#EE9A00', '#FF9912', '#CDAD00', '#EEB422',
        // Deep greens and blues
        '#32CD32', '#228B22', '#008000', '#006400', '#00FF00',
        '#1E90FF', '#0000FF', '#0000CD', '#00008B', '#191970'
    ],
    'clear-spring-dark-neutrals': [
        // Dark grays
        '#696969', '#708090', '#778899', '#2F4F4F', '#36454F',
        '#3C3C3C', '#434343', '#4D4D4D', '#595959', '#666666',
        // Medium grays
        '#737373', '#808080', '#8B8B8B', '#A9A9A9', '#BEBEBE',
        '#C0C0C0', '#D3D3D3', '#DCDCDC', '#E0E0E0', '#E8E8E8',
        // Muted earth tones
        '#696969', '#778899', '#708090', '#2F4F4F', '#556B2F',
        '#6B8E23', '#808000', '#8B7355', '#A0826D', '#8B8B8B',
        // Light grays
        '#A9A9A9', '#BEBEBE', '#C0C0C0', '#D3D3D3', '#DCDCDC',
        '#E0E0E0', '#E8E8E8', '#F0F0F0', '#F5F5F5', '#FAFAFA'
    ],
    'clear-spring-mids': [
        // Medium turquoises and cyans
        '#40E0D0', '#48D1CC', '#00CED1', '#20B2AA', '#5F9EA0',
        '#00CDB5', '#00E5EE', '#00C5CD', '#00B2EE', '#87CEEB',
        // Medium pinks and magentas
        '#FF69B4', '#FF1493', '#FF00FF', '#DA70D6', '#EE82EE',
        '#FF6EB4', '#EE6AA7', '#CD6090', '#8B3A62', '#FF1493',
        // Medium yellows and golds
        '#FFD700', '#FFC125', '#FFB90F', '#FFEC8B', '#F0E68C',
        '#EEC900', '#CDAD00', '#8B7500', '#FFD700', '#FFC125',
        // Medium greens and blues
        '#7FFF00', '#ADFF2F', '#00FF7F', '#00FA9A', '#32CD32',
        '#1E90FF', '#00BFFF', '#87CEEB', '#87CEFA', '#4169E1'
    ]
};

// Palette subcategory definitions
const paletteSubcategories = {
    'deep-winter': ['general', 'lights-brights', 'deeps', 'dark-neutrals', 'mids'],
    'cool-winter': ['general', 'lights-brights', 'deeps', 'dark-neutrals', 'mids'],
    'cool-summer': ['general', 'lights-brights', 'deeps', 'dark-neutrals', 'mids'],
    'soft-summer': ['general', 'lights-brights', 'deeps', 'dark-neutrals', 'mids'],
    'soft-autumn': ['general', 'lights-brights', 'deeps', 'dark-neutrals', 'mids'],
    'warm-autumn': ['general', 'lights-brights', 'deeps', 'dark-neutrals', 'mids'],
    'warm-spring': ['general', 'lights-brights', 'deeps', 'dark-neutrals', 'mids'],
    'clear-spring': ['general', 'lights-brights', 'deeps', 'dark-neutrals', 'mids']
};

const subcategoryLabels = {
    'general': 'General',
    'lights-brights': 'Lights & Brights',
    'deeps': 'Deeps',
    'dark-neutrals': 'Dark Neutrals',
    'mids': 'Mids'
};

let stream = null;
let currentSeason = 'deep-winter';
let currentSubcategory = 'general';
let currentPalette = 'deep-winter-general';
let facingMode = 'environment'; // Start with back camera
let longPressTimer = null;
let isLongPress = false;

// Audio context for sound effects
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Create iOS-style click sound
function playClickSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 1000;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.05);
}

// Create iOS-style camera shutter sound
function playShutterSound() {
    const oscillator1 = audioContext.createOscillator();
    const oscillator2 = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator1.connect(gainNode);
    oscillator2.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator1.frequency.value = 800;
    oscillator2.frequency.value = 1200;
    oscillator1.type = 'sine';
    oscillator2.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator1.start(audioContext.currentTime);
    oscillator2.start(audioContext.currentTime);
    oscillator1.stop(audioContext.currentTime + 0.1);
    oscillator2.stop(audioContext.currentTime + 0.1);
}

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
            resizeCanvas();
            drawOverlay();
        };
    } catch (error) {
        alert('Camera access denied. Please enable camera permissions.');
        console.error('Camera error:', error);
    }
}

// Resize canvas to match display size for perfect circles
function resizeCanvas() {
    const container = document.getElementById('camera-container');
    const displayWidth = container.offsetWidth;
    const displayHeight = container.offsetHeight;
    
    // Set canvas internal resolution to match display size exactly
    const dpr = window.devicePixelRatio || 1;
    overlay.width = displayWidth * dpr;
    overlay.height = displayHeight * dpr;
    
    // Set canvas CSS size
    overlay.style.width = displayWidth + 'px';
    overlay.style.height = displayHeight + 'px';
    
    // Scale context to account for device pixel ratio
    ctx.scale(dpr, dpr);
}

// Draw color swatches overlay - optimized for iPhone display
function drawOverlay() {
    // Get display dimensions
    const container = document.getElementById('camera-container');
    const displayWidth = container.offsetWidth;
    const displayHeight = container.offsetHeight;
    
    ctx.save(); // Save context state
    ctx.clearRect(0, 0, displayWidth, displayHeight);
    
    const colors = palettes[currentPalette];
    if (!colors) {
        ctx.restore();
        return;
    }
    
    // Fixed 5 columns layout
    const cols = 5;
    const rows = Math.ceil(colors.length / cols);
    
    // Use display dimensions for consistent sizing
    const viewportWidth = displayWidth;
    const viewportHeight = displayHeight;
    
    // Calculate available space - maximize screen
    const availableWidth = viewportWidth * 0.85;
    const availableHeight = viewportHeight * 0.75; // Increased back
    
    // Calculate uniform spacing
    const spacing = Math.min(availableWidth, availableHeight) * 0.03; // Uniform spacing
    
    // Calculate circle size ensuring they fit properly
    const swatchSizeByWidth = (availableWidth - (cols - 1) * spacing) / cols;
    const swatchSizeByHeight = (availableHeight - (rows - 1) * spacing) / rows;
    const swatchSize = Math.min(swatchSizeByWidth, swatchSizeByHeight);
    
    // Ensure minimum size for visibility
    const finalSwatchSize = Math.max(swatchSize, 20);
    
    const totalWidth = cols * finalSwatchSize + (cols - 1) * spacing;
    const totalHeight = rows * finalSwatchSize + (rows - 1) * spacing;
    
    const startX = (viewportWidth - totalWidth) / 2;
    const startY = (viewportHeight - totalHeight) / 2;
    
    // Draw circles with anti-aliasing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    
    colors.forEach((color, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const centerX = startX + col * (finalSwatchSize + spacing) + finalSwatchSize / 2;
        const centerY = startY + row * (finalSwatchSize + spacing) + finalSwatchSize / 2;
        const radius = finalSwatchSize / 2;
        
        // Draw perfect circle
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
    });
    
    ctx.restore(); // Restore context state
}



// Show subcategory menu
function showSubcategoryMenu(season, btnElement) {
    const subcategories = paletteSubcategories[season];
    if (subcategories.length <= 1) return;
    
    // Remove existing menu if any
    const existingMenu = document.querySelector('.subcategory-menu');
    if (existingMenu) existingMenu.remove();
    
    // Create menu
    const menu = document.createElement('div');
    menu.className = 'subcategory-menu';
    
    subcategories.forEach(sub => {
        const option = document.createElement('button');
        option.className = 'subcategory-option';
        option.textContent = subcategoryLabels[sub];
        option.dataset.subcategory = sub;
        if (currentSeason === season && currentSubcategory === sub) {
            option.classList.add('active');
        }
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            playClickSound(); // Play sound
            currentSeason = season;
            currentSubcategory = sub;
            currentPalette = `${season}-${sub}`;
            drawOverlay();
            menu.remove();
            
            // Update button text to show subcategory
            document.querySelectorAll('.palette-btn').forEach(b => b.classList.remove('active'));
            btnElement.classList.add('active');
        });
        menu.appendChild(option);
    });
    
    document.body.appendChild(menu);
    
    // Close menu when clicking outside
    setTimeout(() => {
        const closeHandler = (e) => {
            if (!menu.contains(e.target)) {
                menu.remove();
                document.removeEventListener('click', closeHandler);
                document.removeEventListener('touchstart', closeHandler);
            }
        };
        document.addEventListener('click', closeHandler);
        document.addEventListener('touchstart', closeHandler);
    }, 100);
}

// Palette button handlers with long press
document.querySelectorAll('.palette-btn').forEach(btn => {
    const season = btn.dataset.palette;
    let touchHandled = false;
    
    // Touch events for mobile
    btn.addEventListener('touchstart', (e) => {
        touchHandled = false;
        isLongPress = false;
        longPressTimer = setTimeout(() => {
            isLongPress = true;
            touchHandled = true;
            navigator.vibrate && navigator.vibrate(50); // Haptic feedback
            showSubcategoryMenu(season, btn);
        }, 500); // 500ms for long press
    });
    
    btn.addEventListener('touchend', (e) => {
        clearTimeout(longPressTimer);
        if (!isLongPress && !touchHandled) {
            e.preventDefault(); // Prevent click event
            touchHandled = true;
            playClickSound(); // Play sound
            // Regular tap
            document.querySelectorAll('.palette-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSeason = season;
            currentSubcategory = 'general';
            currentPalette = `${season}-general`;
            drawOverlay();
        }
        // Reset after a short delay
        setTimeout(() => {
            touchHandled = false;
            isLongPress = false;
        }, 100);
    });
    
    btn.addEventListener('touchcancel', () => {
        clearTimeout(longPressTimer);
        touchHandled = false;
        isLongPress = false;
    });
    
    // Mouse events for desktop
    btn.addEventListener('mousedown', (e) => {
        isLongPress = false;
        longPressTimer = setTimeout(() => {
            isLongPress = true;
            showSubcategoryMenu(season, btn);
        }, 500);
    });
    
    btn.addEventListener('mouseup', () => {
        clearTimeout(longPressTimer);
    });
    
    btn.addEventListener('mouseleave', () => {
        clearTimeout(longPressTimer);
    });
    
    btn.addEventListener('click', (e) => {
        if (!isLongPress && !touchHandled) {
            playClickSound(); // Play sound
            document.querySelectorAll('.palette-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSeason = season;
            currentSubcategory = 'general';
            currentPalette = `${season}-general`;
            drawOverlay();
        }
        isLongPress = false; // Reset after click
    });
});

// Initialize app
initCamera();

// Switch camera (front/back)
document.getElementById('switch-camera-button').addEventListener('click', () => {
    playClickSound(); // Play sound
    facingMode = facingMode === 'user' ? 'environment' : 'user';
    initCamera();
});

// Capture photo with iOS-style button
document.getElementById('capture-button').addEventListener('click', () => {
    playShutterSound(); // Play shutter sound
    
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const captureCtx = canvas.getContext('2d');
    
    // Draw video frame
    captureCtx.drawImage(video, 0, 0);
    
    // Redraw overlay at high resolution for capture
    const tempOverlay = document.createElement('canvas');
    tempOverlay.width = video.videoWidth;
    tempOverlay.height = video.videoHeight;
    const tempCtx = tempOverlay.getContext('2d');
    
    const colors = palettes[currentPalette];
    if (!colors) return;
    
    const cols = 5;
    const rows = Math.ceil(colors.length / cols);
    
    const availableWidth = tempOverlay.width * 0.85;
    const availableHeight = tempOverlay.height * 0.75;
    
    const spacing = Math.min(availableWidth, availableHeight) * 0.03; // Uniform spacing
    
    const swatchSizeByWidth = (availableWidth - (cols - 1) * spacing) / cols;
    const swatchSizeByHeight = (availableHeight - (rows - 1) * spacing) / rows;
    const swatchSize = Math.min(swatchSizeByWidth, swatchSizeByHeight);
    const finalSwatchSize = Math.max(swatchSize, 20);
    
    const totalWidth = cols * finalSwatchSize + (cols - 1) * spacing;
    const totalHeight = rows * finalSwatchSize + (rows - 1) * spacing;
    
    const startX = (tempOverlay.width - totalWidth) / 2;
    const startY = (tempOverlay.height - totalHeight) / 2;
    
    tempCtx.imageSmoothingEnabled = true;
    tempCtx.imageSmoothingQuality = 'high';
    
    colors.forEach((color, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const centerX = startX + col * (finalSwatchSize + spacing) + finalSwatchSize / 2;
        const centerY = startY + row * (finalSwatchSize + spacing) + finalSwatchSize / 2;
        const radius = finalSwatchSize / 2;
        
        tempCtx.fillStyle = color;
        tempCtx.beginPath();
        tempCtx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
        tempCtx.closePath();
        tempCtx.fill();
    });
    
    // Draw high-res overlay on capture
    captureCtx.drawImage(tempOverlay, 0, 0);
    
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

// Handle orientation changes
window.addEventListener('resize', () => {
    resizeCanvas();
    drawOverlay();
});
