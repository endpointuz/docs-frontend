import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { I18nextProvider } from 'react-i18next';

import ru_RU from 'antd/lib/locale-provider/ru_RU'; // russian antd language
import uz_UZ from './localizations/uzbek/uz_UZ'; // uzbek antd language

import './assets/less/index.less';

import App from './view';

import i18n from './localizations/i18n';

import configureStore from './configureStore';

const { store, persistor } = configureStore({
  languages: {
    list: [{ id: 'ru', isActive: true }, { id: 'en', isActive: false }, { id: 'uz', isActive: false }],
    active: 'ru',
  },
});

// persistor.purge();

const activeLang = store.getState().languages.active;

i18n.changeLanguage(activeLang);

const languages = {
  uz: uz_UZ,
  ru: ru_RU,
};


ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root'),
);
