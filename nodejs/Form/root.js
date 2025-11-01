//create server 


const http = require('http');
const userDtaSubmit = require('./userDataSubmit');
const userForm = require('./userForm');

http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if(req.url == '/'){
        userForm(req,res);
    }else if(req.url =='/submit'){
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.write("<h2>submitted</h2>");
        // res.end();
        userDtaSubmit(req,res);

    }

}).listen(3200,()=>{
    console.log("server start!!!!")
})


