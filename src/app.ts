import express from "express";
// import config = require("config");
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";

import deserializeUser from "./middleware/deserializeUser";

const port = config.get<number>("port");
// const host = config.get("host") as string;

const app = express();

app.use(express.json());

app.use(deserializeUser);

app.listen(port, async () => {
  logger.info(`Co gioi tiep tuc fix code dey http://localhost:${port}`);

  await connect();

  routes(app);
});
