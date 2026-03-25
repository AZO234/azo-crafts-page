import type { Config } from 'tailwindcss'

export default {
  // srcDir: 'app/' なので app/ 配下を参照
  content: [
    './app/**/*.{vue,ts,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ── STEREO VIEWER design tokens ──────────────────────────
      colors: {
        bg:       '#0a0c10',
        surface:  '#11141a',
        surface2: '#181c24',
        border:   '#2a2f3d',
        accent:   '#00e5ff',
        accent2:  '#ff3d6b',
        'text-base':  '#d0d8f0',
        'text-muted': '#5a6280',
        'bg-light':       '#f0f2f7',
        'surface-light':  '#ffffff',
        'surface2-light': '#e8ebf2',
        'border-light':   '#c8cfe0',
        'accent-light':   '#0088bb',
        'accent2-light':  '#e0174f',
        'text-light':     '#1a1e2e',
        'muted-light':    '#7a82a0',
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', 'monospace'],
        sans: ['"Zen Kaku Gothic New"', 'sans-serif'],
      },
      borderRadius: { sv: '6px' },
      transitionDuration: { sv: '180ms' },
    },
  },
  plugins: [],
} satisfies Config
