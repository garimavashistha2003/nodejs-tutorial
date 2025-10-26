const http = require('http');

const server = http.createServer((req , res) =>{
    res.setHeader("Content-Type","text/html ");
    res.write("<h2> hello server <h2/>")
   
    res.end("hello I'm , garima....");

})

server.listen(4990 , ()=>{


    console.log("server start ")
});