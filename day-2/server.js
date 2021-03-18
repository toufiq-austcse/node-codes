let http = require("http");
let routes = {
  "/hello": {
    type: "application/json",
    content: {
      message: "Welcome",
    },
  },
};

let createServer = (pid) => {
  return http.createServer((req, res) => {
    let url = req.url;
    if (routes[url]) {
      res.writeHead(200, {
        "content-type": routes[url].type,
      });
      res.write(JSON.stringify(routes[url].content));
      res.end();
      return;
    } else {
      console.log("No Route Found");
    }
  });
};

let runServer = (port, pid) => {
  let server = createServer(pid);
  server.listen(port || 3000, "", "", () => {
    console.log(`Running on port ${port} pid ${pid}`);
  });
};

runServer(8082, 25);
