import styles from '../styles/signIn.module.scss';
import {
	AiOutlineEyeInvisible,
	AiOutlineEye,
	AiOutlineClose,
} from 'react-icons/ai';
import { useState } from 'react';
import Link from 'next/link';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { getProviders } from 'next-auth/react';
import { signIn } from 'next-auth/react';

const initialState = {
	login_email: '',
	login_password: '',
};

const signin = ({ providers }) => {
	const [showPassword, setShowPassword] = useState(false);
	const [user, setUser] = useState(initialState);
	const { login_email, login_password } = user;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const SignInSchema = Yup.object().shape({
		login_email: Yup.string()
			.email('please enter a valid email address')
			.required('Email address is required'),

		login_password: Yup.string()
			.required('Password is required')
			.min(4, 'Password is too short - should be 4 chars minimum'),
	});

	return (
		<>
			<section className={styles.login}>
				<div className={styles.login__container}>
					<div className={styles.login__main}>
						<div className={styles.left}>
							<img
								className={styles.img2}
								src='./images/login2.png'
								alt='Epay'
							/>
						</div>
						<div className={styles.right}>
							<Link href='/'>
								<AiOutlineClose className={styles.close} />
							</Link>

							<img
								className={styles.img1}
								src='./images/welcome.png'
								alt='Epay'
							/>

							<Formik
								enableReinitialize
								initialValues={{ login_email, login_password }}
								validationSchema={SignInSchema}>
								{({ errors, touched }) => (
									<Form className={styles.form}>
										<h4>Login</h4>

										{/* email validation */}
										<Field
											type='email'
											name='login_email'
											onChange={handleChange}
											placeholder='Email'
										/>
										{errors.login_email && touched.login_email ? (
											<span className={styles.error}>{errors.login_email}</span>
										) : null}

										{/* password validation */}
										<div className={styles.password}>
											<Field
												type={showPassword ? 'text' : 'password'}
												placeholder='password'
												name='login_password'
												onChange={handleChange}
											/>
											{errors.login_password && touched.login_password ? (
												<span className={styles.error}>
													{errors.login_password}
												</span>
											) : null}

											<span onClick={() => setShowPassword(!showPassword)}>
												{showPassword ? (
													<AiOutlineEyeInvisible />
												) : (
													<AiOutlineEye />
												)}
											</span>
										</div>

										<button
											type='submit'
											className={styles.button}>
											Login
										</button>
									</Form>
								)}
							</Formik>
							<div className={styles.socials}>
								{Object.values(providers).map((provider) => (
									<div key={provider.name}>
										<button
											className={styles.btn}
											onClick={() => signIn(provider.id)}>
											<img
												className={styles.img}
												src='./images/google.png'
											/>
											Sign in with {provider.name}
										</button>
									</div>
								))}
							</div>

							<Link
								className={styles.text}
								href='#'>
								Forget password
							</Link>
							<span className={styles.text}>
								Dont have an account? <Link href='/signup'>Register</Link>
							</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default signin;

export async function getServerSideProps() {
	const providers = await getProviders();
	console.log(providers);
	return {
		props: { providers },
	};
}
