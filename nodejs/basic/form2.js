const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req,res)=>{

    fs.readFile('../html/form.html','utf-8', (err,data)=>{
        if(err){
            res.writeHead(500,{"Content-Type": "text/palin"});
            res.write("internal server error");
            res.end();
            return;

        }if(req.url == '/'){
            res.write(data);


        }else if(req.url == '/submit'){
            let databody = [];
            req.on('data',(chunk)=>{
                databody.push(chunk);
            })

            req.on('end',()=>{
                let rawData = Buffer.concat(databody).toString();
                console.log(rawData);
                const readableData = querystring.parse(rawData);
                let dataString = "my name is " + readableData.name + " and my email is " + readableData.email;
                console.log(dataString);

                //append file
                fs.appendFile("../text/"+ readableData.name+".txt", dataString, 'utf-8', (err)=>{
                    if(err){
                        console.log(" Error while saving file — sending status 500");
                        res.writeHead(500,{"Content-Type": "plain/html"});
                        res.end();
                        return false;
                    }else{
                        console.log("file created!!!");
                    }
                })
            })
            res.write('<h1> Data submitted<h1/>');

        }
        res.end();
    })
    // res.end();

}).listen(3002,()=>{
    console.log("server start successfully !!!")
})