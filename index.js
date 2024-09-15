import express from "express";
import "dotenv/config";
import connectDb from "./db.js";

const app = express();
const PORT = 3000;

//middleware
app.use(express.json());

//import routers
import usersRouter from "./routes/users.js";
import postsRouter from "./routes/posts.js";
import moviesRouter from "./routes/movies.js";

// use routers
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/movies", moviesRouter);

// root route :)
app.get("/", async (req, res) => {
	try {
		console.log("Hello");
		const results = "Welcome to SBA MongoDB/Mongoose";
		await res.send(results);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
});

// start server and connect to MongoDB
app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
	connectDb();
});
