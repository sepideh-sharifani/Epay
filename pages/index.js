import styles from '../styles/Home.module.scss';
import Header from '../components/Header';
import HeaderMain from '../components/menuBar/HeaderMain';
import Main from '../components/home/main';

export default function Home({products}) {

    return (
        <>
            <Header/>
            <HeaderMain/>
            <div className={styles.home}>
                <div className={styles.mainContainer}>
                    <Main/>
                    {/*<FlashSale products={products} />*/}
                    {/*<ProductCategory />*/}
                    {/*<Banner />*/}
                    {/*<div className={styles.product}>*/}
                    {/*	<div className={styles.top}>*/}
                    {/*		<div className={styles.top__header}>*/}
                    {/*			<h2>Top deals</h2>*/}
                    {/*			<h6>*/}
                    {/*				View More*/}
                    {/*				<MdOutlineKeyboardArrowRight />*/}
                    {/*			</h6>*/}
                    {/*		</div>*/}
                    {/*		<div className={styles.divider} />*/}
                    {/*	</div>*/}
                    {/*	<div className={styles.productContainer}>*/}
                    {/*		/!*{products.slice(0, 6).map((product) => (*!/*/}
                    {/*		/!*	<ProductsCard*!/*/}
                    {/*		/!*		product={product}*!/*/}
                    {/*		/!*		key={product._id}*!/*/}
                    {/*		/!*	/>*!/*/}
                    {/*		/!*))}*!/*/}
                    {/*	</div>*/}
                    {/*</div>*/}
                </div>
            </div>
            {/*<Footer />*/}
        </>
    );
}

export async function getServerSideProps() {

    const res = await fetch('http://localhost:8082/product/fetchAll');
    const products = await res.json();

    return {
        props: {
            products,
        },
    };
}