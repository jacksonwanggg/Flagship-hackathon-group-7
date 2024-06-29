// Recording the primary color for each page

const pageGradientColorsHex = [
	{
		route: "Home",
		fromGradient: "#131617",
		toGradient: "#131617",
	},
	{
		route: "Leaderboard",
		fromGradient: "#1e40af",
		toGradient: "#86efac",
	},
	{
		route: "Pets",
		fromGradient: "##1e40af",
		toGradient: "#a855f7",
	},
	{
		route: "Webcam",
		fromGradient: "#131617",
		toGradient: "#131617",
	},
] as const;

export default pageGradientColorsHex;