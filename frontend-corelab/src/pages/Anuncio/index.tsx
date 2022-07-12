import React, { useState, useEffect } from 'react';
import './index.css'
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header'
import moment from 'moment';
import api from '../../services/api'

import search from './searchh.png'
import image from './image.png'
import imgedit from './image 3.png'
import x from './Box.png'
import heart from './Path.png'

interface ICar{

  id: number;
  nome: string;
  marca: string;
  cor: string;
  ano: number;
  preco: number;
  description: string;
  finished: boolean;
}

const Anuncio: React.FC = () => {


const [cars, setCars] = useState<ICar[]>([])
 
useEffect(() => {
    loadCars()
}, [])


async function loadCars() {
  const response = await api.get('/Cars')
  console.log(response);
  setCars(response.data)
}

function formatDate(date: Date){
  return moment(date).format('DD/MM/YYYY')
}


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
function editTask(id: number){
  history.push(`/adicionar/${id}`)
}


    return(
        <div>
          <Header />
          <div id="divBusca">
          
            <img id='foto'src={search} alt="Buscar..."/>
            <input type="text" id="txtBusca" placeholder="Buscar..."/>
            <img id='filter' onClick={newFilter} src={image} alt="filter" />
            <button id="btnAdc" onClick={newTask}>ADICIONAR</button>
            <button id="btnBusca" onClick={newSearch}>PROCURAR</button>
            
          </div>

          <table>
            <h2 id='pos'>Meus anúncios</h2>
              <tbody>
                  {
                      cars.map(car => (
                        <tr>
                          <p id='x'>X</p>
                          <img id='group'src={heart} />
                          <img id='edit'src={imgedit} onClick={() => editTask(car.id)}/>
                          

                          <td>{car.nome} {car.marca}</td> 
                          <br />

                          <td>Preço: {car.preco}</td>  
                          <br />
                          
                          <td>Cor: {car.cor}</td> 
                          <br />

                          <td>Ano: {car.ano}</td> 
                          
                          <td>Descrição: {car.description}</td>
                          
                        </tr>
                      ))
                   }
              </tbody>
          </table>

        </div>
    ) 
}
 
export default Anuncio;