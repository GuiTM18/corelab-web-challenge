import React, { useState, ChangeEvent, useEffect } from 'react';
import './index.css'
import api from '../../services/api'
import { useHistory, useParams } from 'react-router-dom';
import Arrow from '../../components/Arrow'

interface ICar{
        
    nome: string;
    marca: string;
    cor: string;
    ano: number;
    preco: number;
    description: string;
    
}

const Adicionar: React.FC = () => {

    const history = useHistory()
    const { id } = useParams<{ id: string }>()


    const [model, setModel] = useState<ICar>({
       
        nome: '',
        marca: '',
        cor: '',
        ano: 0,
        preco: 0,
        description: '',
       
    })

    useEffect(() => {
        console.log(id)
        if (id != undefined) {
            findTask(id)
        }
    }, [id])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }
 
    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
 
        if (id != undefined) {
            const response = await api.put(`/Cars/${id}`, model)
        }
        else{
            const response = await api.post('/Cars', model)
        }
        back()
        
    }


    function back(){
        history.goBack()
    }

    function newAds(){
        history.push('/anuncio')
    }

    async function findTask(id: string){
        const response = await api.get(`Cars/${id}`)
        console.log(response)
        setModel({
            nome: response.data.nome,
            marca: response.data.marca,
            ano: response.data.ano,
            cor: response.data.cor,
            preco: response.data.preco,
            description: response.data.description
        })
    }


    return(
        
        <div  >
            <Arrow/>
        <form id='area' onSubmit={onSubmit}>
           <h3>Nome:</h3>
           <input type="text" id='input'
                            name="nome"
                            value={model.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/> 

           <h3>Marca:</h3> 
           <input type="text" id='input'  
                            name="marca"
                            value={model.marca}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>

           <h3>Cor:</h3> 
           <input type="text" id='input'
                            name="cor"
                            value={model.cor}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>

           <h3>Ano:</h3> 
           <input type="text" id='inputA'
                            name="ano"
                            value={model.ano}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>

           <h3 id='HA'>Preço:</h3>
           <input type="text" id='inputB'
                            name="preco"
                            value={model.preco}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>

           <h3 id='HB'>Descrição:</h3> 
           <input type="text" id='desc'
                            name="description"
                            value={model.description}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/> 

           <button type='submit' >SALVAR</button>
           </form>
        </div>
    )
}

export default Adicionar