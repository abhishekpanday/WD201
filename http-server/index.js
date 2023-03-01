// Import  modules
const http = require('http');
const url = require('url');
//  command line arguments
const args = process.argv.slice(2);
const port = args.includes('--port') ? args[args.indexOf('--port') + 1] : 3000;
// Creation of HTTP server
const server = http.createServer((req, res) => {
const parsedUrl = url.parse(req.url, true);
res.writeHead(300, { 'Content-Type': 'text/plain' });
res.write(`Hello, your request ${parsedUrl.pathname}\n`);
res.end();
});
//  specified port
server.listen(port, () => {
console.log(`Server is listening to port ${port}`);
});

