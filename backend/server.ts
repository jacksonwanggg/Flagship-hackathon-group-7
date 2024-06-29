// import path from "path";
// import express from "express";
// import multer from "multer";
// import fs from "fs";
const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

// Set up storage for multer
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		const uploadPath = "./upload/";
		if (!fs.existsSync(uploadPath)) {
			fs.mkdirSync(uploadPath, { recursive: true });
		}
		cb(null, uploadPath);
	},
	filename: (req, file, cb) => {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("video"), (req, res) => {
	res.json({ filePath: req.file.path });
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});