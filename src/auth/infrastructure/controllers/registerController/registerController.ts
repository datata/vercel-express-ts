import { Request, Response } from "express";

import { UserError } from "../../../domain/exception/UserError";

interface User {
	name: string | undefined | null;
	password: string | undefined | null;
	email: string | undefined | null;
}

const registerUserRequestValidation = (requestBody: User) => {
	if (!requestBody.name) {
		throw new UserError("User Name is required");
	}

	if (!requestBody.email) {
		throw new UserError("User email is required");
	}

	if (!requestBody.password) {
		throw new UserError("User password is required");
	}

	return true;
};

export const register = (req: Request, res: Response): Response => {
	try {
		const { name, password, email } = req.body as User;

		registerUserRequestValidation({ name, password, email });

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
			return res.status(400).json({
				success: false,
				message: error.message,
			});
		}

		return res.status(201).json({
			success: false,
			message: "User cant be registered",
		});
	}
};
