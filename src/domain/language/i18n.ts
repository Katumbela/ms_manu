
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importe os arquivos de idioma
import translationEN from '../locales/en.json';
import translationPT from '../locales/pt.json';

  const setItem = () => {
    localStorage.setItem("lang", "pt")
    return "pt"
  }
// Configuração do i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      pt: {
        translation: translationPT,
      },
    },
    lng: localStorage.getItem("lang") || setItem() , // idioma padrão
    fallbackLng: 'pt', // idioma de fallback
    interpolation: {
      escapeValue: false, // reagir não escapar nossas seqüências de tradução
    },
  });


export default i18n;
