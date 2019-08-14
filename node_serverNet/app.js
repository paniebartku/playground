const fs = require("fs");
const net = require("net");

const server = net.createServer(socket => {
  socket.write("elo melo");

  let counter = 0;
  const interval = setInterval(() => {
    if (counter === 10) {
      clearInterval(interval);
      socket.end();
      return;
    }
    socket.write(String(++counter));
  }, 1000);
  socket.on("data", data => {
    console.log(data.toString());
  });
});

server.listen(8080, () => {
  console.log("server start");
});

const client = net.connect({ port: 8080 });

client.setEncoding("utf8");

client.on("data", () => {
  fs.readFile("data.txt", "utf8", (err, data) => {
    client.write("some data from: " + data);
  });
});

client.on("close", function() {
  console.log("shutdown");
});
