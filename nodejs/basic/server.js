const http = require('http');


http.createServer((req,res)=>{

    if(req.url === "/"){
        res.end("home page .. hello ")
    }else if(req.url === "/about"){
        res.end("hello about page ");
    }else{
        res.end("404 Page Not Found , bye ");
    }

}).listen(4000, ()=>{
    console.log("server start ")
});
