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
        '#FFFFFF', '#F5F5F5', '#E0E0E0', '#FF1493', '#FF00FF',
        '#DA70D6', '#FF69B4', '#4169E1', '#1E90FF', '#4682B4',
        '#DC143C', '#CD5C5C', '#C71585', '#8A2BE2', '#00BFFF',
        '#87CEEB', '#B0E0E6', '#FFB6C1', '#FFC0CB', '#E6E6FA',
        '#D8BFD8', '#DDA0DD', '#F0F8FF', '#AFEEEE', '#ADD8E6',
        '#87CEFA', '#B0C4DE', '#C0C0C0', '#DCDCDC', '#F5F5F5',
        '#FFE4E1', '#FFF0F5', '#F8F8FF', '#FFFAFA', '#F0FFFF'
    ],
    'deep-winter-deeps': [
        '#8B0000', '#A52A2A', '#B22222', '#DC143C', '#00008B',
        '#000080', '#0000CD', '#4B0082', '#483D8B', '#6A5ACD',
        '#8B008B', '#9400D3', '#4169E1', '#191970', '#2F4F4F',
        '#8B4513', '#A0522D', '#800000', '#8B0000', '#B8860B',
        '#CD5C5C', '#C71585', '#8A2BE2', '#6A5ACD', '#4682B4',
        '#5F9EA0', '#2F4F4F', '#708090', '#483D8B', '#191970',
        '#000080', '#00008B', '#0000CD', '#4B0082', '#8B008B'
    ],
    'deep-winter-dark-neutrals': [
        '#000000', '#1C1C1C', '#1E1E1E', '#2F4F4F', '#191970',
        '#36454F', '#28282B', '#3B3B3B', '#414141', '#454545',
        '#4A4A4A', '#505050', '#555555', '#5A5A5A', '#696969',
        '#708090', '#778899', '#2F4F4F', '#36454F', '#3C3C3C',
        '#434343', '#4D4D4D', '#595959', '#666666', '#737373',
        '#808080', '#8B8B8B', '#A9A9A9', '#BEBEBE', '#C0C0C0',
        '#D3D3D3', '#DCDCDC', '#E0E0E0', '#E8E8E8', '#F5F5F5'
    ],
    'deep-winter-mids': [
        '#708090', '#778899', '#4682B4', '#5F9EA0', '#6A5ACD',
        '#9370DB', '#8B008B', '#BA55D3', '#DA70D6', '#C71585',
        '#CD5C5C', '#B22222', '#DC143C', '#4169E1', '#1E90FF',
        '#87CEEB', '#B0C4DE', '#9370DB', '#8A2BE2', '#6A5ACD',
        '#A9A9A9', '#C0C0C0', '#BC8F8F', '#CD853F', '#D2691E',
        '#B8860B', '#DAA520', '#BDB76B', '#8FBC8F', '#90EE90',
        '#98FB98', '#AFEEEE', '#87CEFA', '#B0E0E6', '#ADD8E6'
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
        '#FFFFFF', '#F0F8FF', '#E0FFFF', '#DCDCDC', '#F5F5F5',
        '#FF1493', '#FF69B4', '#FF00FF', '#DA70D6', '#EE82EE',
        '#4169E1', '#1E90FF', '#00BFFF', '#87CEEB', '#B0E0E6',
        '#DC143C', '#FF6EB4', '#FFB6C1', '#FFC0CB', '#FFE4E1',
        '#B0C4DE', '#ADD8E6', '#AFEEEE', '#E0FFFF', '#F0F8FF',
        '#DDA0DD', '#D8BFD8', '#E6E6FA', '#F8F8FF', '#FFFAFA',
        '#C71585', '#BA55D3', '#9370DB', '#8A2BE2', '#9400D3'
    ],
    'cool-winter-deeps': [
        '#8B0000', '#B22222', '#DC143C', '#C71585', '#8B008B',
        '#000080', '#191970', '#0000FF', '#0000CD', '#00008B',
        '#4B0082', '#483D8B', '#6A5ACD', '#4169E1', '#1E4D8B',
        '#8A2BE2', '#9400D3', '#800080', '#4B0082', '#6A0DAD',
        '#CD5C5C', '#B22222', '#A52A2A', '#8B0000', '#800000',
        '#2F4F4F', '#191970', '#000080', '#00008B', '#0000CD',
        '#4B0082', '#6A5ACD', '#8B008B', '#9400D3', '#4169E1'
    ],
    'cool-winter-dark-neutrals': [
        '#000000', '#1C1C1C', '#2F4F4F', '#36454F', '#28282B',
        '#3B3B3B', '#414141', '#454545', '#4A4A4A', '#505050',
        '#555555', '#5A5A5A', '#696969', '#708090', '#778899',
        '#2F4F4F', '#36454F', '#3C3C3C', '#434343', '#4D4D4D',
        '#595959', '#666666', '#737373', '#808080', '#8B8B8B',
        '#A9A9A9', '#BEBEBE', '#C0C0C0', '#D3D3D3', '#DCDCDC',
        '#E0E0E0', '#E8E8E8', '#F0F0F0', '#F5F5F5', '#FAFAFA'
    ],
    'cool-winter-mids': [
        '#708090', '#778899', '#5F9EA0', '#4682B4', '#6495ED',
        '#6A5ACD', '#9370DB', '#BA55D3', '#DA70D6', '#C71585',
        '#CD5C5C', '#DC143C', '#B22222', '#4169E1', '#1E90FF',
        '#87CEEB', '#B0C4DE', '#ADD8E6', '#B0E0E6', '#AFEEEE',
        '#A9A9A9', '#C0C0C0', '#D3D3D3', '#DCDCDC', '#E0E0E0',
        '#8A2BE2', '#9370DB', '#8B008B', '#BA55D3', '#DDA0DD',
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
        '#F0F8FF', '#E6E6FA', '#F5F5F5', '#FFFAFA', '#F8F8FF',
        '#FFB6C1', '#FFC0CB', '#FFE4E1', '#FFF0F5', '#FAEBD7',
        '#E0FFFF', '#F0FFFF', '#AFEEEE', '#B0E0E6', '#ADD8E6',
        '#87CEEB', '#87CEFA', '#B0C4DE', '#D8BFD8', '#DDA0DD',
        '#EE82EE', '#E0B0FF', '#D8BFD8', '#DCDCDC', '#E6E6FA',
        '#F0E68C', '#FFFACD', '#FAFAD2', '#EEE8AA', '#F5DEB3',
        '#D3D3D3', '#C0C0C0', '#BEBEBE', '#F5F5DC', '#FFFFF0'
    ],
    'cool-summer-deeps': [
        '#696969', '#708090', '#778899', '#2F4F4F', '#556B2F',
        '#6B8E23', '#808000', '#8B7355', '#A0522D', '#8B4513',
        '#9370DB', '#8A2BE2', '#9400D3', '#8B008B', '#800080',
        '#BA55D3', '#9966CC', '#663399', '#6A5ACD', '#483D8B',
        '#BC8F8F', '#CD5C5C', '#A52A2A', '#8B4513', '#A0522D',
        '#5F9EA0', '#4682B4', '#6495ED', '#4169E1', '#1E90FF',
        '#708090', '#778899', '#696969', '#2F4F4F', '#36454F'
    ],
    'cool-summer-dark-neutrals': [
        '#696969', '#708090', '#778899', '#2F4F4F', '#36454F',
        '#3C3C3C', '#434343', '#4D4D4D', '#595959', '#666666',
        '#737373', '#808080', '#8B8B8B', '#A9A9A9', '#BEBEBE',
        '#C0C0C0', '#D3D3D3', '#DCDCDC', '#E0E0E0', '#E8E8E8',
        '#696969', '#778899', '#708090', '#2F4F4F', '#556B2F',
        '#6B8E23', '#808000', '#8B7355', '#A0826D', '#8B8B8B',
        '#A9A9A9', '#BEBEBE', '#C0C0C0', '#D3D3D3', '#DCDCDC'
    ],
    'cool-summer-mids': [
        '#778899', '#708090', '#A9A9A9', '#C0C0C0', '#BC8F8F',
        '#9370DB', '#BA55D3', '#DDA0DD', '#D8BFD8', '#E0B0FF',
        '#B0C4DE', '#ADD8E6', '#87CEEB', '#87CEFA', '#B0E0E6',
        '#AFEEEE', '#5F9EA0', '#4682B4', '#6495ED', '#6A5ACD',
        '#F08080', '#CD5C5C', '#BC8F8F', '#D2B48C', '#DEB887',
        '#BDB76B', '#F0E68C', '#EEE8AA', '#D3D3D3', '#DCDCDC',
        '#9966CC', '#8A2BE2', '#9370DB', '#BA55D3', '#C0C0C0'
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
        '#FFFFF0', '#FFFACD', '#FAFAD2', '#F5F5DC', '#FAF0E6',
        '#FFF5EE', '#FAEBD7', '#FFEFD5', '#FFE4E1', '#FFF0F5',
        '#E6E6FA', '#E0B0FF', '#D8BFD8', '#DDA0DD', '#EE82EE',
        '#F0F8FF', '#E0FFFF', '#F0FFFF', '#E0EEE0', '#F5FFFA',
        '#F0FFF0', '#FFFACD', '#FAFAD2', '#EEE8AA', '#F0E68C',
        '#FFFFE0', '#FFFFF0', '#F5F5DC', '#FAF0E6', '#FFF5EE',
        '#D3D3D3', '#DCDCDC', '#E0E0E0', '#E8E8E8', '#F5F5F5'
    ],
    'soft-summer-deeps': [
        '#8FBC8F', '#6B8E23', '#808000', '#556B2F', '#66CDAA',
        '#8B7355', '#A0826D', '#BC8F8F', '#CD5C5C', '#A52A2A',
        '#9370DB', '#8A2BE2', '#9400D3', '#8B008B', '#BA55D3',
        '#708090', '#778899', '#696969', '#2F4F4F', '#5F9EA0',
        '#4682B4', '#6495ED', '#4169E1', '#6A5ACD', '#483D8B',
        '#B8860B', '#DAA520', '#BDB76B', '#8B7355', '#A0826D',
        '#8FBC8F', '#6B8E23', '#808000', '#556B2F', '#66CDAA'
    ],
    'soft-summer-dark-neutrals': [
        '#696969', '#708090', '#778899', '#A9A9A9', '#BEBEBE',
        '#C0C0C0', '#D3D3D3', '#DCDCDC', '#E0E0E0', '#E8E8E8',
        '#8B7355', '#A0826D', '#BC8F8F', '#D2B48C', '#DEB887',
        '#696969', '#778899', '#708090', '#2F4F4F', '#556B2F',
        '#6B8E23', '#808000', '#8B8B8B', '#A9A9A9', '#BEBEBE',
        '#C0C0C0', '#D3D3D3', '#DCDCDC', '#E0E0E0', '#E8E8E8',
        '#F0F0F0', '#F5F5F5', '#FAFAFA', '#FFFFFF', '#F8F8F8'
    ],
    'soft-summer-mids': [
        '#A9A9A9', '#BEBEBE', '#C0C0C0', '#D3D3D3', '#BC8F8F',
        '#D2B48C', '#DEB887', '#F5DEB3', '#BDB76B', '#D2B48C',
        '#8FBC8F', '#9ACD32', '#90EE90', '#98FB98', '#66CDAA',
        '#D8BFD8', '#DDA0DD', '#E0B0FF', '#B0C4DE', '#9370DB',
        '#F0E68C', '#EEE8AA', '#FAFAD2', '#FFFACD', '#F5DEB3',
        '#778899', '#708090', '#5F9EA0', '#4682B4', '#6495ED',
        '#BC8F8F', '#CD5C5C', '#F08080', '#E9967A', '#FA8072'
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
        '#FFD700', '#FFA500', '#FF8C00', '#FF7F50', '#FF6347',
        '#FF4500', '#FFA07A', '#FA8072', '#E9967A', '#F4A460',
        '#FFDAB9', '#FFE4B5', '#FFDEAD', '#FFEFD5', '#FFE4C4',
        '#FFEBCD', '#FFF8DC', '#FFFAF0', '#FFF5EE', '#FAEBD7',
        '#FFD39B', '#FFC125', '#FFB90F', '#FFA500', '#FF8C00',
        '#DAA520', '#B8860B', '#FFD700', '#FFEC8B', '#F0E68C',
        '#FAFAD2', '#FFFACD', '#FFFFE0', '#FFFFF0', '#F5F5DC'
    ],
    'warm-autumn-deeps': [
        '#8B4513', '#A0522D', '#A52A2A', '#800000', '#8B0000',
        '#B22222', '#DC143C', '#CD5C5C', '#A52A2A', '#8B4513',
        '#D2691E', '#CD853F', '#CC7722', '#C04000', '#8B4513',
        '#B8860B', '#DAA520', '#CD853F', '#D2691E', '#A0522D',
        '#8B0000', '#800000', '#A52A2A', '#B22222', '#DC143C',
        '#6B4423', '#704214', '#654321', '#5C4033', '#4E3629',
        '#8B4513', '#A0522D', '#CD853F', '#D2691E', '#B8860B'
    ],
    'warm-autumn-dark-neutrals': [
        '#8B4513', '#A0522D', '#6B4423', '#704214', '#654321',
        '#5C4033', '#4E3629', '#3D2B1F', '#362819', '#2C1810',
        '#696969', '#708090', '#778899', '#8B8B8B', '#A9A9A9',
        '#8B7355', '#A0826D', '#BC8F8F', '#D2B48C', '#C19A6B',
        '#8B4513', '#A0522D', '#A52A2A', '#800000', '#8B0000',
        '#BEBEBE', '#C0C0C0', '#D3D3D3', '#DCDCDC', '#E0E0E0',
        '#8B7355', '#A0826D', '#BC8F8F', '#D2B48C', '#DEB887'
    ],
    'warm-autumn-mids': [
        '#CD853F', '#D2691E', '#DAA520', '#B8860B', '#BDB76B',
        '#FF8C00', '#FFA500', '#FF7F50', '#FF6347', '#FF4500',
        '#F4A460', '#E9967A', '#FA8072', '#FFA07A', '#CD5C5C',
        '#DC143C', '#B22222', '#A52A2A', '#8B4513', '#A0522D',
        '#C19A6B', '#D2B48C', '#DEB887', '#F5DEB3', '#BC8F8F',
        '#CC7722', '#C04000', '#B87333', '#C9AE5D', '#E3A857',
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
        '#FFFF00', '#FFFFE0', '#FFFACD', '#FAFAD2', '#FFFFE0',
        '#FFD700', '#FFC125', '#FFB90F', '#FFEC8B', '#F0E68C',
        '#FF6347', '#FF7F50', '#FF7256', '#FA8072', '#FFA07A',
        '#FFA500', '#FF8C00', '#FFD39B', '#FFDAB9', '#FFE4B5',
        '#FFEFD5', '#FFE4C4', '#FFEBCD', '#FFF8DC', '#FFFAF0',
        '#FFB6C1', '#FFDAB9', '#FFDEAD', '#FFEFD5', '#FFF5EE',
        '#FFFFE0', '#FFFFF0', '#F5F5DC', '#FAF0E6', '#FAEBD7'
    ],
    'warm-spring-deeps': [
        '#FF8C00', '#FF4500', '#FF6347', '#DC143C', '#B22222',
        '#FFA500', '#FF7F50', '#CD5C5C', '#A52A2A', '#8B4513',
        '#DAA520', '#B8860B', '#CD853F', '#D2691E', '#A0522D',
        '#FF6347', '#FF7F50', '#FF7256', '#FA8072', '#E9967A',
        '#FF8C00', '#FFA500', '#FF4500', '#DC143C', '#B22222',
        '#C04000', '#CC7722', '#B87333', '#A0522D', '#8B4513',
        '#DAA520', '#B8860B', '#CD853F', '#D2691E', '#BDB76B'
    ],
    'warm-spring-dark-neutrals': [
        '#8B7355', '#A0826D', '#BC8F8F', '#D2B48C', '#C19A6B',
        '#8B4513', '#A0522D', '#6B4423', '#704214', '#654321',
        '#696969', '#708090', '#778899', '#8B8B8B', '#A9A9A9',
        '#BEBEBE', '#C0C0C0', '#D3D3D3', '#DCDCDC', '#E0E0E0',
        '#8B7355', '#A0826D', '#BC8F8F', '#D2B48C', '#DEB887',
        '#F5DEB3', '#C19A6B', '#E3A857', '#C9AE5D', '#BDB76B',
        '#A9A9A9', '#BEBEBE', '#C0C0C0', '#D3D3D3', '#DCDCDC'
    ],
    'warm-spring-mids': [
        '#FFA500', '#FF8C00', '#FF7F50', '#FF6347', '#FA8072',
        '#FFA07A', '#E9967A', '#F4A460', '#FFD39B', '#FFDAB9',
        '#FFD700', '#FFC125', '#FFB90F', '#FFEC8B', '#F0E68C',
        '#FFDEAD', '#FFE4B5', '#FFEFD5', '#FFE4C4', '#FFEBCD',
        '#DAA520', '#B8860B', '#CD853F', '#D2691E', '#BDB76B',
        '#FFB6C1', '#FFDAB9', '#FFDEAD', '#F5DEB3', '#D2B48C',
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
        '#FFFF00', '#FFFFE0', '#F0FFFF', '#E0FFFF', '#AFEEEE',
        '#00FFFF', '#00CED1', '#40E0D0', '#7FFFD4', '#BFEFFF',
        '#FF69B4', '#FF1493', '#FF00FF', '#EE82EE', '#DA70D6',
        '#FFD700', '#FFEC8B', '#FFFFE0', '#F0E68C', '#FAFAD2',
        '#7FFF00', '#ADFF2F', '#00FF00', '#00FF7F', '#00FA9A',
        '#00BFFF', '#87CEEB', '#87CEFA', '#1E90FF', '#4169E1',
        '#FFC0CB', '#FFB6C1', '#FFDAB9', '#FFE4B5', '#FFEFD5'
    ],
    'clear-spring-deeps': [
        '#00CED1', '#008B8B', '#20B2AA', '#5F9EA0', '#008080',
        '#FF1493', '#C71585', '#FF00FF', '#8B008B', '#9400D3',
        '#FFD700', '#DAA520', '#B8860B', '#FF8C00', '#FFA500',
        '#32CD32', '#228B22', '#008000', '#006400', '#00FF00',
        '#FF6347', '#DC143C', '#B22222', '#8B0000', '#A52A2A',
        '#1E90FF', '#0000FF', '#0000CD', '#00008B', '#191970',
        '#00FA9A', '#00FF7F', '#3CB371', '#2E8B57', '#006400'
    ],
    'clear-spring-dark-neutrals': [
        '#696969', '#708090', '#778899', '#2F4F4F', '#36454F',
        '#3C3C3C', '#434343', '#4D4D4D', '#595959', '#666666',
        '#737373', '#808080', '#8B8B8B', '#A9A9A9', '#BEBEBE',
        '#C0C0C0', '#D3D3D3', '#DCDCDC', '#E0E0E0', '#E8E8E8',
        '#696969', '#778899', '#708090', '#2F4F4F', '#556B2F',
        '#6B8E23', '#808000', '#8B7355', '#A0826D', '#8B8B8B',
        '#A9A9A9', '#BEBEBE', '#C0C0C0', '#D3D3D3', '#DCDCDC'
    ],
    'clear-spring-mids': [
        '#40E0D0', '#48D1CC', '#00CED1', '#20B2AA', '#5F9EA0',
        '#FF69B4', '#FF1493', '#FF00FF', '#DA70D6', '#EE82EE',
        '#FFD700', '#FFC125', '#FFB90F', '#FFEC8B', '#F0E68C',
        '#7FFF00', '#ADFF2F', '#00FF7F', '#00FA9A', '#32CD32',
        '#FF6347', '#FF7F50', '#FA8072', '#FFA07A', '#E9967A',
        '#1E90FF', '#00BFFF', '#87CEEB', '#87CEFA', '#4169E1',
        '#00FF00', '#32CD32', '#3CB371', '#2E8B57', '#228B22'
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
let facingMode = 'user'; // Start with front camera
let longPressTimer = null;
let isLongPress = false;

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
    
    // Touch events for mobile
    btn.addEventListener('touchstart', (e) => {
        isLongPress = false;
        longPressTimer = setTimeout(() => {
            isLongPress = true;
            navigator.vibrate && navigator.vibrate(50); // Haptic feedback
            showSubcategoryMenu(season, btn);
        }, 500); // 500ms for long press
    });
    
    btn.addEventListener('touchend', (e) => {
        clearTimeout(longPressTimer);
        if (!isLongPress) {
            // Regular tap
            document.querySelectorAll('.palette-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSeason = season;
            currentSubcategory = 'general';
            currentPalette = `${season}-general`;
            drawOverlay();
        }
    });
    
    btn.addEventListener('touchcancel', () => {
        clearTimeout(longPressTimer);
    });
    
    // Mouse events for desktop
    btn.addEventListener('mousedown', () => {
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
    
    btn.addEventListener('click', () => {
        if (!isLongPress) {
            document.querySelectorAll('.palette-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSeason = season;
            currentSubcategory = 'general';
            currentPalette = `${season}-general`;
            drawOverlay();
        }
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
