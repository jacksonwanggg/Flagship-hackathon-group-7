import Memories from "@/components/memories";

// Recording the primary color for each page
interface GradientColors {
	fromGradient: string;
	toGradient: string;
}

interface PageGradientColorsHexType {
	[key: string]: GradientColors;
}

// const pageGradientColorsHex: PageGradientColorsHexType = {
// 	Home: {
// 		fromGradient: "black-600",
// 		toGradient: "black-600",
// 	},
// 	Leaderboard: {
// 		fromGradient: "green-700",
// 		toGradient: "green-400",
// 	},
// 	Pets: {
// 		fromGradient: "purple-600", // Fixed the typo: "1e40af" to "1e40af"
// 		toGradient: "blue-500",
// 	},
// 	Webcam: {
// 		fromGradient: "black-600",
// 		toGradient: "black-600",
// 	},
// };

const pageGradientColorsHex: PageGradientColorsHexType = {
	Home: {
		fromGradient: "black-600",
		toGradient: "black-600",
	},
	Pets: {
		fromGradient: "green-600",
		toGradient: "green-400",
	},
	Leaderboard: {
		fromGradient: "black-600",
		toGradient: "black-600",
	},
	Memories: {
		fromGradient: "black-600",
		toGradient: "black-600",
	},
};

export type GradientColor =
	(typeof pageGradientColorsHex)[keyof typeof pageGradientColorsHex];

export default pageGradientColorsHex;
