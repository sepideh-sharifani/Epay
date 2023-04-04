export const validateEmail = (email) => {
	const regexSt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return regexSt.test(email);
};
