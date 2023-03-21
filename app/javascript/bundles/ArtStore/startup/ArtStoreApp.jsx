import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../store/artStoreStore';
import ArtStoreServer from '../components/ArtStoreServer';
import 'bootstrap/dist/css/bootstrap.min.css';

const ArtStoreApp = (props) => (
  <Provider store={configureStore(props)}>
    <BrowserRouter>
      <ArtStoreServer />
    </BrowserRouter>
  </Provider>
);

export default ArtStoreApp;
