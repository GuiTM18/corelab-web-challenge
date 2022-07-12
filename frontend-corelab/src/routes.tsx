import React from 'react';
import {Switch, Route} from 'react-router-dom'
 
import Cars from './pages/Vehicles';
import Home from './pages/Home'
import Adicionar from './pages/Adicionar'
import Filtro from './pages/Filtro'
import Anuncio from './pages/Anuncio'
 
const Routes: React.FC = () => {
    return(
        <Switch>
            
            <Route path="/" exact component={Home} />
            <Route path="/adicionar" exact component={Adicionar} />
            <Route path="/adicionar/:id" exact component={Adicionar} />
            <Route path="/exibir" exact component={Cars} />
            <Route path="/filtro" exact component={Filtro} />
            <Route path="/anuncio" exact component={Anuncio} />
           
        </Switch>
    );
}
 
export default Routes;