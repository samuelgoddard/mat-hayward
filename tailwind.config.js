module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Mier', 'Helvetica', 'Arial', 'sans-serif'],
      'body': ['abril-text', 'Cambria', 'Times New Roman', 'serif'],
      'heading': ['Sainte Colombe', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
      'mono': ['Menlo', 'Courier New', 'monospace'],
    },
    fontSize: {
      '3xs': '0.4375rem',
      '2xs': '0.625rem',
      xs: '0.8125rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.625rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3.375rem',
      '6xl': '4.4375rem',
      '7xl': '6rem',
    },
    extend: {
      opacity: {
        '10': '.1',
      },
      lineHeight: {
        minimal: 1.15,
      },
      spacing: {
        '72': '22rem',
      }
    }
  },
  plugins: [
    require('tailwindcss-transition')({
      standard: 'all .3s ease',
      transitions: {
        'slow': 'all 0.7s ease',
      }  
    })
  ],
  corePlugins: {
    container: false
  }
}