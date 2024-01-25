import React from 'react';
import { useTranslation } from 'react-i18next';
import useToggleTheme from '../../hooks/ThemeHook';
import './Header.css';

function Header() {

    const { toggleTheme, theme } = useToggleTheme();

    const { t } = useTranslation();

    const handleHamburger = () => {
        const nav = document.querySelector('.nav');
        nav.classList.toggle('active');
    }

    return (
        <header className='header'>
            <nav className='nav'>
                <button className={`toggleTheme ${theme === 'dark' ? 'dark' : ''}`} onClick={toggleTheme}>
                    {theme === 'dark' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
                </button>
                <h1>{t("header.title")}</h1>
                <button onClick={handleHamburger} className='hamburger'></button>
                <ul className='nav-list'>
                    <li><a className='nav-link' href="#">{t("header.nav.home")}</a></li>
                    <li><a className='nav-link' href="#">{t("header.nav.about")}</a></li>
                    <li><a className='nav-link' href="#">{t("header.nav.skills")}</a></li>
                    <li><a className='nav-link' href="#">{t("header.nav.projects")}</a></li>
                </ul>

            </nav>
        </header>
    )
}

export default Header