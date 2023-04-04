import { Inter } from 'next/font/google';
import styles from 'styles/Home.module.scss';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useSession } from 'next-auth/react';
import Main from '../components/home/main';
import FlashSale from '../components/home/flashSale';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const { data: session } = useSession();
	return (
		<>
			<Header />
			<div className={styles.home}>
				<div className={styles.mainContainer}>
					<Main />
					<FlashSale />
				</div>
			</div>
			<Footer />
		</>
	);
}

// export async function getServerSideProps() {
// 	let data = await axios
// 		.get('https://api.ipregistry.co/?key=56qf6m8c5glcb8v4')
// 		.then((res) => {
// 			return res.data.location.country;
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		});
// 	return {
// 		props: {
// 			country: {
// 				name: 'USA',
// 				flag: 'https://flagpedia.net/data/flags/w1160/us.webp',
// 			},
// 		},
// 	};
// }
