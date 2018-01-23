import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';

const allReducers = {
    products: productsReducer,
    cart: cartReducer,
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;