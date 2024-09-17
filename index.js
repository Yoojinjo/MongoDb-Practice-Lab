import express from "express";
import "dotenv/config";
import connectDb from "./db.js";

const app = express();
const PORT = 3000;

//view engine eks
app.set("view engine", "ejs");

//set view engine
app.set("views", "./views");

//CSS
app.use(express.static("public"));

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
		const message = "Welcome to SBA MongoDB/Mongoose";
		res.render("index", { message }); //render EJS view for root route
		// await res.send(message);
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
