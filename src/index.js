import express from "express";
import connectDB from "./config/db.js";

const APP_SERVER = express();

connectDB()
  .then(() => {})
  .catch(() => {})
  .finally(() => {});

APP_SERVER.get("/", (req, res) => {
  res.send("Welcome to Wander Wise");
});

APP_SERVER.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
