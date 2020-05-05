/**
 * Create a http server running on port 8080 in NodeJs.
 * The server should return "Hello World" from the html document.
 */

const http = require('http');
const port = 8080;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><body><p>Hello World!</p></body></html>');
  res.end();
})
server.listen(8080, () => {
  console.log(`Server is up at http://localhost:${port} port`);
});
