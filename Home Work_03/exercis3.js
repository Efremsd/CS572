var http = require('http');
var fs = require('fs');
http.createServer((req, res) => {
    res.writeHead(200, { 'content-Type': 'text/plain' });
    let readfile = fs.readFileSync(__dirname + '/big.file');
    res.end(readfile);
}).listen(2000, '127.0.0.1');
http.createServer((req, res) => {
    res.writeHead(200, { 'content-Type': 'text/plain' });
    let readfile = fs.readFile(__dirname + '/big.file', 'utf8', (err, data) => {
        res.end(data);
    });

}).listen(3000, '127.0.0.1');
http.createServer((req, res) => {
    res.writeHead(200, { 'content-Type': 'text/plain' });
    fs.createReadStream(__dirname + '/big.file', 'utf8').pipe(res);

}).listen(4000, '127.0.0.1');