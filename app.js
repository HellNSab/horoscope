import express from "express";
import { zodiacRouter } from "./routers/zodiacRouter.js";

const app = express();
app.use("/", zodiacRouter);
if (process.env.NODE_ENV !== "test") {
  app.listen(3000, function () {
    console.log("Listening on port 3000");
  });
}
