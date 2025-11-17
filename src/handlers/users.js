import { Router } from "express";
import createUser from "../services/user.js";

const USER_ROUTER = Router();

USER_ROUTER.post("/", async (req, res) => {
  const user = await createUser(req.body);
  res.status(201).json(user);
});

export default USER_ROUTER;
