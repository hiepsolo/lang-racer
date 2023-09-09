import Backend from "i18next-chained-backend";
import HttpApi from 'i18next-http-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    backend: {
      backends: [
        LocalStorageBackend,
        HttpApi
      ],
      backendOptions: [],
      cacheHitMode: 'refreshAndUpdateStore',
    },
    react: {
      bindI18nStore: 'added',
    },
  })

export default i18n