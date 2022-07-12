import React from 'react';
import './index.css'
import backleft from './backleft.png'
import { useHistory } from 'react-router-dom';


export default function Arrow() {

    const history = useHistory()

  function back(){
    history.goBack()
}
 return (
   <div>
        <img src={backleft} id='arrow' onClick={back}/>
   </div>
  );
}