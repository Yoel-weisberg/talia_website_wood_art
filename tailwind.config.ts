import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: '#e6d8c9', // brown
				input: '#e6d8c9',
				ring: '#e3eedc', // green
				background: '#fbf8f5', // white
				foreground: '#654321',
				primary: {
					DEFAULT: '#e6d8c9', // brown
					foreground: '#654321'
				},
				secondary: {
					DEFAULT: '#e3eedc', // green
					foreground: '#654321'
				},
				accent: {
					DEFAULT: '#fbf8f5', // white
					foreground: '#654321'
				},
				muted: {
					DEFAULT: '#e3eedc',
					foreground: '#654321'
				},
				highlight: {
					DEFAULT: '#e3eedc',
					foreground: '#654321'
				},
				wood: {
					light: '#fbf8f5',
					cream: '#e6d8c9',
					warm: '#e3eedc',
					medium: '#e6d8c9',
					dark: '#654321',
					bark: '#654321'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.8s ease-out'
			},
			fontFamily: {
				'serif': ['Playpen Sans Hebrew', 'serif'],
				'sans': ['Amatic SC', 'system-ui', 'sans-serif']
			},
			fontWeight: {
				bold: '700',
				semibold: '500'
				// ...other custom weights if needed...
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
