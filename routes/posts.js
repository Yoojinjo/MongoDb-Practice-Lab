import express from "express";
const router = express.Router();
import Post from "../models/post.js";

//middleware to check if user exists
async function getPost(req, res, next) {
	try {
		const results = await Post.findById(req.params.id);
		if (!results) {
			return res.status(404).json({ error: "Post not found" });
		}
		req.post = results; //post data stored in req for next middleware
		next();
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
}

//Get all posts
router.get("/", async (req, res) => {
	try {
		const posts = await Post.find();
		res.status(200).json(posts);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
});

//Get one user
//  use  middleware to check for user
router.get("/:id", getPost, async (req, res) => {
	try {
		// const results = await User.findById(req.params.id);
		// if (!results) {
		// 	return res.status(404).json({ error: "User not found" });
		// }
		// res.status(200).json(results);
		res.status(200).json(req.post);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
});

//Create one user
router.post("/", async (req, res) => {
	try {
		const post = await Post.create({
			// post info
		});
		console.log(post);
		res.status(201).json(post);
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: error.message });
	}
});

//Update one user
router.patch("/:id", getPost, async (req, res) => {
	try {
		const postUpdated = await Post.findByIdAndUpdate(
			req.params.id, // id from params
			req.body, // JSON data to update from the request body
			{ new: true, runValidators: true } // Option: return updated document
		);
		res.status(200).json(postUpdated);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
});

//Delete one user
router.delete("/:id", getPost, async (req, res) => {
	try {
		await Post.findByIdAndDelete(req.params.id); // Delete the user by ID
		res.status(200).send(`Deleted ${req.params.id} from database`);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

export default router;