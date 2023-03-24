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

const initialState = {
	username: '',
	email: '',
	password: '',
	conf_pass: '',
};

const signup = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [user, setUser] = useState(initialState);
	const { username, email, password, conf_pass } = user;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const SignUpSchema = Yup.object().shape({
		username: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.matches(/^[aA-zZ]/, 'Numbers abd special characters are not allowed!')
			.required('You must enter a username'),
		email: Yup.string()
			.email('please enter a valid email address')
			.required('Email address is required'),
		password: Yup.string()
			.required('Password is required')
			.min(6, 'Password is too short - should be 6 chars minimum'),
		conf_pass: Yup.string()
			.required('confirm your password')
			.oneOf([Yup.ref('password')], 'passwords must match'),
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
								initialValues={{ username, email, password, conf_pass }}
								validationSchema={SignUpSchema}>
								{({ errors, touched }) => (
									<Form className={styles.form}>
										<h4>Register</h4>

										{/* username validation */}
										<Field
											type='text'
											name='username'
											onChange={handleChange}
											placeholder='username'
										/>
										{errors.username && touched.username ? (
											<span className={styles.error}>{errors.username}</span>
										) : null}

										{/* email validation */}
										<Field
											type='email'
											name='email'
											onChange={handleChange}
											placeholder='Email'
										/>
										{errors.email && touched.email ? (
											<span className={styles.error}>{errors.email}</span>
										) : null}

										{/* password validation */}
										<div className={styles.password}>
											<Field
												type={showPassword ? 'text' : 'password'}
												placeholder='password'
												name='password'
												onChange={handleChange}
											/>
											{errors.password && touched.password ? (
												<span className={styles.error}>{errors.password}</span>
											) : null}

											<span onClick={() => setShowPassword(!showPassword)}>
												{showPassword ? (
													<AiOutlineEyeInvisible />
												) : (
													<AiOutlineEye />
												)}
											</span>
										</div>

										{/* password confirmation */}
										<div className={styles.conf_pass}>
											<Field
												type='password'
												placeholder='password confirmation'
												name='conf_pass'
												onChange={handleChange}
											/>
											{errors.conf_pass && touched.conf_pass ? (
												<span className={styles.error}>{errors.conf_pass}</span>
											) : null}
										</div>

										<button
											type='submit'
											className={styles.button}>
											Sign Up
										</button>
									</Form>
								)}
							</Formik>
							<Link
								className={styles.text}
								href='/signin'>
								You are a member?
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default signup;
