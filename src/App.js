import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react';

import './App.css';
import Routes from './routes';
import rootReducer from './store/reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// default redux store
const myStore = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

// store kept in localstorage
const persistor = persistStore(myStore);

// Redux
const ReduxApp = () => (
  <Provider store={myStore}>
    <PersistGate loading={null} persistor={persistor}>
      <div className="App">
        <Routes />
      </div>
    </PersistGate>
  </Provider>
);
export default ReduxApp;
