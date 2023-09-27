import '../styles/projects.scss'

import {Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Projeto from '../components/projeto/Projeto'
import { useEffect, useState } from 'react'

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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
  })

  return (
    <div className='projects'>
        <h1>Projects</h1>
            <div className="projects-container">
                <Swiper 
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={windowWidth >= 942 ? 2 : 1}
                navigation
                pagination={{clickable: true}}
                >
                  {projects.map((project) => 
                  <SwiperSlide>
                    <Projeto name={project.name} src={project.src} link={project.link} repository={project.repository} key={project.key}/>
                  </SwiperSlide>)}
                </Swiper>
            </div>
            <a className='home-button' href="/meu-portifolio">Home</a>
    </div>
  )
}

export default Projects