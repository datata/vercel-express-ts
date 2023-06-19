import { Request, Response } from "express";

import { UserError } from "../../../domain/exception/UserError";

interface User {
	name: string | undefined | null;
	password: string | undefined | null;
	email: string | undefined | null;
}

export const register = (req: Request, res: Response): Response => {
	try {
		const { name, password, email } = req.body as User;

		if (name === "" || name === undefined || name === null) {
			throw new UserError("User Name is required");
		}

		if (email === "" || email === undefined || email === null) {
			throw new UserError("User email is required");
		}

		if (password === "" || password === undefined || password === null) {
			throw new UserError("User password is required");
		}

		return res.status(201).json({
			success: true,
			message: "User registered",
			data: {
				name,
				email,
				password,
			},
		});
	} catch (error) {
		if (error instanceof UserError) {
			if (error.message === "User Name is required") {
				return res.status(404).json({
					success: false,
					message: "User Name is required",
				});
			}

			if (error.message === "User email is required") {
				return res.status(404).json({
					success: false,
					message: "User Name is required",
				});
			}

			if (error.message === "User password is required") {
				return res.status(404).json({
					success: false,
					message: "User Name is required",
				});
			}
		}

		return res.status(201).json({
			success: false,
			message: "User cant be registered",
		});
	}
};
