const express = require('express')
const path = require('path')
 
//sample.html pagr taken
const app = express()
app.get('/',(req,res)=>{
    console.log("hhhhhhh")
    res.sendFile(path.join(__dirname,'sample.html'))

})


//middleware function

app.use(function(req,res,next){
    console.log("start")
    next();
})
 
app.get('/good',(req,res,next)=>{
    console.log("middle")
    res.sendFile(path.join(__dirname,'sample.html'))
    next();

})

app.use(function(req,res,next){
    console.log("end")
    
})


app.listen(3000)