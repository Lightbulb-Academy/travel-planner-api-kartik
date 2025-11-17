import express from "express";
import connectDB from "./config/db.js";
import HANDLERS from "./handlers/index.js";

const APP_SERVER = express();

connectDB()
  .then(() => {})
  .catch(() => {})
  .finally(() => {});

APP_SERVER.get("/", (req, res) => {
  res.send("Welcome to Wander Wise");
});

APP_SERVER.use(express.json());
APP_SERVER.use("/", HANDLERS);

APP_SERVER.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
