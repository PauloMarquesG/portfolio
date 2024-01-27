import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Skills.css';

function Skills() {

    const { t } = useTranslation();

    const [accordionActive, setAccordionActive] = useState();
    const handleCliqueAccordion = (index) => {
        setAccordionActive((indiceAnterior) => (indiceAnterior === index ? null : index));
    };

    const [modal, setModal] = useState(false);
    const [textModal, setTextModal] = useState('');
    const handlemodal = (e) => {
        setTextModal(e)
        setModal(!modal);
    }

    return (
        <section id='skills' className='skills'>
            <div className={`modal ${modal ? 'active' : ''}`} onClick={() => { setModal(!modal) }}>
                <div className='dialog'>
                    <p>{textModal}</p>
                </div>
            </div>
            <h1 className='title'>{t('skills.title')}</h1>
            <div className='skills-content'>
                {t("skills.accordion", { returnObjects: true }).map((accordion, index) => (
                    <div key={index} className="accordion-item">
                        <div className="accordion-header" onClick={() => handleCliqueAccordion(index)}>
                            <h2>{accordion.value}</h2>
                            <i className={`icon fa-solid ${accordionActive === index ? 'fa-xmark' : 'fa-plus'}`}></i>
                        </div>
                        <div className={`accordion-content ${accordionActive === index ? 'active' : ''}`}>
                            {(accordion[accordion.id]).map((item, innerIndex) => (
                                <i
                                    key={innerIndex}
                                    onClick={() => { handlemodal(accordion[accordion.id][innerIndex][item.id]) }}
                                    className={`devicon-${item.id}-plain colored`}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills