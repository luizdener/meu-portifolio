import "./projeto.scss"

const Projeto = ({name, description, link, repository, src}) => {
    return (
        <div className="project-card">
            <h2>{name}</h2>
            <img src={src}/>
            <p>{description}</p>
            {link ?
            <a href={link} target="_blank">Click here to see the project!</a>
            :
            <></>}
            <a href={repository} target="_blank"> Click here to acess repository</a>
        </div>
    );
}

export default Projeto