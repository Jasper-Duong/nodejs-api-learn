const http = require("http");

const PORT = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/user") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(
      JSON.stringify({
        name: "Duong Ngoc Hung",
        age: 23,
      })
    );
  } else if (req.url === "/list") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Buy some food</li>");
    res.write("<li>Water the plants</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

// server.close();
