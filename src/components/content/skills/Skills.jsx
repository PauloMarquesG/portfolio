import React from 'react';
import { useTranslation } from 'react-i18next';
import './Skills.css';

function Skills() {
    
    const { t } = useTranslation();

    return (
        <>
            <h1>{t('skills.title')}</h1>
        </>
    )
}

export default Skills