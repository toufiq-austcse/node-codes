const express = require("express");
const config = require("./config");
function createApp() {
  const app = express();
  app.use(express.json());

  app.get("/health", (req, res) => {
    res.status(200).send({ message: "Up and running" });
  });

  return app;
}

function bootstrap(apiConfig) {
  //console.log(apiConfig);
  let app = createApp();
  app.use(apiConfig.config.ENDPOINT, apiConfig.route);

  const port = process.env.PORT || config.DEFAULT_PORT;
  const server = app.listen(port, () => {
    console.log(`Server up and running at: ${port}`);
  });
}
module.exports = {
  bootstrap,
};
