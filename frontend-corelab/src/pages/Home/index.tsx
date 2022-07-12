import React from 'react';
import './index.css'
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header'
import moment from 'moment';

import search from './searchh.png'
import image from './image.png'
import ads from './anuncio.png'
 
const Home: React.FC = () => {

    const history = useHistory()

  function newTask(){
    history.push('/adicionar')
}

function newFilter(){
  history.push('/filtro')
}
function newSearch(){
  history.push('/exibir')
}
function newAds(){
  history.push('/anuncio')
}

    return(
        <div>
          <Header />
          <div id="divBusca">
          
            <img id='foto'src={search} alt="Buscar..."/>
            <input type="text" id="txtBusca" placeholder="Buscar..."/>
            <img id='filter' onClick={newFilter} src={image} alt="filtros" />
            <img id='anuncio' onClick={newAds} src={ads} alt="Meus Anúncios" />
            <button id="btnAdc" onClick={newTask}>ADICIONAR</button>
            <button id="btnBusca" onClick={newSearch}>PROCURAR</button>
            
          </div>
        </div>
    ) 
}
 
export default Home;