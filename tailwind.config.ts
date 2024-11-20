import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        "xs": "475px"
      },
      fontFamily: {
        'fabada': ["Fabada", "sans-serif"]
      },
      opacity: {
        7: "0.07",
        8: "0.08",
        9: "0.09",
        11: "0.11",
        12: "0.12",
        14: "0.14",
        15: "0.15",
        16: "0.16",
        24: "0.24",
        32: "0.32",
        48: "0.48"
      },
      // taken from MUI
      boxShadow: {
        'elevation-100': '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        'elevation-200': '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
        'elevation-300': '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
        'elevation-400': '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        'elevation-500': '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
        'elevation-100-dark': '0px 2px 1px -1px rgba(255,255,255,0.2), 0px 1px 1px 0px rgba(255,255,255,0.14), 0px 1px 3px 0px rgba(255,255,255,0.12)',
        'elevation-200-dark': '0px 3px 1px -2px rgba(255,255,255,0.2), 0px 2px 2px 0px rgba(255,255,255,0.14), 0px 1px 5px 0px rgba(255,255,255,0.12)',
        'elevation-300-dark': '0px 3px 3px -2px rgba(255,255,255,0.2), 0px 3px 4px 0px rgba(255,255,255,0.14), 0px 1px 8px 0px rgba(255,255,255,0.12)',
        'elevation-400-dark': '0px 2px 4px -1px rgba(255,255,255,0.2), 0px 4px 5px 0px rgba(255,255,255,0.14), 0px 1px 10px 0px rgba(255,255,255,0.12)',
        'elevation-500-dark': '0px 3px 5px -1px rgba(255,255,255,0.2), 0px 6px 10px 0px rgba(255,255,255,0.14), 0px 1px 18px 0px rgba(255,255,255,0.12)',
      },
      colors: {
        current: "currentColor",
        primary: {
          100: "#CEC7EA",
          200: "#ADA3DD",
          300: "#8C7DD0",
          400: "#7362C6",
          500: "#5848BC",
          600: "#4F43B6",
          700: "#403BAC",
        },
        success: {
          400: "#77D753",
          500: "#5AD02E",
          600: "#4ABF26",
          700: "#2EAA1B",
        },
        warning: {
          400: "#FFA838",
          500: "#FF9925",
          600: "#FF8D23",
          700: "#F87E21",
        },
        error: {
          400: "#FE6E51",
          500: "#FF5336",
          600: "#F44E32",
          700: "#E6482D",
        },
        info: {
          400: "#3FAEFF",
          500: "#19A0FF",
          600: "#1591F1",
          700: "#107FDE",
        },
        // original scheme
        // dark: {
        //   50: "#272727",
        //   100: "#1A1A1A",
        //   200: "#121212",
        //   300: "#070707",
        // },
        // Tiktok Effecthouse scheme
        // dark: {
        //   50: "#272727",
        //   100: "#2c2c2c",
        //   200: "#292929",
        //   300: "#222222",
        //   400: "#121212"
        // },
        // Figma scheme
        // dark: {
        //   50: "#272727",
        //   100: "hsl(0,0%,18%)",
        //   200: "hsl(0,0%,15%)", 
        //   300: "hsl(0,0%,11%)",
        //   400: "hsl(0,0%,7%)"
        // },
        // Other scheme
        // dark: {
        //   50: "#272727",
        //   100: "#2e2e2e",
        //   200: "#222222", 
        //   300: "#161616",
        //   400: "#101010"
        // },
        // Jonny scheme
        dark: {
          50: "hsl(0,0%,22%)",
          100: "hsl(0,0%,17%)",
          200: "hsl(0,0%,12%)", 
          300: "hsl(0,0%,7%)",
          400: "hsl(0,0%,2%)"
        },
        light: {
          100: "#FFFFFF",
          200: "#F6F6F6",
          300: "#F0F0F0",
          400: "#CCCCCC",
        },
        // "border-white": "#FFFFFF14",
        "divider-white": "#FFFFFF00",
        // "divider-white": "#FFFFFF14",
        "divider-black": "#00000014",
        "white-alpha": {
          2: "#FFFFFF05",
          5: "#FFFFFF0D",
          7: "#FFFFFF12",
          8: "#FFFFFF14",
          9: "#FFFFFF17",
          11: "#FFFFFF1C",
          12: "#FFFFFF1F",
          14: "#FFFFFF24",
          15: "#FFFFFF26",
          16: "#FFFFFF29",
          24: "#FFFFFF3D",
          32: "#FFFFFF52",
          48: "#FFFFFF7A",
        },
        "black-alpha": {
          2: "#00000005",
          5: "#0000000D",
          8: "#00000014",
          16: "#00000029",
          24: "#0000003D",
          32: "#00000052",
          48: "#0000007A",
        },
        "icon-dark": "#070707",
        // Original scheme
        // "icon-gray": "#515151",
        // "icon-light-gray": "#979797",
        // Tiktok effect house scheme
        "icon-gray": "#161823", // "#A1A1A1",
        "icon-light-gray": "#BFBFBF",
        "icon-light": "#FFFFFF",
        "tiktok-white": "#FFFFFF", // "#EBEBEB",
        "tiktok-black": "#161823",
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: "0", transform: 'translateY(-2px)' },
          to: { opacity: "1", transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: 'translateX(2px)' },
          to: { opacity: "1", transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: 'translateY(2px)' },
          to: { opacity: "1", transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: 'translateX(-2px)' },
          to: { opacity: "1", transform: 'translateX(0)' },
        },
        clickFadeUp: {
          '0%': { opacity: "1", transform: "translateY(0)" },
          '20%': { opacity: "0", transform: "translateY(-20px)", scale: "1.5" },
        },
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: { opacity: "0", transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: "1", transform: 'translate(-50%, -50%) scale(1)' },
        },
        ripple: {
          from: { scale: "0" },
          to: { scale: "1" }
        },
        heightPulse: {
          '0%, 100%': { height: "0" },
          '50%': { height: "100%" }
        },
        filmRollRevolveForward: {
          from: { transform: 'translate(0%)'},
          to: { transform: "translate(100%)" }
        },
        filmRollRevolveBackward: {
          from: { transform: 'translate(0%)'},
          to: { transform: "translate(-100%)" }
        }
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        clickFadeUp: 'clickFadeUp 300ms cubic-bezier(0,0,.58,1) linear',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        ripple: 'ripple 2s cubic-bezier(0.16, 1, 0.3, 1)'
      },
      transitionProperty: {
        'max-height': 'max-height'
      }
    },
  },
  plugins: [
    require("tailwindcss-radix")(),
    require('@tailwindcss/typography'),
  ],
}
export default config
