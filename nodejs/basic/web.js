

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  // move one folder up (from basic → nodejs), then into html
  fs.readFile('../html/web.html', 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.write("Internal Server Error");
      res.end();
      return;
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });

}).listen(6600, () => {
  console.log('Server started at http://localhost:6600');
});
