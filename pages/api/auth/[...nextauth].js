import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from './lib/mongodb';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../../../models/User';
import bcrypt from 'bcrypt';
import db from '../../../utils/db';

db.connectDb();
export default NextAuth({
	adapter: MongoDBAdapter(clientPromise),
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'username', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				//finding the user based on its email and password from db
				const email = credentials.email;
				const password = credentials.password;
				const user = await User.findOne({ email });
				if (user) {
					return SignInUser({ password, user });
				} else {
					throw new Error('This account does not exist');
				}
			},
		}),
	],
	callbacks: {
		async session({ session, token }) {
			//sub is the id of the user
			let user = await User.findById(token.sub);
			session.user.id = token.sub || user._id.toString();
			session.user.role = user.role;
			return session;
		},
	},
	pages: {
		signIn: '/signin',
	},
	session: {
		strategy: 'jwt',
	},
	secret: process.env.JWT_SECRET,
});

const SignInUser = async ({ password, user }) => {
	if (!user.password) {
		throw new Error('please enter your password');
	}
	const testPassword = await bcrypt.compare(password, user.password);
	if (!testPassword) {
		throw new Error('The email or password is wrong!');
	}
	return user;
};
