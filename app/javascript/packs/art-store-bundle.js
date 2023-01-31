import ReactOnRails from 'react-on-rails';

import ArtStoreApp from '../bundles/ArtStore/startup/ArtStoreApp';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  ArtStoreApp,
});
