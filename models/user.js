import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	user_id: {
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
});

export default mongoose.model("User", userSchema);
