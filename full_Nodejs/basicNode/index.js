const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Serve the HTML file
    fs.readFile(path.join(__dirname, "./index.html"), (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("This is an error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/style.css") {
    // Serve the CSS file
    fs.readFile(path.join(__dirname, "./style.css"), (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("This is an error");
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      }
    });
  }
});

server.listen(9000, () => {
  console.log("Server is listening on port 9000...");
});
