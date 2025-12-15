import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import hi from './locales/hi.json';
import mr from './locales/mr.json';

i18n
  .use(LanguageDetector) // Detects browser language
  .use(initReactI18next) // Connects with React
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      mr: { translation: mr }
    },
    fallbackLng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
