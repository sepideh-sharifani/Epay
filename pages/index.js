import { Inter } from 'next/font/google';
import styles from '../styles/Home.module.scss';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FlashSale from '../components/home/flashSale';
import ProductCategory from '../components/home/category';
import Banner from '../components/home/banner';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import HeaderMain from '../components/menuBar/HeaderMain';
import Main from '../components/home/main';
import productFetch from "../data/products.json";

const inter = Inter({ subsets: ['latin'] });

export default function Home({ products }) {

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
							{/*{products.slice(0, 6).map((product) => (*/}
							{/*	<ProductsCard*/}
							{/*		product={product}*/}
							{/*		key={product._id}*/}
							{/*	/>*/}
							{/*))}*/}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export async function getServerSideProps() {
	// const res = await fetch('http://localhost:8080/api/products');
	// const products = await res.json();

	const products = productFetch;

	return {
		props: {
			products,
		},
	};
}