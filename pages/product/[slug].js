import Head from 'next/head';
import Product from '../../models/Product';
import styles from '../../styles/product.module.scss';
import db from '../../utils/db';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Category from '../../models/Category';
import SubCategory from '../../models/SubCategory';
import ProductMenu from '../../components/Header/ProductMenu';
import SearchBar from '../../components/searchBar/SearchBar';
import MainSwiper from '../../components/productPage/mainSwiper';
import { useState } from 'react';
import Infos from '../../components/productPage/info';

function product({ product }) {
	const [activeImage, setActiveImage] = useState('');
	console.log(product.subCategories);
	return (
		<div>
			<Head>
				<title>{product.name}</title>
			</Head>
			<Header />
			<SearchBar />
			<div className={styles.product}>
				<div className={styles.product__container}>
					<div className={styles.path}>
						Home/{product.category.name}
						{product.subCategories.map((item) => (
							<span>/{item.name}</span>
						))}
					</div>
				</div>
				<div className={styles.product__main}>
					<MainSwiper
						images={product.images}
						activeImage={activeImage}
					/>
					<Infos product={product} />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default product;

export async function getServerSideProps(context) {
	const { query } = context;

	const slug = query.slug;
	const style = query.style;
	const size = query.size || 0;

	db.connectDb();
	//finding the one product with the mentioned slug and use lean to return javascript object
	let product = await Product.findOne({ slug })
		.populate({ path: 'category', model: Category })
		.populate({ path: 'subCategories', model: SubCategory })
		.lean();
	let subProduct = product.subProducts[style];
	let prices = subProduct.sizes
		.map((item) => {
			return item.price;
		})
		.sort((a, b) => {
			return a - b;
		});

	let newProduct = {
		...product,
		style,
		images: subProduct.images,
		sizes: subProduct.sizes,
		discount: subProduct.discount,
		sku: subProduct.sku,
		colors: product.subProducts.map((item) => {
			return item.color;
		}),
		priceRange: subProduct.discount
			? `From ${(prices[0] - prices[0] / subProduct.discount).toFixed(
					2,
			  )}$ to ${(
					prices[prices.length - 1] -
					prices[prices.length - 1] / subProduct.discount
			  ).toFixed(2)}$`
			: `From ${prices[0]}$ to ${prices[prices.length - 1]}$`,
		price:
			subProduct.discount > 0
				? (
						subProduct.sizes[size].price -
						subProduct.sizes[size].price / subProduct.discount
				  ).toFixed(2)
				: subProduct.sizes[size].price,
		priceBefore: subProduct.sizes[size].price,
		quantity: subProduct.sizes[size].qty,
	};
	db.disconnectDb();
	return {
		props: { product: JSON.parse(JSON.stringify(newProduct)) },
	};
}
