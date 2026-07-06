module.exports = {
    darkMode: 'class',
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    bg: '#050B1D',
                    surface: '#0A122E',
                    accent: '#7B6DFF',
                    accentSoft: '#6E63F6',
                    glow: '#8B5CF6'
                }
            },
            boxShadow: {
                soft: '0 24px 80px rgba(15,23,42,0.32)',
                glow: '0 0 120px rgba(124,58,237,0.18)'
            }
        }
    },
    plugins: []
};
