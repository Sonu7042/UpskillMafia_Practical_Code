const express=  require('express');
const  mongoose  = require('mongoose');


const app=express()
app.use(express.json())




// {useNewUrlParser:true, useUnifiedTopology:true}

const link =`mongodb://localhost:27017/TestApi`
mongoose.connect(link)
.then(()=>{
    console.log("connected to database");
})
.catch((err)=>{
    console.log("this is err", err)
})



const productSchema= new mongoose.Schema({
    name:String,
    description:String,
    price:Number
})


const product= new mongoose.model("Product", productSchema)




app.post('/create', async(req, res)=>{

    const data = await product.create(req.body)
    res.status(200).json({
        message:"data save Successfully",
        data:data
    })
})



app.post('/create', async(req, res)=>{

    const data = await product.create(req.body)
    res.status(200).json({
        message:"data save Successfully",
        data:data
    })
})



app.post('/create', async(req, res)=>{

    const data = await product.create(req.body)
    res.status(200).json({
        message:"data save Successfully",
        data:data
    })
})



app.get('/', async(req, res)=>{

    const data = await product.find()
    res.status(200).json({
        message:"All Data got Successfully",
        data:data
    })
})



app.put('/update/:id', async(req, res)=>{

    const item=req.body
    const id= req.params.id

    let data = await product.findById(id)
    data= await product.findByIdAndUpdate(id, item, {new:true, useFindAndModify:false, runValidators:true})
    res.status(200).json({
        message:" Data updated Successfully",
        data:data
    })
})



app.delete('/delete/:id', async(req, res)=>{

    const id= req.params.id

    let data =  await product.findById(id)

    if(!data){
       return res.status(400).json({
        success:false,
        message:"Product is not found"
       })
    }


    data= await product.findByIdAndDelete(id)
    res.status(200).json({
        message:" Data Deleted Successfully",
        data:data
    })
})














app.listen(9000, ()=>{
    console.log("server is listening...")
})