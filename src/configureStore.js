import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from './reducers';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login', 'drafts', 'draftsUi'],
};

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default (preloadedState) => {
  const store = createStore(
    persistedReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
