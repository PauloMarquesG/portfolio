import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

function About() {

    const { t, i18n: { language } } = useTranslation();


    const [years, setYears] = useState();

    useEffect(() => {
        setYears(Math.floor((new Date() - new Date('2003-06-10')) / 31557600000));
    }, [language])

    return (
        <section id='about' className='about'>
            <div className='about-border'>
                <h1 className='title'>{t('about.title')}</h1>
                <div className='about-info'>
                    <h3>{t("about.about-info.name", { years: years })}</h3>
                    <p>{t("about.about-info.phrase")}</p>
                    <p><i className="fa-solid fa-location-dot"></i> {t("about.about-info.location")}</p>
                </div>
            </div>
        </section>
    )
}

export default About