import styless from './styles.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ProductSwiper from './ProductSwiper';
import { MdFlashOn } from 'react-icons/md';

function ProductsCard({ product }) {
	const [active, setActive] = useState(0);
	const [images, setImages] = useState(product.subProducts[active]?.images);
	const [price, setPrice] = useState(
		product.subProducts[active]?.sizes
			.map((s) => {
				return s.price;
			})
			.sort((a, b) => {
				return a - b;
			}),
	);
	const [styles, setStyles] = useState(
		product.subProducts.map((p) => {
			return p.color;
		}),
	);
	useEffect(() => {
		setImages(product.subProducts[active].images);
		setPrice(
			product.subProducts[active].sizes
				.map((s) => {
					return s.price;
				})
				.sort((a, b) => {
					return a - b;
				}),
		);
	}, [active]);
	return (
		<div className={styless.product}>
			<div className={styless.container}>
				<Link href={`/product/${product.slug}?style=${active}`}>
					<ProductSwiper images={images} />
				</Link>
				{product.subProducts[active].discount && (
					<div className={styless.flash}>
						<MdFlashOn />
						<span>{`-${product.subProducts[active].discount}%`}</span>
					</div>
				)}
				<div className={styless.productInfo}>
					<h1>
						{product.name.length > 45
							? `${product.name.substring(0, 45)}...`
							: product.name}
					</h1>
					<div className={styless.flex}>
						<div
							className={styless.price}
							onMouseOver={() => {}}>
							<span>
								{price.length === 1
									? `${price[0]}$`
									: `${price[0]}-${price[price.length - 1]}$`}
							</span>
						</div>
						<div className={styless.color}>
							{styles &&
								styles.map((style, i) =>
									style.color ? (
										<div
											style={{
												backgroundColor: `${product.subProducts[i].color.color}`,
											}}
											className={i == active && style.active}
											onMouseEnter={() => {
												setImages(product.subProducts[i].images);
												setActive(i);
											}}
										/>
									) : (
										<span
											onMouseEnter={() => {
												setImages(product.subProducts[i].images);
												setActive(i);
											}}></span>
									),
								)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductsCard;
