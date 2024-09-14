import express from "express";
import "dotenv/config";
import connectDb from "./db.js";

const app = express();
const PORT = 3000;

app.use(express.json());
import usersRouter from "./routes/users.js";

app.get("/", async (req, res) => {
	try {
		console.log("Hello");
		const results = "Welcome to SBA MongoDB/Mongoose";
		await res.send(results);
	} catch (error) {
		console.log(error);
	}
});

app.use("/users", usersRouter);

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});
