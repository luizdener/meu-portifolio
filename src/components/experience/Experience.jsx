import SectionTitle from "../sectionTitle/sectionTitle"
import { DiCss3, DiHtml5, DiJsBadge, DiNodejs, DiPython, DiReact } from "react-icons/di"

import './experience.scss'

const Experience = () => {
    return(
        <div class="experience">
            <SectionTitle text="Experience"/>
            <p>As a <strong>Fullstack Developer</strong> i build applications using some of today's leading technologies such as <strong>React</strong> and <strong>Node Js</strong>!</p>
            <div className="tecnologies">
                <DiHtml5 className="icon-html"/>
                <DiCss3 className="icon-css"/>
                <DiJsBadge className="icon-js"/>
                <DiReact className="icon-react"/>
                <DiNodejs className="icon-node"/>
                <DiPython className="icon-python"/>
            </div>
            <a href=".\src\components\experience\pag-projetos\projetos.html" target="_top" className="btn-projects">See my projects!</a>
        </div>
    )
}

export default Experience