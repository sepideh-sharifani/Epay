// by the usage of next-connect you can have a handler and with the use of handler
// you can use any type of request

//here is to create a simple sign up API
import nc from 'next-connect';
import db from '../../../utils/db';
import { validateEmail } from '../../../utils/validation';
import User from '../../../models/user';
import bcrypt from 'bcrypt';

const handler = nc();

handler.post(async (req, res) => {
	try {
		await db.connectDb();
		const { name, email, password, image } = req.body;
		if (!name || !email || !password) {
			return res
				.status(400)
				.json({ message: 'please fill in all the fields.' });
		}
		if (!validateEmail(email)) {
			return res.status(400).json({ message: 'The Email is invalid' });
		}

		const user = await User.findOne({ email });
		if (user) {
			return res.status(400).json({ message: 'This Email already exists' });
		}
		if (password.length < 6) {
			return res
				.status(400)
				.json({ message: 'Password must be at least 6 characters' });
		}
		//encrypting the password
		const cryptedPassword = await bcrypt.hash(password, 12);
		const newUser = new User({
			name,
			image,
			email,
			password: cryptedPassword,
		});
		const addedUser = await newUser.save();
		if (addedUser) {
			res.json({ message: 'Registered successfully' });
		}
		await db.disconnectDb();
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

export default handler;
