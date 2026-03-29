/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0f',
          secondary: '#12121a'
        },
        surface: {
          DEFAULT: 'rgba(255,255,255,0.03)',
          hover: 'rgba(255,255,255,0.06)'
        },
        accent: {
          purple: '#a855f7',
          cyan: '#06b6d4',
          pink: '#ec4899',
          blue: '#3b82f6'
        },
        text: {
          primary: '#f8fafc',
          secondary: '#94a3b8',
          muted: '#64748b'
        }
      },
      backgroundImage: {
        'mesh-1': 'radial-gradient(ellipse at 20% 20%, rgba(168,85,247,0.15) 0%, transparent 50%)',
        'mesh-2': 'radial-gradient(ellipse at 80% 80%, rgba(6,182,212,0.1) 0%, transparent 50%)',
        'mesh-3': 'radial-gradient(ellipse at 50% 50%, rgba(236,72,153,0.08) 0%, transparent 60%)'
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'mesh-rotate': 'mesh-rotate 20s linear infinite'
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(168,85,247,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(168,85,247,0.5)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'mesh-rotate': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' }
        }
      },
      backdropBlur: {
        '20': '20px',
        '16': '16px'
      }
    }
  },
  plugins: []
};
