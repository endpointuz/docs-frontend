import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import UZ from './uzbek/translation.json';
import RU from './russian/translation.json';

i18n
  .use(initReactI18next)
  .init({
    // lng: 'en',
    fallbackLng: 'uz',
    debug: !(process.env.NODE_ENV === 'production'),
    resources: {
      ru: {
        translations: RU,
      },
      uz: {
        translations: UZ,
      },
    },

    ns: ['translations'],
    defaultNS: 'translations',

    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  });


export default i18n;
