import SectionTitle from '../sectionTitle/sectionTitle'

import './infos.scss'

const Infos = () => {
    return (
        <div class="infos">
            <SectionTitle text="Languages"/>
            <div className="languages-info">
                <span>PT-BR - Native Speaker</span>
                <span>EN - Technician</span>
            </div>

            <SectionTitle text="Education"/>
            <div class="education-info">
                <span>Software Engineering - University North of Paraná</span>
            </div>
        </div>
    )
}

export default Infos