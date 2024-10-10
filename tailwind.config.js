/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./components/**/*/{js,jsx,tsx}",
	],
	presets: [require("nativewind/preset")],
	theme: {
		colors: {
			'Sunset': "#F65B4E",
			'Twilight': "#29319F",
			'Morning': "#FFBA7C",
			'Fog': "#FFDEEF",
			'Eclipse': "#573353",
		},
		fontFamily: {
			manropeRegular: ['Manrope_400Regular'],
			manropeBold: ['Manrope_700Bold'],
			manropeSemiBold: ['Manrope_600SemiBold'],
			manropeMedium: ['Manrope_500Medium'],
		},
		extend: {
		},
	},
	plugins: [],
}
