import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import ru_RU from 'antd/lib/locale-provider/ru_RU'; // russian antd language
import uz_UZ from './localizations/uzbek/uz_UZ'; // uzbek antd language

import './assets/less/index.less';

import rootReducer from './reducers';
import Login from './view/Login';

import i18n from './localizations/i18n';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  rootReducer,
  {
    languages: {
      list: [{ id: 'ru', isActive: true }, { id: 'en', isActive: false }, { id: 'uz', isActive: false }],
      active: 'ru',
    },
  },
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

const activeLang = store.getState().languages.active;

i18n.changeLanguage(activeLang);

const languages = {
  uz: uz_UZ,
  ru: ru_RU,
};


ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Login />
    </I18nextProvider>
  </Provider>,
  document.getElementById('root'),
);
