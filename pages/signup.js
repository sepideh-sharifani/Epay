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
import axios from 'axios';
import SignUpLoader from '../components/Loader/SignUpLoader';
import Router from 'next/router';
import { BsFillCloudUploadFill } from 'react-icons/bs';

const initialState = {
	name: '',
	email: '',
	password: '',
	conf_pass: '',
	success: '',
	error: '',
	image: '',
};

const signup = () => {
	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [user, setUser] = useState(initialState);
	// const [newImage, setnewImage] = useState({ image: '' });
	const { name, email, password, conf_pass, success, error, image } = user;

	// const handleFileUpload = async (e) => {
	// 	const file = e.target.files[0];
	// 	const base64 = await convertTOBase64(file);
	// 	console.log(base64);
	// 	setUser({ ...user, image: base64 });
	// };

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const handleClose = async () => {
		setLoading(true);
	};

	const SignUpSchema = Yup.object().shape({
		name: Yup.string()
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

	const signUpHandler = async () => {
		try {
			setLoading(true);
			const { data } = await axios.post('/api/auth/signup', {
				name,
				email,
				password,
			});
			console.log(data);
			setUser({ ...user, error: '', success: data.message });
			setLoading(false);
			setTimeout(() => {
				Router.push('/signin');
			}, 1000);
		} catch (error) {
			setLoading(false);
			setUser({ ...user, success: '', error: error.response.data.message });
		}
	};

	return (
		<>
			{loading && <SignUpLoader loading={loading} />}
			<section className={styles.login}>
				<div className={styles.login__container}>
					<div className={styles.login__main}>
						<div className={styles.left}>
							<img
								className={styles.img2}
								src='./images/signup.png'
								alt='Epay'
							/>
						</div>
						<div className={styles.right}>
							<img
								className={styles.img1}
								src='./images/welcome.png'
								alt='Epay'
							/>

							<Formik
								enableReinitialize
								initialValues={{
									name,
									email,
									password,
									conf_pass,
								}}
								validationSchema={SignUpSchema}
								onSubmit={() => signUpHandler()}>
								{({ errors, touched }) => (
									<Form className={styles.form}>
										<h4>Register</h4>
										{/* image upload */}
										{/* <label
											htmlFor='file-upload'
											className={styles.userImg}>
											<img src={image || '/images/avatar.png'} />
											{image && <BsFillCloudUploadFill />}
										</label>
										<Field
											type='file'
											name='image'
											id='file-upload'
											className={styles.userInput}
											accept='.jpeg,.png,.jpg'
											onChange={(e) => handleFileUpload(e)}
										/> */}
										{/* username validation */}
										<Field
											type='text'
											name='name'
											onChange={handleChange}
											placeholder='username'
										/>
										{errors.name && touched.name ? (
											<span className={styles.error}>{errors.name}</span>
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
												placeholder={'password'}
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
										<div className={styles.password}>
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
							<div className={styles.success}>
								{success && <span>{success}</span>}
							</div>
							<div className={styles.error}>
								{error && <span>{error}</span>}
							</div>
						</div>
						<Link href='/'>
							<AiOutlineClose
								className={styles.close}
								onClick={() => handleClose()}
							/>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default signup;

// function convertTOBase64(file) {
// 	return new Promise((resolve, reject) => {
// 		const fileReader = new FileReader();
// 		if (file) {
// 			fileReader.readAsDataURL(file);
// 			fileReader.onload = () => {
// 				resolve(fileReader.result);
// 			};
// 		}
// 		fileReader.onerror = (error) => {
// 			reject(error);
// 		};
// 	});
// }
