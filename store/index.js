import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cart from './cartSlice';

const reducers = combineReducers({ cart });

const config = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(config, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	// Required to ignore non-serializable actions from redux-persist
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
			},
		}),
});

// Initialize persistor only on the client
export const persistor = typeof window !== 'undefined' ? persistStore(store) : null;
