const http = require("http");
const fs = require("fs");
const path = require("path");
const root = __dirname;
http.createServer((req, res) => {
  const name = req.url.split("?")[0] === "/" ? "INDEX.HTML" : req.url.split("?")[0].replace(/^[/\\]+/, "");
  const file = path.join(root, name);
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("not found");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(data);
  });
}).listen(8765, () => console.log("listening"));
