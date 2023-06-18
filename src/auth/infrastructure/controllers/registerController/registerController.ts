import { Request, Response } from "express";

export const register = (req: Request, res: Response): Response => {
	return res.status(201).json({
		success: true,
		message: "User registered",
	});
};
