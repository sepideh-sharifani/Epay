// by the usage of next-connect you can have a handler and with the use of handler
// you can use any type of request

//here is to create a simple sign up API
import nc from 'next-connect';
import db from '../../../utils/db';

const handler = nc();

handler.post(async (req, res) => {
	try {
		await db.connectDb();
		console.log(req.body);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

export default handler;
