const express=require("express")
const app=express()//Creating Server

const members=[{
    id:1,
    name:"James",
    email:"xyz@gmail.com",
    status:"active"
},{
    id:2,
    name:"Preeti",
    email:"abc@gmail.com",
    status:"inactive"
},{
    id:3,
    name:"Aalia",
    email:"pqr@gmail.com",
    status:"active"
}
]

app.get("/showAllUser",(req,res)=>{
    res.status(200).json(members)
})
app.get("/showUser/:id",(req,res)=>{
    const id=req.params.id
    const user=members.filter(member=>member.id===parseInt(id))
    user.length!==0 ? res.status(200).json(user) : res.status(200).json({msg:"User not found"})
})
const PORT=3000
app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))