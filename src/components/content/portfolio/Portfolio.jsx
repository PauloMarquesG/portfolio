import React from 'react';
import { useTranslation } from 'react-i18next';
import './Portfolio.css';

function Portfolio() {

    const { t } = useTranslation();

    return (
        <section id='projects' className='projects'>
            <h1 className='title'>{t('portfolio.title')}</h1>
            <div className="cards">
                {t("portfolio.projects",  { returnObjects: true }).map(item => (
                    <div className="card" key={item.name}>
                        <div className='cover'>
                            <img src={`public/img/${item.archive}.png`} alt="" />
                            <div className='details'>
                                <h3>{item.name}</h3>
                                <p>{item.icons}</p>
                            </div>
                        </div>
                        <div className='description'>
                            <p>{item.date}</p>
                            <button className='btn-view-more'>{t("portfolio.view-more")}</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio