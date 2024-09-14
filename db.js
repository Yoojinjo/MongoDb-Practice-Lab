import mongoose from "mongoose";

const connectDb = async () => {
	try {
		await mongoose.connect(process.env.ATLAS_URI);
		console.log("MongoDB connect");
	} catch (error) {
		console.log(error);
	}
};
export default connectDb;
