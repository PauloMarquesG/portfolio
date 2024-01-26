import React from 'react';
import { useTranslation } from 'react-i18next';
import './Portfolio.css';

function Portfolio() {

    const { t } = useTranslation();

    return (
        <section id='projects' className='projects'>
            <h1>{t('portfolio.title')}</h1>
            <div className="cards">
                <div className="card">
                    <div className='cover'>
                        <img src="public/img/backbox.png" alt="" />
                        <div className='details'>
                            <h3>{t("portfolio.projects.backbox.name")}</h3>
                            <p>{t("portfolio.projects.backbox.icons")}</p>
                        </div>
                    </div>
                    <div className='description'>
                        <p>{t("portfolio.projects.backbox.date")}</p>
                        <button className='btn-view-more'>{t("portfolio.view-more")}</button>
                    </div>
                </div>
                <div className="card">
                    <div className='cover'>
                        <img src="public/img/portfolio.png" alt="" />
                        <div className='details'>
                            <h3>{t("portfolio.projects.portfolio.name")}</h3>
                            <p>{t("portfolio.projects.portfolio.icons")}</p>
                        </div>
                    </div>
                    <div className='description'>
                        <p className='description-p'>{t("portfolio.projects.portfolio.date")}</p>
                        <button className='btn-view-more'>{t("portfolio.view-more")}</button>
                    </div>
                </div>
                <div className="card">
                    <div className='cover'>
                        <img src="public/img/github.png" alt="" />
                        <div className='details'>
                            <h3>{t("portfolio.projects.github.name")}</h3>
                            <p>{t("portfolio.projects.github.icons")}</p>
                        </div>
                    </div>
                    <div className='description'>
                        <p>{t("portfolio.projects.github.date")}</p>
                        <button className='btn-view-more'>{t("portfolio.view-more")}</button>
                    </div>
                </div>
                <div className="card">
                    <div className='cover'>
                        <img src="public/img/jogoonca.png" alt="" />
                        <div className='details'>
                            <h3>{t("portfolio.projects.jogo-onca.name")}</h3>
                            <p>{t("portfolio.projects.jogo-onca.icons")}</p>
                        </div>
                    </div>
                    <div className='description'>
                        <p>{t("portfolio.projects.jogo-onca.date")}</p>
                        <button className='btn-view-more'>{t("portfolio.view-more")}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio