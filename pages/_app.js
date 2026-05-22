import '../styles/globals.scss';
import { Provider } from 'react-redux';
import {persistor, store} from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import Head from 'next/head';

export default function App({
	Component,
	pageProps: { ...pageProps },
}) {
	return (
		<>
			<Head>
				<title>Epay</title>
				<meta
					name='description'
					content='Ecommerce App'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
				<script
					src='https://www.google.com/recaptcha/api.js'
					async
					defer></script>
			</Head>
				<Provider store={store}>
					<PersistGate
						loading={null}
						persistor={persistor}>
						<Component {...pageProps} />
					</PersistGate>
				</Provider>
		</>
	);
}
