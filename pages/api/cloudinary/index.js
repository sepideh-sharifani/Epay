import nc from 'next-connect';
import cloudinary from 'cloudinary';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	cloud_key: process.env.CLOUDINARY_KEY,
	cloud_secret: process.env.CLOUDINARY_SECRET,
});
const handler = nc();

handler.post(async (req, res) => {});

export default handler;
