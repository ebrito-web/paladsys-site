// i18n.js - configuração do i18next com estrutura de pastas por idioma
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import pt from './locales/pt/translation.json';
import es from './locales/es/translation.json';
import fr from './locales/fr/translation.json';
import de from './locales/de/translation.json';
import ru from './locales/ru/translation.json';
import ar from './locales/ar/translation.json';
import fa from './locales/fa/translation.json';
import zh from './locales/zh/translation.json';
import hi from './locales/hi/translation.json';
import bn from './locales/bn/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
      es: { translation: es },
      fr: { translation: fr },
      de: { translation: de },
      ru: { translation: ru },
      ar: { translation: ar },
      fa: { translation: fa },
      zh: { translation: zh },
      hi: { translation: hi },
      bn: { translation: bn },
    },
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
