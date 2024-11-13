const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/video", (req, res) => {
  const pathFile = path.join(__dirname, "./Public/video1.mp4");
  const stat = fs.statSync(pathFile);
  const fileSize = stat.size;
  console.log(fileSize)

  const range = req.headers.range;
  console.log("range", range);

  if (!range) {
    return res.status(400).send("range is required");
  }

  const chunkSize = 10 ** 6; // 1 MB
  const start = Number(range.replace(/\D/g, "")); 
  const end = Math.min(start + chunkSize, fileSize - 1); // Adjusted to avoid exceeding file size

  const contentLength = end - start + 1;

  const headers = {
    "Content-Range": `bytes ${start}-${end}/${fileSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };
  res.writeHead(206, headers);

  const fileStream = fs.createReadStream(pathFile, { start, end });
  fileStream.pipe(res);
});

app.listen(9000, () => {
  console.log("server is listening...");
});
