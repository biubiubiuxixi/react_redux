import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

/**
 * 我们创建一个Redux存储区，它只能使用reducer作为参数来构造。存储在Redux存储区中的数据可以被直接访问，但只能通过提供的reducer进行更新。
 */

const store = createStore(rootReducer, composeWithDevTools());

export default store;