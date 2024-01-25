import React from 'react'
import './Content.css'
import About from './about/About.jsx'
import Contact from './contact/Contact.jsx'
import Portfolio from './portfolio/Portfolio.jsx'
import Presentation from './presentation/Presentation.jsx'
import Skills from './skills/Skills.jsx'

function Content() {
    return (
        <main>
            <Presentation></Presentation>
            <About></About>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </main>
    )
}

export default Content