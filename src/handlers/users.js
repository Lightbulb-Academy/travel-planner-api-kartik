import { Router } from "express";
import {
  createUser,
  findAllUsers,
  findUserById,
  updateUserById,
  deleteUserById,
} from "../services/user.js";

const USER_ROUTER = Router();

USER_ROUTER.post("/", async (req, res) => {
  const user = await createUser(req.body);
  res.status(201).json(user);
});

USER_ROUTER.get("/", async (req, res) => {
  const users = await findAllUsers();
  res.status(200).json(users);
});

USER_ROUTER.get("/:id", async (req, res) => {
  const user = await findUserById(req.params.id);
  res.status(200).json(user);
});

USER_ROUTER.patch("/:id", async (req, res) => {
  const user = await updateUserById(req.params.id, req.body);
  res.status(200).json(user);
});

USER_ROUTER.delete("/:id", async (req, res) => {
  const user = await deleteUserById(req.params.id);
  res.status(200).json(user);
});

export default USER_ROUTER;
