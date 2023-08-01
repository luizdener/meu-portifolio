import SectionTitle from "../sectionTitle/sectionTitle"
import { DiCss3, DiHtml5, DiJsBadge, DiNodejs, DiPython, DiReact } from "react-icons/di"

import './experience.scss'

const Experience = () => {
    return(
        <div class="experience">
            <SectionTitle text="Experience"/>
            <p>Desenvolvedor FullStack com experiência em React. Graduando Engenharia de Software na Universidade Norte do Paraná (UNOPAR)</p>
            <div className="tecnologies">
                <DiHtml5 className="icon-html"/>
                <DiCss3 className="icon-css"/>
                <DiJsBadge className="icon-js"/>
                <DiReact className="icon-react"/>
                <DiNodejs className="icon-node"/>
                <DiPython className="icon-python"/>
            </div>
            <a href="#" className="btn-projects">Projects</a>
        </div>
    )
}

export default Experience