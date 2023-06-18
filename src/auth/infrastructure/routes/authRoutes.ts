import { Router } from "express";

import { register } from "../controllers/registerController/registerController";

const router = Router();

router.post("/register", register);

export { router };
