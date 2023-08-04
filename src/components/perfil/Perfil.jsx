import './perfil.scss'

const Perfil = () => {
    return (
        <div className="perfil">
            <div>
                <h3>Hi, my name is</h3>
                <h1>Luiz Dener!</h1>
                <h2>Welcome to my portfolio.</h2>
            </div>

            <img src="./dener.webp" alt="Luiz Dener"
            width={325}
            height={310}
             />
        </div>
    )
}

export default Perfil