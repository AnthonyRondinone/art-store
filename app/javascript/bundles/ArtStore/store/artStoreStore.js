import { createStore, applyMiddleware } from 'redux';
import artStoreReducer from '../reducers/artStoreReducer';
import thunk from 'redux-thunk';

const configureStore = () => createStore(artStoreReducer, applyMiddleware(thunk));

export default configureStore;
