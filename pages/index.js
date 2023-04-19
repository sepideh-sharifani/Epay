import { Inter } from 'next/font/google';
import styles from 'styles/Home.module.scss';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useSession } from 'next-auth/react';
import FlashSale from '../components/home/flashSale';
import ProductCategory from '../components/home/category';
import Banner from '../components/home/banner';
import Product from '../models/Product';
import ProductsCard from '../components/products';
import db from '../utils/db';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import HeaderMain from '../components/menuBar/HeaderMain';
import Main from '../components/home/main';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ products }) {
	const { data: session } = useSession();

	return (
		<>
			<Header />
			<HeaderMain />
			<div className={styles.home}>
				<div className={styles.mainContainer}>
					<Main />
					<FlashSale products={products} />
					<ProductCategory />
					<Banner />
					<div className={styles.product}>
						<div className={styles.top}>
							<div className={styles.top__header}>
								<h2>Top deals</h2>
								<h6>
									View More
									<MdOutlineKeyboardArrowRight />
								</h6>
							</div>
							<div className={styles.divider} />
						</div>
						<div className={styles.productContainer}>
							{products.slice(0, 6).map((product) => (
								<ProductsCard
									product={product}
									key={product._id}
								/>
							))}
						</div>
					</div>
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

export async function getServerSideProps() {
	db.connectDb();
	//first find the product and then sort them based on the date(newest first)
	let products = await Product.find().sort({ createdAt: -1 }).lean();
	return {
		props: {
			products: JSON.parse(JSON.stringify(products)),
		},
	};
}
