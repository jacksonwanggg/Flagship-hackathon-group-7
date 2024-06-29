const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

// Set up storage for multer
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		const uploadPath = path.join(
			__dirname,
			"../client/public/assets/upload"
		);
		if (!fs.existsSync(uploadPath)) {
			fs.mkdirSync(uploadPath, { recursive: true });
		}
		cb(null, uploadPath);
	},
	filename: (req, file, cb) => {
		cb(null, "filename.webm");
	},
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("video"), (req, res) => {
	res.json({ filePath: path.join("/assets/upload", "filename.webm") });
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
