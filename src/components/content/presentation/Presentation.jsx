import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Presentation.css';

function Presentation() {

    const { t, i18n: { changeLanguage, language } } = useTranslation();

    const [greetings, setGreetings] = useState("");
    const [countYears, setCountYears] = useState(0);

    useEffect(() => {
        const year = new Date().getFullYear();
        setCountYears(year - 2018);
        const hour = new Date().getHours();
        var greeting =
            hour <= 6 ? t("presentation.greetings.good-dawn") :
                hour <= 12 ? t("presentation.greetings.good-morning") :
                    hour <= 18 ? t("presentation.greetings.good-afternoon") :
                        hour <= 21 ? t("presentation.greetings.good-evening") : '';
        setGreetings(greeting || t("presentation.welcome"));
    }, [language]);

    return (
        <section id='home' className='presentation'>
            <div className='intro'>
                <div className="photo-name">
                    <div className='name-rotate'>
                        <p>Paulo</p> <h3>Marques</h3> <p>Gonçalves</p>
                    </div>
                    <img src="/img/foto-paulo.png" alt="Foto Paulo Marques Gonçalves" />
                </div>
                <div className='text-intro'>
                    <h1 className='title'>{greetings}</h1>
                    <h2 dangerouslySetInnerHTML={{ __html: t('presentation.title') }} />
                    <p dangerouslySetInnerHTML={{ __html: t('presentation.phrase', { years: countYears }) }} />
                    <div className='btn-presentation'>
                        <a href='/doc/CV/PauloMarquesGoncalves_CV.pdf' target="_blank" className='btn'><p>{t("presentation.curriculum")} <i className="fa-solid fa-cloud-arrow-down"></i></p></a>
                        <a href='mailto:paulomarquesg06@gmail.com' target='_blank' className='btn'><p>{t("presentation.email")} <i className="fa-regular fa-envelope"></i></p></a>
                    </div>
                </div>
            </div>
            <div className='info'>
                <div className='language'>
                    <abbr title="PT-BR"><button className={`pt-br ${language === 'pt' ? '' : 'disabled'}`} type="button" onClick={() => { changeLanguage('pt') }} disabled={language === 'pt'}></button></abbr>
                    <abbr title="EN-US"><button className={`en-us ${language === 'en' ? '' : 'disabled'}`} type="button" onClick={() => { changeLanguage('en') }} disabled={language === 'en'}></button></abbr>
                </div>
                <div className='social'>
                    {t("presentation.social", { returnObjects: true }).map((item, index) => (
                        <abbr key={index} title={item.rel}>
                            <a href={item.link} target="_blank" rel={item.rel}>
                                <i className={`fa-brands fa-${item.name}`}></i>
                            </a>
                        </abbr>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Presentation
