import "dotenv/config";

import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT ?? 4000;

app.get("/", (req: Request, res: Response) => {
	return res.send("Welcome to my app");
});

app.get("/healthy", (req: Request, res: Response) => {
	return res.send("Healthy");
});

app.get("/products", (req: Request, res: Response) => {
	return res.send("All Products");
});

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});
