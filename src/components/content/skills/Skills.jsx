import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Skills.css';

function Skills() {

    const { t } = useTranslation();

    const [accordionActive, setAccordionActive] = useState();
    const [modal, setModal] = useState(false);
    const [textModal, setTextModal] = useState('');

    const handleCliqueAccordion = (index) => {
        setAccordionActive((indiceAnterior) => (indiceAnterior === index ? null : index));
    };
    const handlemodal = (e) => {
        setTextModal(e)
        setModal(!modal);
    }

    return (
        <section id='skills' className='skills'>
            <div className={`modal ${modal ? 'active' : ''}`} onClick={() => {setModal(!modal)}}>
                <div className='dialog'>
                    <p>{t(`skills.${textModal}`)}</p>
                </div>
            </div>
            <h1>{t('skills.title')}</h1>
            <div className='skills-content'>
                <div className="accordion-item">
                    <div className="accordion-header" onClick={() => handleCliqueAccordion(0)}>
                        <h2>Front-End</h2>
                        <i className={`icon fa-solid ${accordionActive === 0 ? 'fa-xmark' : 'fa-plus'}`}></i>
                    </div>
                    <div className={`accordion-content ${accordionActive === 0 ? 'active' : ''}`}>
                        <i onClick={() => {handlemodal('front-end.react')}} class="devicon-react-original colored"></i>
                        <i onClick={() => {handlemodal('front-end.html5')}} class="devicon-html5-plain colored"></i>
                        <i onClick={() => {handlemodal('front-end.css3')}} class="devicon-css3-plain colored"></i>
                        <i onClick={() => {handlemodal('front-end.javascript')}} class="devicon-javascript-plain colored"></i>
                        <i onClick={() => {handlemodal('front-end.typescript')}} class="devicon-typescript-plain colored"></i>
                        <i onClick={() => {handlemodal('front-end.bootstrap')}} class="devicon-bootstrap-plain colored"></i>
                        <i onClick={() => {handlemodal('front-end.angular')}} class="devicon-angularjs-plain colored"></i>
                    </div>
                </div>
                <div className="accordion-item">
                    <div className="accordion-header" onClick={() => handleCliqueAccordion(1)}>
                        <h2>Back-End</h2>
                        <i className={`icon fa-solid ${accordionActive === 1 ? 'fa-xmark' : 'fa-plus'}`}></i>
                    </div>
                    <div className={`accordion-content ${accordionActive === 1 ? 'active' : ''}`}>
                        <i onClick={() => {handlemodal('back-end.java')}} class="devicon-java-plain colored"></i>
                        <i onClick={() => {handlemodal('back-end.spring')}} class="devicon-spring-plain colored"></i>
                        <i onClick={() => {handlemodal('back-end.mysql')}} class="devicon-mysql-plain colored"></i>
                        <i onClick={() => {handlemodal('back-end.php')}} class="devicon-php-plain colored"></i>
                        <i onClick={() => {handlemodal('back-end.cpp')}} class="devicon-cplusplus-plain colored"></i>
                    </div>
                </div>
                <div className="accordion-item">
                    <div className="accordion-header" onClick={() => handleCliqueAccordion(3)}>
                        <h2>Ferramentas</h2>
                        <i className={`icon fa-solid ${accordionActive === 3 ? 'fa-xmark' : 'fa-plus'}`}></i>
                    </div>
                    <div className={`accordion-content ${accordionActive === 3 ? 'active' : ''}`}>
                        <i onClick={() => {handlemodal('tools.intellij')}} class="devicon-intellij-plain colored"></i>
                        <i onClick={() => {handlemodal('tools.vscode')}} class="devicon-vscode-plain colored"></i>
                        <i onClick={() => {handlemodal('tools.git')}} class="devicon-git-plain colored"></i>
                        <i onClick={() => {handlemodal('tools.github')}} class="devicon-github-original"></i>
                        <i onClick={() => {handlemodal('tools.gitlab')}} class="devicon-gitlab-plain colored"></i>
                        <i onClick={() => {handlemodal('tools.confluence')}} class="devicon-confluence-original colored"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills