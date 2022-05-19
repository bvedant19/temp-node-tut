const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("this is our home page");
  }
  if (req.url === "/about") {
    res.end("this is our short history");
  }
  res.end(`
    <h1>Oops!!!</h1>
    <p>it doesn't seem you are on a right page<p>
    <p>get back to the home page</p>
    <a href="/">ack to the home</a>
    `);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listeaning to the ports");
});
