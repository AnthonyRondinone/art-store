import { createStore } from 'redux';
import artStoreReducer from '../reducers/artStoreReducer';

const configureStore = (railsProps) => createStore(artStoreReducer, railsProps);

export default configureStore;
