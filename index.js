const express=require("express")
const uuid=require("uuid")
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

app.use(express.json())

app.get("/showAllUser",(req,res)=>{
    res.status(200).json(members)
})
app.get("/showUser/:id",(req,res)=>{
    const id=req.params.id
    const user=members.filter(member=>member.id===parseInt(id))
    user.length!==0 ? res.status(200).json(user) : res.status(200).json({msg:"User not found"})
})

app.post("/addUser",(req,res)=>{
    // const name=req.body.name
    // const email=req.body.email
    // const password=req.body.password
    // const{name,email,password}=req.body
    const{name,email,password}={...req.body}
    members.push({id:uuid.v4(),name,email})
    res.status(200).json(members)
})
const PORT=3000
app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))