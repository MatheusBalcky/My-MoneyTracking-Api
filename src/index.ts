import express from "express";
import cors from "cors";
import "express-async-errors";
import routes from "./routes/index";

const app = express();
app.use(cors(), express.json());

app.use(routes);

app.get("/test", (req, res) => {
  res.status(200).send("Hello world");
});

export default app;
