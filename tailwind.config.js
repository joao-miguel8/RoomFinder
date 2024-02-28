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
		extend: {},
		fontFamily: {
			montserrat: "montserrat",
		},
	},
	plugins: [],
};
