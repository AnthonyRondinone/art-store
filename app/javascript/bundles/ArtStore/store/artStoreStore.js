import { createStore, applyMiddleware } from 'redux';
import artStoreReducer from '../reducers/artStoreReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => createStore(artStoreReducer, 
    composeWithDevTools(applyMiddleware(thunk)
    ));

export default configureStore;