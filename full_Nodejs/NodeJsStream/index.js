const express = require("express");
const status = require("express-status-monitor");
const fs = require("fs");
const zlib= require("zlib")

const app = express();
app.use(status());

app.get("/", (req, res) => {
  const stream = fs.createReadStream("./sample.txt", "utf-8");

  stream.on("data", (chunk) => res.write(chunk));
  stream.on("end", () => res.end());
});

app.get('/file', (req, res)=>{
    fs.createReadStream('./sample').pipe(zlib.createGzip().pipe(fs.createWriteStream('./sample.zip')))

    res.send("Zip file is created successfully")

})



app.listen(9000, () => {
  console.log("server is listening...");
});
