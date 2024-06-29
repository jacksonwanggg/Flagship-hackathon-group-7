import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fadeIn: 'fadeIn 1.1s ease-out',
        slide: 'slide 1.1s ease-out',
        slideRight: 'slideRight 2s forwards',
        waveMotion: 'waveMotion 13s cubic-bezier(0.36, 0.45, 0.63, 0.53)  -0.125s infinite',
        waveMotionBounce: 'waveMotionBounce 13s cubic-bezier(0.36, 0.45, 0.63, 0.53)  -0.125s infinite',
        bouncing: 'bouncing 3s ease-in-out infinite',
        moveTop: 'moveTop 1s ease-out infinite',
        popOut: 'popOut 1s ease-in-out',
        boom: 'boom 0.2s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': {
            transform: "translateY(9%)",
            opacity: "0"
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1"
          }
        },
        slide: {
          '0%': {
            top: '0'
          },
          '25%': {
            top: '-4rem'
          },
          '72.5%': {
            top: '-12.25rem'
          }
        },
        slideRight: {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0px)'
          }
        },
        waveMotionBounce: {
          '0%': { 
            marginLeft: '0',
            transform: 'translateY(-50px)'
          },
          '50%': {
            transform: 'translateY(0)'
          },
          '100%': { 
            marginLeft: '-1725px',
            transform: 'translateY(-50px)'
          },
        },
        waveMotion: {
          '0%': { 
            marginLeft: '0',
          },
          '100%': { 
            marginLeft: '-1725px',
          },
        },
        bouncing: {
          '0%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
          '100%' : {
            transform: 'translateY(0px)'
          }
        },
        moveTop: {
          '0%' : {
            transform: 'translateY(-35px)'
          },
          '100%': {
            transform: 'translateY(-35px)'
          }
        },
        popOut: {
          '0%': {
            transform: 'scale(1.8)'
          },
          '20%': {
            transform: 'scale(1.1)'
          },
          '40%': {
            transform: 'scale(1.7)'
          },
          '60%': {
            transform: 'scale(1.3)'
          },
          '80%': {
            transform: 'scale(1.5)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        boom: {
          '100%': {
            transform: 'scale(1.1)'
          }
        },
      }
    },
  },
  plugins: [require("daisyui")],
};
export default config;
