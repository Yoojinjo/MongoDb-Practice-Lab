import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		validate: {
			validator: function (v) {
				return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Simple email regex validation
			},
			message: (props) => `${props.value} is not a valid email address!`,
		},
	},
	movie_id: String,
	text: String,
	date: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.model("Post", postSchema);