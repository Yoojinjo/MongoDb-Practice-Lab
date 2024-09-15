import express from "express";
const router = express.Router();
import Movie from "../models/movie.js";

//middleware to check if user exists
async function getMovie(req, res, next) {
	try {
		const results = await Movie.findById(req.params.id);
		if (!results) {
			return res.status(404).json({ error: "Movie not found" });
		}
		req.movie = results; //movie data stored in req for next middleware
		next();
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
}

//Get all movies
router.get("/", async (req, res) => {
	try {
		const movies = await Movie.find();
		res.status(200).json(movies);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
});

//Get one movie
//  use  middleware to check for movie
router.get("/:id", getMovie, async (req, res) => {
	try {
		res.status(200).json(req.movie);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
});

//Create one movie
router.post("/", async (req, res) => {
	try {
		const movie = await Movie.create({
			// movie info
			plot: req.body.plot,
			genres: req.body.genres,
			runtime: req.body.runtime,
			cast: req.body.cast,
			poster: req.body.poster,
			title: req.body.title,

			fullplot: req.body.fullplot,
			languages: req.body.languages,
			released: req.body.released,
			directors: req.body.directors,
			rated: req.body.rated,
			awards: {
				wins: req.body.awards.wins,
				nominations: req.body.awards.nominations,
				text: req.body.awards.text,
			},
			lastupdated: req.body.lastupdated,
			year: req.body.year,
			imdb: {
				rating: req.body.imdb.rating,
				votes: req.body.imdb.votes,
				id: req.body.imdb.id,
			},
			countries: req.body.countries,
			type: req.body.type,
			tomatoes: {
				viewer: {
					rating: req.body.tomatoes.viewer.rating,
					numReviews: req.body.tomatoes.viewer.numReviews,
					meter: req.body.tomatoes.viewer.meter,
				},
				fresh: req.body.tomatoes.fresh,
				critic: {
					rating: req.body.tomatoes.critic.rating,
					numReviews: req.body.tomatoes.critic.numReviews,
					meter: req.body.tomatoes.critic.meter,
				},
				rotten: req.body.tomatoes.rotten,
				lastupdated: req.body.tomatoes.lastupdated,
			},
			num_mflix_comments: req.body.num_mflix_comments,
		});
		console.log(movie);
		res.status(201).json(movie);
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: error.message });
	}
});

//Update one movie
router.patch("/:id", getMovie, async (req, res) => {
	try {
		const movieUpdated = await Movie.findByIdAndUpdate(
			req.params.id, // id from params
			req.body, // JSON data to update from the request body
			{ new: true, runValidators: true } // Option: return updated document
		);
		res.status(200).json(movieUpdated);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
});

//Delete one movie
router.delete("/:id", getMovie, async (req, res) => {
	try {
		await Movie.findByIdAndDelete(req.params.id); // Delete the movie by ID
		res.status(200).send(
			`Deleted movie with ${req.params.id} from database`
		);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

export default router;
