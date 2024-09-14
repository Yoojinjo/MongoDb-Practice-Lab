import express from "express";
const router = express.Router();
import connectDb from "../db.js";

//Get all user
router.get("/", async (req, res) => {
	try {
		await res.send("testGetAll").status(200);
	} catch (error) {
		console.log(error);
	}
});

//Get one user
router.get("/:id", async (req, res) => {
	try {
		await res.send("testGetOne").status(200);
	} catch (error) {
		console.log(error);
	}
});

//Create one user
router.post("/", async (req, res) => {
	try {
		await res.send("testPost").status(200);
	} catch (error) {
		console.log(error);
	}
});

//Update one user
router.put("/:id", async (req, res) => {
	try {
		await res.send("testUpdate").status(200);
	} catch (error) {
		console.log(error);
	}
});

//Delete one user
router.delete("/:id", async (req, res) => {
	try {
		await res.send("testDelete").status(200);
	} catch (error) {
		console.log(error);
	}
});

export default router;
