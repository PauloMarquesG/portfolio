import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {

    const { t } = useTranslation();

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        document.getElementById("copyright").innerHTML = currentYear;
    }, []);

    return (
        <footer>
                <p>&#169; Paulo M. Gonçalves <span id='copyright'></span>. {t('footer.copyRight')}</p>
        </footer>
    )
}

export default Footer