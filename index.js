const express=require("express")
// console.log(express)
// const path=require("path")
const app=express()//Creating Server

function middleware(req,res,next){
    console.log("hi this is a middleware")
    next()
}
app.use(middleware)//run for all 4
// app.use(express.static(path.join(__dirname,"public")))
//read
app.get('/',(req,res)=>{
    res.send("Hi this is a get request")
})
//create
app.post('/',(req,res)=>{
    res.send("Hii this is a post request")
})
//update
app.put('/',(req,res)=>{
    res.send("Hi this is a put request")
})
//delete
app.delete('/',(req,res)=>{
    res.send("Hii this is a delete request")
})
const PORT=3000
app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))