const express= require('express');

const app= express()



app.get('/', (req, res)=>{
    res.send("rohit")

})

app.listen(8000, ()=>{
    console.log("server is listening...")

})




