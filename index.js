import express from "express";
import "dotenv/config";
import connectDb from "./db.js";

const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {
	try {
		console.log("Hello");
		const results = "test";
		await res.send;
	} catch (error) {
		console.log(error);
	}
});

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});
