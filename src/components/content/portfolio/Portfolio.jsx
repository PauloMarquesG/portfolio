import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Portfolio.css';

function Portfolio() {

    const { t } = useTranslation();

    const [bodyOverFlow, setBodyOverflow] = useState('');
    const [projectModal, setProjectModal] = useState({});

    const handleProjectsClick = (index) => {
        bodyOverFlow === 'hidden' ? document.body.classList.remove("blur") : document.body.classList.add("blur");
        document.body.style.overflow = bodyOverFlow === '' ? 'hidden' : '';
        setProjectModal(t(`portfolio.projects.${index}`, { returnObjects: true }));
        setBodyOverflow((prevBodyOverflow) => (prevBodyOverflow === '' ? 'hidden' : ''));
    }

    return (
        <section id='projects' className='projects'>
            <div className={`modal-project ${bodyOverFlow ? 'visible' : ''}`}>
                <div className='project'>
                    <img className='project-img' src={`/img/${projectModal.archive}.png`} alt="" />
                    <div className="project-infos">
                        <div className="project-info">
                            <h1>{projectModal.name}</h1>
                            <p>{projectModal.description}</p>
                        </div>
                        <span><i>{projectModal.date}</i></span>
                    </div>
                </div>
                <div className="project-links">
                    <a href={projectModal.link_online} className={`p-link ${projectModal.link_online ? '' : 'disabled'} website`}>
                        <i class="fa-solid fa-link"></i>
                    </a>
                    <a href={projectModal.link_github} className='p-link github'>
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a onClick={() => { handleProjectsClick() }} className='p-link close'>
                        <i class="fa-solid fa-x"></i>
                    </a>
                </div>
            </div>
            <h1 className='title'>{t('portfolio.title')}</h1>
            <div className="cards">
                {t("portfolio.projects", { returnObjects: true }).map((item, index) => (
                    <div onClick={() => { handleProjectsClick(index) }} className="card" key={item.name}>
                        <div className='cover'>
                            <img src={`/img/${item.archive}.png`} alt="" />
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