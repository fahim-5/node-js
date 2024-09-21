const express=require("express");
var bodyParser = require('body-parser')



const app=express();
const PORT=3000;



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// app.get("/",(req,res)=>{
//     const id=req.query.id;
//     const name=req.query.name;
//     res.send(`Student name is ${name} and the id number is ${id}`);
// })




app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/register",(req,res)=>{
    const fullname=req.body.fullname;
    const age=req.body.age;
    res.send(`Student name is ${fullname} and the id number is ${age}`);
})

app.listen(PORT,()=>{
    console.log(`The server is runnig at hrrp://localhost:${PORT}`);
})