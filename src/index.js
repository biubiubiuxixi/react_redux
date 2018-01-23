import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { addToCart, deleteFromCart, updateCart } from './actions/cartActions';

console.log('initialState:',store.getState());

/** 监听store事件的更改 */
let unsubscrible = store.subscribe(() => 
    console.log(store.getState())
);

/** 添加商品 */
store.dispatch(addToCart('Coffe 500mg', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2l', 1 ,250));

store.dispatch(deleteFromCart('Juice 2l'));
store.dispatch(updateCart('Coffe 500mg', 3, 250));
store.dispatch(updateCart('Coffe 500mg', 3, 258));

unsubscrible();

const App = <h1>Redux Shopping cart</h1>

ReactDOM.render(
    <Provider store={store}>
        {App}
    </Provider>, document.getElementById('root')
);