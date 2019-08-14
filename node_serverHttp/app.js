const http = require("http");
const server = http.createServer((req, res) => {
  //   res.write("hello");
  //   res.end();
  //   res.writeHead(200, {
  //     "Content-type": "text/html"
  //   });
  let body = null;
  let status = 200;
  if (req.url === "/") {
    body = "home";
  } else if (req.url === "about") {
    body = "About";
  } else {
    body = "not found";
    status = 404;
  }
  //res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  res.write(body);
  res.write(`<h1>HTTP ${req.httpVersion}</h1><h2>${req.method}</h2>`);

  res.write(`${req.url}`);

  res.end();
});

server.listen(8080, () => {
  console.log("server is active");
});
