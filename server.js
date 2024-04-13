const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // set header content type
  res.writeHead(200, { "Content-Type": "text/html" });

  //send an html file
  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.stautsCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.stautsCode = 200;
      break;
    case "/about-me":
      res.stautsCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.stautsCode = 404;
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  });
});

server.listen(3000),
  "localHost",
  () => {
    console.log("Server is running on port 3000");
  };
