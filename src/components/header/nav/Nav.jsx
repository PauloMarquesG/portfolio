import React from 'react';
import { useTranslation } from 'react-i18next';
import './Nav.css';

function Nav() {

    const { t } = useTranslation();

    return (
        <div >
            <ul className='nav justify-content-end'>
                <li className='nav-item'>
                    <a className='nav-link' href="#">{t("nav.about")}</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">{t("nav.skills")}</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">{t("nav.projects")}</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">{t("nav.contact")}</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav