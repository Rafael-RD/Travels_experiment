import express from "express";
import httpStatus from "http-status";
import indexRouter from "./routes/index.router.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(indexRouter);

app.get("/health", (req, res) => res.sendStatus(httpStatus.OK));

app.listen(port, () => {
  console.log(`Server is up and running or port: ${port}`);
})