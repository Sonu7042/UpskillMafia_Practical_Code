const http = require("http");
const fs = require("fs");
const PORT = 9000;

const server = http.createServer((req, res) => {
  if (req.url !== "/") {
    return res.end("Hello world");
  }

  //bad way to download
  // const file = fs.readFileSync("./text.txt");
  // res.end(file);



  // //good way to download
  // const readAbleStream= fs.createReadStream('./text.txt')
  // readAbleStream.pipe(res)


   //good way to download video
  //  const readAbleStream= fs.createReadStream('Public/video1.mp4')
  //  res.writeHead(200, {"Content-Type":"video/mp4"})
  //  readAbleStream.pipe(res)

  

  // //copying big file in bad way
  // const file= fs.readFileSync('./text.txt')
  // fs.writeFileSync("output.txt", file)
  // res.end("done")


  // //copying big file in good way
  const readStream=fs.createReadStream('./text.txt')
  const writeStream= fs.createWriteStream('output.txt')

  readStream.on("data", (chunk)=>{
    console.log(chunk.toString())
    writeStream.write(chunk)
  })

  res.end('done')


});


server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
