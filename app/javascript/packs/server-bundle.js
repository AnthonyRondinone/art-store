import ReactOnRails from 'react-on-rails';

import ArtStore from '../bundles/ArtStore/components/ArtStoreServer';

// This is how react_on_rails can see the ArtStore in the browser.
ReactOnRails.register({
  ArtStore,
});
