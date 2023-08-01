import Perfil from './components/perfil/Perfil';
import Experience from './components/experience/Experience';
import Infos from './components/infos/Infos';
import SocialBtns from './components/social-btns/SocialBtns';

import './styles/globals.scss'
import './styles/home.scss'

function App() {
  return (
    <div id="portifolio">
      <Perfil />
      <Experience />
      <Infos/>
      <div className="buttons">
        <SocialBtns/>
        <a className="primary-button" href='mailto:ldenerjesus@gmail.com'>contact me</a>
      </div>
  </div>
  );
}

export default App;
