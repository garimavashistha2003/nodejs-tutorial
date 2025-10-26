const http = require('http');
const userData = [
    {name: "garima",
    email: "garima@text.com"},

    {name: "nitish",
    email: "nitish@text.com"},

    {name: "mohit",
        email: "mohit@text.com"}
]
http.createServer((req,res)=>{
    console.log(req.headers.host);
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(userData));
    res.end("bye");


}).listen(9800,()=>{
    console.log("server start....")
})