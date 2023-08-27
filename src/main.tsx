import './index.css';

import Backend, { HttpBackendOptions } from 'i18next-http-backend'

import App from './App.js';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import React from 'react';
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { initReactI18next } from 'react-i18next'

i18n.use(I18nextBrowserLanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    fallbackLng: 'en',
    load: 'currentOnly',
    debug: false,
    keySeparator: false,
    cleanCode: true,
    ns: [],
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  })

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
