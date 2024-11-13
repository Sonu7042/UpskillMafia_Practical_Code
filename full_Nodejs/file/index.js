const express= require('express')
const fs= require('fs')

const app= express()
app.use(express.json())



app.get('/create', (req, res)=>{

    //sync...
    // fs.writeFileSync("./text.txt", "hello  sonu" )


    //Async...
    // fs.writeFile('./text.txt', "hello world sonu", ()=>{})


    //read file sync
    // const data= fs.readFileSync('./contact.txt', "utf-8")


    //read file Asyn
    // fs.readFile("./contact.txt", 'utf-8', (err, result)=>{
    //     if(err){
    //         console.log(err)
    //     }
    //     else{
    //         res.send(result)
    //     }
    // })


    //add new add in file
    // fs.appendFileSync('./text.txt', `${Date.now().toString()}\n`)


    //copy the file 
    // fs.cpSync("./text.txt", "./copy.txt")

    

    //delte the file 
    fs.unlinkSync("./copy.txt")

    res.send("done")

})





const obj= [
    {name: "sonu", age: 19},
]

app.post('/', (req, res)=>{
 console.log(req.body)
    const user= JSON.stringify(req.body)

    fs.appendFile("./data.json", `\n${user},`, "utf8", (err, result)=>{
        res.send(result)

    })


  
})
                                                                                                    




app.listen(9000, ()=>{
    console.log('server is running on port 9000')
})