const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json())

const link = `mongodb://localhost:27017/sample`;


mongoose.connect(link)
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log("this is err", err);
  });


const student = new mongoose.Schema({
    name:String,
    workOut:Boolean,
    height:Number
})


const Student= new mongoose.model("Student", student)


app.listen(9000, () => {
  console.log("server is listening...");
});



app.get('/', async(req, res)=>{
    const data=  await Student.find()
    res.send({
        message:"Data is got Successfully",
        data:data
    })

    
})



app.post('/create', async(req, res)=>{
    const user= req.body
    console.log(user)
    const data=  await Student.create(user)
    res.json({
        message:"Data is got Successfully",
        data:data
    })

    
})