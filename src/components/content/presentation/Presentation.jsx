import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Presentation.css';

function Presentation() {

    const { t, i18n: { changeLanguage, language } } = useTranslation();

    const [greetings, setGreetings] = useState("");

    useEffect(() => {
        const hour = new Date().getHours();
        var greeting =
            hour <= 6 ? t("presentation.greetings.good-dawn") :
                hour <= 12 ? t("presentation.greetings.good-morning") :
                    hour <= 18 ? t("presentation.greetings.good-afternoon") :
                        hour <= 24 ? t("presentation.greetings.good-evening") : '';
        setGreetings(greeting || t("presentation.welcome"));
    }, [language]);

    return (
        <section>
            <div className='intro'>
                <div className="photo-name">
                    <div className='name-rotate'>
                        <p>Paulo</p> <h3>Marques</h3> <p>Gonçalves</p>
                    </div>
                    <img src="https://avatars.githubusercontent.com/u/82685447?v=4" alt="Foto Paulo Marques Gonçalves" />
                </div>
                <div className='text-intro'>
                    <h1>{greetings}</h1>
                    <h1>
                        {t('presentation.text-1.phrase')}
                        <span className="emphasis">{t("presentation.text-1.key-word")}</span>
                    </h1>
                    <p>
                        {t('presentation.text-2.phrase-1')}
                        <span className="emphasis">{t('presentation.text-2.key-word-1')}</span>
                        {t('presentation.text-2.phrase-2')}
                        <span className="emphasis">{t('presentation.text-2.key-word-2')}</span>
                    </p>
                </div>
            </div>
            <div className='info'>
                <div className='language'>
                    <button className={`pt-br ${language === 'pt' ? '' : 'disabled'}`} type="button" onClick={() => { changeLanguage('pt') }} disabled={language === 'pt'}></button>
                    <button className={`en-us ${language === 'en' ? '' : 'disabled'}`} type="button" onClick={() => { changeLanguage('en') }} disabled={language === 'en'}></button>
                </div>
                <div className='social'>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-behance"></i></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </section>
    )
}

export default Presentation