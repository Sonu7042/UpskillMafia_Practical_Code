const express = require("express");
const mongoConnect = require("./db");
const userModel = require("./Schema/user");
const blogModel = require("./Schema/blog");

mongoConnect();

const app = express();
app.use(express.json());

app.post("/save", async (req, res) => {
  const user = req.body;
  const data = await userModel.create(user);
  res.status(201).json({
    message: "User saved Successfully",
    data: data,
  });
});

app.post("/postData", async (req, res) => {
  const { title, auther, userId } = req.body;
  const saveData = await blogModel.create({ title, auther, userId });

  res.status(201).json({
    message: "User saved Successfully",
    data: saveData,
  });
});




app.post("/fetch", async (req, res) => {
    console.log(req.body.id)
  const data = await blogModel.find({_id: req.body.id }).populate("userId");

  res.status(201).json({
    message: "User got Successfully",
    data: data,
  });
});



app.listen(9000, () => {
  console.log("server is running on port 9000");
});
