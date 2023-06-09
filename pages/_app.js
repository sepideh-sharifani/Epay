import 'styles/globals.scss';
import { Provider } from 'react-redux';
import store from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';

let persistor = persistStore(store);

export default function App({
	Component,
	pageProps: { session, ...pageProps },
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
			<SessionProvider session={session}>
				<Provider store={store}>
					<PersistGate
						loading={null}
						persistor={persistor}>
						<Component {...pageProps} />
					</PersistGate>
				</Provider>
			</SessionProvider>
		</>
	);
}
