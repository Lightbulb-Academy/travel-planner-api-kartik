import { Router } from "express";
import { createUser, findAllUsers } from "../services/user.js";

const USER_ROUTER = Router();

USER_ROUTER.post("/", async (req, res) => {
  const user = await createUser(req.body);
  res.status(201).json(user);
});

USER_ROUTER.get("/", async (req, res) => {
  const users = await findAllUsers();
  res.status(200).json(users);
});

export default USER_ROUTER;
