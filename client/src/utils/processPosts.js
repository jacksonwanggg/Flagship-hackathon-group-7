// import fs from "fs";
const fs = require("fs");
const path = require("path");
// import path from "path";
// import posts from "@/lib/posts";

// interface Post {
// 	userName: string;
// 	caption: string;
// }

// interface PostWithUrl extends Post {
// 	url: string;
// }

const posts = [
	{ userName: "Andrew", caption: "I just did some pushups!!!" },
	{ userName: "Jac", caption: "I just did some pullups" },
	{ userName: "Jerry", caption: "Did some stretching." },
	{ userName: "Jackson", caption: "Quick run around the block" },
	{ userName: "Eric", caption: "Went for a long run today." },
	{ userName: "Charlie", caption: "Getting up to do some foam rolling" },
	{ userName: "Diana", caption: "walked the dog" },
	{ userName: "Eve", caption: "Did some burpees" },
	{ userName: "Frank", caption: "quick boxing sesh" },
	{ userName: "Grace", caption: "Meditation and relaxation." },
];

// Define the directory containing .webm files
const uploadsDir = path.join(__dirname, "../../public/assets/upload");

// Function to get all .webm files from the directory and sort them by modification date
function getSortedWebmFiles(dir) {
	console.log(`Reading directory: ${dir}`);

	const files = fs.readdirSync(dir);
	console.log(`Files in directory: ${files}`);

	return files
		.filter((file) => path.extname(file) === ".webm")
		.map((file) => ({
			file,
			mtime: fs.statSync(path.join(dir, file)).mtime.getTime(),
		}))
		.sort((a, b) => a.mtime - b.mtime)
		.map((fileObj) => path.join(dir, fileObj.file));
}

// Get the sorted webm files
const sortedWebmFiles = getSortedWebmFiles(uploadsDir);
console.log(sortedWebmFiles);

// Combine the posts with the sorted webm files
const postsWithUrls = posts.map((post, index) => {
	const url = sortedWebmFiles[index] || "";
	return { ...post, url };
});

// Output the result
console.log(postsWithUrls);

// If you want to export it
module.exports = postsWithUrls;
