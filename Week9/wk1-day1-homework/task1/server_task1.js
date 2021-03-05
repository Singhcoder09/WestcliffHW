const http = require('http');

const hostname = 'localhost';
const port = 5000;

const server = http.createServer((req, res) => {
    // console.log(req.headers);
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    // res.end('<html><body><h1>Hello World!</h1></body></html>');
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>Home Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/about") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>About Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/contact") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>Contact Page</p></body></html>');
        res.end();
    
    }
    else
        res.end('Invalid Request!');
});

server.listen(port, hostname, () => {
    console.log(`The NodeJS server on port ${port} is now running....`);
});