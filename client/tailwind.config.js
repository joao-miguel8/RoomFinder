const fontSizes = {};
const minFontSize = 12;
const maxFontSize = 70;
const base = 16;
let i = minFontSize;
while (i <= maxFontSize) {
	fontSizes[i] = `${i / base}rem`;
	i += 2;
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		fontSize: fontSizes,
		extend: {
			colors: {
				primary01: "#0FC194",
				primary02: "#24C99C",
				primary03: "#00B084",
				primary04: "#009A70",
				light01: "#F9F9F9",
				dark01: "#21247",
				gray100: "#F9F9F9",
				gray200: "#f4f4f4",
				gray300: "#ececec",
				gray400: "#e0e0e0",
				gray500: "#d0d0d0",
				gray600: "#bfbfbf",
				gray700: "#ababab",
				gray800: "#9f9f9f",
			},
		},
		fontFamily: {
			montserrat: "montserrat",
		},
		borderRadius: {
			b2: "8px",
		},
		boxShadow: {
			bs1: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
		},
	},
	plugins: [],
};
