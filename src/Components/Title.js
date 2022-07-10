import { useTranslation } from 'react-i18next';
import i18n from "i18next";
import React from 'react';
import { initReactI18next } from "react-i18next";
import ten from '../locals/en/translation.json'
import tde from '../locals/de/translation.json'
import tmarathi from '../locals/marathi/translation.json'
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: ten
      },
      de: {
        translation: tde
      },
      marathi: {
        translation: tmarathi
      }
    },
   
 
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });
export default function Title(){
    const changeLang = (l)=> {
        return ()=>{
          i18n.changeLanguage(l);
        }
      }
    const { t } =useTranslation();
    
    return(
    <React.Fragment>
        <h1>{t('welcome to shopping')}</h1>
        <button onClick={changeLang('en') }>English</button>
        <button onClick={ changeLang('de') }>Dutch</button>
        <button onClick={changeLang('marathi') }>marathi</button>
    </React.Fragment>);
}