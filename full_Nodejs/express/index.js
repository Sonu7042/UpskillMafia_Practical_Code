const express= require("express")

const app=express()
app.use(express.json())

app.listen(9000, ()=>{
    console.log("server is listening... ")
})


app.get('/',(req, res)=>{
    res.send("hello world")
})

app.post('/create',(req, res)=>{

    console.log(req.body)
    res.send("send successfully")
})