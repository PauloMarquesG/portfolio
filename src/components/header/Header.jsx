import React from 'react';
import { useTranslation } from 'react-i18next';
import useToggleTheme from '../../hooks/ThemeHook';
import './Header.css';

function Header() {

    const { toggleTheme, theme } = useToggleTheme();

    const { t, i18n: { changeLanguage, language } } = useTranslation();

    const handleHamburger = () => {
        const nav = document.querySelector('.nav');
        nav.classList.toggle('active');
    }

    return (
        <header className='header'>
            <nav className='nav'>
                <button className={`toggleTheme ${theme === 'dark' ? 'dark' : ''}`} onClick={toggleTheme}>
                    {theme === 'dark' ? <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun"></i>}
                </button>
                <div className='temporario'>
                    <button type="button" onClick={() => { changeLanguage('pt') }} disabled={language === 'pt'}>Portuguese</button>
                    <button type="button" onClick={() => { changeLanguage('en') }} disabled={language === 'en'}>English</button>
                </div>
                <h1>{t("header.title")}</h1>
                <button onClick={handleHamburger} className='hamburger'></button>
                <ul className='nav-list'>
                    <li><a className='nav-link' href="#">{t("header.nav.about")}</a></li>
                    <li><a className='nav-link' href="#">{t("header.nav.skills")}</a></li>
                    <li><a className='nav-link' href="#">{t("header.nav.projects")}</a></li>
                    <li><a className='nav-link' href="#">{t("header.nav.contact")}</a></li>
                </ul>

            </nav>
        </header>
    )
}

export default Header