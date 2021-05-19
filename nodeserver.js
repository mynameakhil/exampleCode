// simple node server

var http = require('http')
http.createServer(function(req,res){
    res.write("hello");
    res.end()
}).listen(3000)


//sample with html page taken
var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){

    fs.readFile('sample.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data);
        res.end()
    })
   
}).listen(3000)


//root

//if(req.url === '/')