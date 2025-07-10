import i18n from 'i18next';
import { initReactI18next } from'react-i18next';

import frTranslation from '@/i18n/fr_fr.json'
import enTranslation from '@/i18n/en_gb.json'

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: enTranslation
        },
        fr: {
            translation: frTranslation
        }
    },
    fallbackLng: 'en',
    lng: 'fr',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;