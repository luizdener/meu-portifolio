import "./projeto.scss"

const Projeto = ({name, description, href}) => {
    return (
        <div className="project-container">
            <h2>{name}</h2>
            <p>{description}</p>
            <a href={href}>Click here to see the project!</a>
        </div>
    );
}

export default Projeto