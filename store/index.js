import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'; //to maintain data while refreshing
import { persistReducer } from 'redux-persist';
import cart from './cartSlice';

// for storing each data (userData, cardData) we will have a reducer
const reducers = combineReducers({ cart });

const config = {
	key: 'root',
	storage,
};

//not to lose the data on refresh
const reducer = persistReducer(config, reducers);

const store = configureStore({
	reducer: reducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: [thunk],
});

export default store;
