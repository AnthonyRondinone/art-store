import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../store/artStoreStore';
import ArtStoreServer from '../components/ArtStoreServer';
import 'bootstrap/dist/css/bootstrap.min.css';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const ArtStoreApp = (props) => (
  <Provider store={configureStore(props)}>
    <BrowserRouter>
      <ArtStoreServer />
    </BrowserRouter>
  </Provider>
);

export default ArtStoreApp;
