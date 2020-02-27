import axios from 'axios';
// import { i } from 'react-i18next';
import i18n from '../localizations/i18n';

axios.defaults.headers.common['Authorization'] = localStorage.getItem('TOKEN');

i18n.on('languageChanged', (lng) => {
  axios.defaults.headers.common['Content-Language'] = lng;
});

export * from './account';
export * from './ui';
export * from './catalogs';
export * from './contract';
export * from './contractList';
