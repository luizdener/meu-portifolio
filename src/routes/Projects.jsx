import '../styles/projects.scss'

import Projeto from '../components/projeto/Projeto'

const projects = [
  {
    key: 0,
    name: "Formulário Mult Etapas",
    src: "src/images/formult.png",
    description: "",
    link: "https://luizdener.github.io/form-mult/",
    repository: "https://github.com/luizdener/form-mult"
  },
  {
  key: 1,
  name: "Shorts Sumary",
  src: "src/images/shortssumary.png",
  description: "",
  repository: "https://github.com/luizdener/shorts-summary"
  },
  {
  key: 2,
  name: "Costs",
  src: "src/images/costs.png",
  description: "",
  repository: "https://github.com/luizdener/coast"
  },
  {
    key: 3,
    name: "Principia Tech",
    src: "src/images/principiatech.png",
    description: "",
    link: "https://luizdener.github.io/principia-tech/",
  repository: "https://github.com/luizdener/principia-tech"
  },
  {
    key: 4,
  name: "Cordel Moderno",
  src: "src/images/cordelmoderno.png",
  description: "",
  link: "https://luizdener.github.io/projeto-cordel/",
  repository: "https://github.com/luizdener/projeto-cordel"
  },

]

function Projects() {
  return (
    <div className='projects'>
        <h1>Projects</h1>
            <div className="projects-container">
                  {projects.map((project) => <Projeto name={project.name} src={project.src} link={project.link} repository={project.repository} key={project.key}/>)}
            </div>

            <a className='home-button' href="/meu-portifolio">Home</a>
    </div>
  )
}

export default Projects