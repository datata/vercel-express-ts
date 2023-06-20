import "dotenv/config";

import express, { Request, Response } from "express";

import { router } from "./router";

const app = express();

const PORT = process.env.PORT ?? 4001;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	return res.send("Welcome to my app");
});

app.get("/healthy", (req: Request, res: Response) => {
	return res.send("Healthy");
});

app.use(router);

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
