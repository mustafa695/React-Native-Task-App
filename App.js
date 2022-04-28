import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import {persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import Home from './src/Screen/Home';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;
