

const express=require("express");
const router=express.Router();


router.get("/about",(req,res)=>{
    res.send("<h1>I am from about page</h1>")
})


router.get("/login",(req,res)=>{
    // res.send("<h1>I am from login page</h1>")
    res.status(200).json({
        "name":"Fahim Faysal",
        "id":"0112230224",
    })

})


router.get("/register",(req,res)=>{
    // res.send("<h1>I am from register page</h1>")
    res.redirect("/login");
    // res.statusCode=200;
    // res.sendFile(__dirname+"/views/index.html");


})


module.exports=router;


