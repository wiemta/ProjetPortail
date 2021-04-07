import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './style.css';
import  App from './question' ;
function regle()  {
   
        return (
            <div className="info_box activeInfo">
                <div className="info-title"><span>Quelques régles avant de commencer !</span></div>
                <div className="info-list">
                    <div className="info">1. Vous avez seulement <span>1 minute </span>pour répondre à toutes les questions.</div>
                    <div className="info">2. Vous pouvez choisir qu'une seule réponse.</div>
                    <div className="info">3. Vous ne pouvez plus répondre si le temps se termine.</div>
                    <div className="info">4. Il est impossible d'abondonner une fois que vous lancer le test.</div>
                    <div className="info">5. Vous aurez les points selon vos réponses correctes.</div>
                </div>
                <div className="buttons">
                <Link to='/'><button className="quit" >Sortir </button></Link>
                <Link to='/question'><button className="restart" >Continuer</button></Link>

                            </div>
            </div>
        );
    
}
export default regle;
