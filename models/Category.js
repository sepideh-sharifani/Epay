import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema;
const categorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			minLength: [2, 'must be at least 2 characters'],
			maxLength: [32, 'must be at last 32 characters'],
		},
		//for controlling the category in URL
		slug: {
			type: String,
			unique: true,
			lowercase: true,
			index: true,
		},
	},
	{
		timestamps: true,
	},
);

const Category =
	mongoose.models.Category || mongoose.model('Category', categorySchema);
export default Category;
