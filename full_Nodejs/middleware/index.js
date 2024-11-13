const bodyParser = require('body-parser')
const express= require('express')
const fs= require('fs')

const app= express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))




app.use((req, res, next)=>{
    console.log("Hello from  middleware 1");
    req.userName= "sonusingh"
    fs.appendFile("log.txt", `\n${Date.now()}  ${req.method} ${req.path}`, (err, data)=>{
        next()

    })

    // res.send("Hello from  middleware 1");
})

app.use((req, res, next)=>{
    console.log("Hello from  middleware 2",  req.userName);

    // res.send("Hello from  middleware 1");
    next()

})



app.get('/', (req, res)=>{
    res.send("I working fine")

})



app.post('/create', (req, res)=>{
    console.log(req.body)
    res.send("send  data to server")

})






app.listen(9000, ()=>{
    console.log('server is running on port 9000')   
})

