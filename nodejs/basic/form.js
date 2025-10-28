

const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req, res) => {

  fs.readFile('../html/form.html', 'utf-8', (err, data) => {
    //error
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.write("Internal Server Error");
      res.end();
      return;

    }if(req.url == '/'){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
    }else if(req.url == '/submit'){
        
        let databody = [];
        req.on('data',(chunk)=>{
            databody.push(chunk);

        })

        req.on('end',()=>{
            let rawData = Buffer.concat(databody).toString();
            const readableData = querystring.parse(rawData);
            console.log(readableData);
        })
        res.write('<h1> Data submitted<h1/>')

    }
    res.end()

});

}).listen(2200, () => {
  console.log('Server started succcessfully');
});
