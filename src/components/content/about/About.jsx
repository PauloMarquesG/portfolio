import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

function About() {

    const { t, i18n: { language } } = useTranslation();


    const [years, setYears] = useState();

    useEffect(() => {
        setYears(Math.floor((new Date() - new Date('2003-06-10'))/31557600000));
    }, [language])

    return (
        <section id='about' className='about'>
            <h1>{t('about.title')}</h1>
            <div className="about-container">
                <div className='about-info'>
                    <h3>{t("about.about-info.name")}{years} {language === 'en' ? 'years old.' : 'anos.'}</h3>
                    <p>{t("about.about-info.phrase")}</p>
                    <span><i className="fa-solid fa-location-dot"></i> {t("about.about-info.location")}</span>
                </div>
                <div className="btn-about">
                    <a href='/public/doc/CV/PauloMarquesGoncalves_CV.pdf' target="_blank" className='btn'><p>{t("about.curriculum")} <i className="fa-solid fa-cloud-arrow-down"></i></p></a>
                </div>
            </div>
        </section>
    )
}

export default About