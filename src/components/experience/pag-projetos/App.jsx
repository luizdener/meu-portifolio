import Projeto from "./components/projeto/projeto";

import "./style.scss"

function App () {
    return ( 
        <div id="App">
            <h1>Projects</h1>
            <div className="projects">
                <Projeto name={"Cordel"}/>
                <Projeto name={"Chupau"}/>
            </div>
            <a className="home" href="../../../../index.html" target="_self">HOME</a>
        </div>
    );
}

export default App