const express = require('express')
const path = require('path')
 
//sample.html pagr taken
const app = express()
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'sample.html'))

})



app.listen(3000)