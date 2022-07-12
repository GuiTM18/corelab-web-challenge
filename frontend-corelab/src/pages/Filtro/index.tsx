import React from 'react'
import Arrow from '../../components/Arrow'
import { useHistory } from 'react-router-dom';


const Filtro: React.FC = () => {

    const history = useHistory()

    function newSearch(){
        history.push('/exibir')
      }

    return(
        <div>
            <Arrow/>
            <div id='area'> 

           <h3>Marca:</h3> 
           <input type="text" id='input'/>

           <h3>Cor:</h3> 
           <input type="text" id='input'/>

           <h3>Ano:</h3> 
           <input type="text" id='input'/>

           <h3>Preço mín.</h3> 
           <input type="text" id='inputA'
                            name="preçomax"
                            />

           <h3 id='HA'>Preço máx.:</h3>
           <input type="text" id='inputB'
                            name="precomin"
                            />


           <button onClick={newSearch}>SALVAR</button>

        </div>
        </div>
        
    )
}

export default Filtro