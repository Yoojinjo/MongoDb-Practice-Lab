import express from "express";
const router = express.Router();
import User from "../models/user.js";

//Get all user
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
router.get("/:id", async (req, res) => {
	try {
		res.status(200).send(req.params.id);
	} catch (error) {
		console.log(error);
	}
});

//Create one user
router.post("/", async (req, res) => {
	try {
		const user = await User.create({
			name: req.body.name,
			user_id: req.body.user_id,
			email: req.body.email,
		});
		res.status(201).json(user);
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: error.message });
	}
});

//Update one user
router.put("/:id", async (req, res) => {
	try {
		res.status(200).send("testUpdate");
	} catch (error) {
		console.log(error);
	}
});

//Delete one user
router.delete("/:id", async (req, res) => {
	try {
		res.status(200).send("testDelete");
	} catch (error) {
		console.log(error);
	}
});

export default router;
