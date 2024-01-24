import React from 'react';
import { useTranslation } from 'react-i18next';
import './Portfolio.css';

function Portfolio() {
    
    const { t } = useTranslation();

    return (
        <>
            <h1>{t('projects.title')}</h1>
        </>
    )
}

export default Portfolio