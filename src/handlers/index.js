import { Router } from "express";
import USER_ROUTER from "./users.js";

const HANDLERS = Router();

HANDLERS.use("/users", USER_ROUTER);

export default HANDLERS;
