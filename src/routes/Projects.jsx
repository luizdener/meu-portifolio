import React from 'react'

import '../styles/projects.scss'

import Projeto from '../components/projeto/Projeto'

function Projects() {
  return (
    <div className='projects'>
        <h1>Projects</h1>
            <div className="projects-container">
                <Projeto name={"Cordel"}/>
                <Projeto name={"Chupau"}/>
            </div>

            <a className='home-button' href="/meu-portifolio">Home</a>
    </div>
  )
}

export default Projects