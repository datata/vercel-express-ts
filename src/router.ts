import { Router } from "express";

import { router as authRoutes } from "./auth/infrastructure/routes/authRoutes";

const router = Router();

router.use("/auth", authRoutes);

export { router };
