import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./tailwind.css', './src/**/*.{ts,tsx,js,jsx,css,less}'],
  theme: {
    extend: {
      colors: {
        // Core HSL-based tokens
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        // Project design tokens mapped to CSS variables
        'bg-base': 'var(--bg-base)',
        'bg-card': 'var(--bg-card)',
        'bg-component': 'var(--bg-component)',
        'bg-input': 'var(--bg-input)',
        'bg-canvas': 'rgb(var(--bg-canvas))',
        'bg-list': 'rgb(var(--bg-list))',

        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-disabled': 'var(--text-disabled)',
        'text-input-tip': 'var(--text-input-tip)',

        'border-default': 'var(--border-default)',
        'border-accent': 'var(--border-accent)',
        'border-button': 'var(--border-button)',

        // Aliases used in components
        'background-paper': 'var(--background-card)',
        'border-normal': 'var(--border-default)',

        // Accent & state tokens
        'bg-accent': 'var(--bg-accent)',
        'accent-primary': 'rgb(var(--accent-primary))',
        'state-success': 'rgb(var(--state-success))',
        'state-warning': 'rgb(var(--state-warning))',
        'state-error': 'rgb(var(--state-error))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp'),
  ],
};

export default config;
