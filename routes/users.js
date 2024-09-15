import express from "express";
const router = express.Router();
import User from "../models/user.js";

//middleware to check if user exists
async function getUser(req, res, next) {
	try {
		const results = await User.findById(req.params.id);
		if (!results) {
			return res.status(404).json({ error: "User not found" });
		}
		req.user = results; //user data stored in req for next middleware
		next();
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
}

//Get all users
router.get("/", async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
});

//Get one user
//  use  middleware to check for user
router.get("/:id", getUser, async (req, res) => {
	try {
		// const results = await User.findById(req.params.id);
		// if (!results) {
		// 	return res.status(404).json({ error: "User not found" });
		// }
		// res.status(200).json(results);
		res.status(200).json(req.user);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
});

//Create one user
router.post("/", async (req, res) => {
	try {
		const user = await User.create({
			name: req.body.name,
			// user_id: req.body.user_id,
			email: req.body.email,
			password: req.body.password,
		});
		console.log(user);
		res.status(201).json(user);
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: error.message });
	}
});

//Update one user
router.put("/:id", getUser, async (req, res) => {
	try {
		res.status(200).send("testUpdate");
	} catch (error) {
		console.log(error);
	}
});

//Delete one user
router.delete("/:id", getUser, async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id); // Delete the user by ID
		res.status(200).send(`Deleted ${req.params.id} from database`);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

export default router;
