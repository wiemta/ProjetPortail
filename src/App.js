import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/acceuil/acceuil';
import Cours from './components/acceuil/cours';
import prop from './components/acceuil/propos';
import cont from './components/acceuil/contact';


import Formateur from './components/acceuil/formateur';

import inscrire from './components/connecter/inscrire';
import connecter from './components/connecter/connecter';
import nav from './components/navbar/navbar';
import foot from './components/navbar/footer';

import quiz from './components/quiz/quiz';
import regle from './components/quiz/regle' ;
import question from './components/quiz/question' ;


import dash from './components/dashboard/Dashboard' ;
import form1 from './components/formation/Formation' ;
import form2 from './components/formateur/Formateurs' ;
import cal from './components/candidat/Calender' ;
import can from './components/candidat/Candidats' ;



import dash2 from './components/dashboard2/Dashboard' ;
import liste from './components/liste/ListeFormation' ;
import profil from './components/profil/Profil' ;




import{BrowserRouter as Router,Route,Switch} from 'react-router-dom'


class App extends Component{
 render (){
  return (
    <div>
    <Router>
   
      <switch> 
        <Route exact path='/' component={Index}/>
        <Route  path='/acceuil' component={Index}/>
        <Route  path='/Cours' component={Cours}/>
        <Route  path='/Formateur' component={Formateur}/>
        <Route  path='/Propos' component={prop}/>
        <Route  path='/Contact' component={cont}/>
        <Route  path='/Question' component={question}/>

        <Route  path='/connecter' component={connecter}/>
        <Route  path='/inscrire' component={inscrire}/>

        <Route  path='/navbar' component={nav}/>
        <Route  path='/footer' component={foot}/>

        <Route  path='/regle' component={regle}/>
        <Route  path='/Quiz' component={quiz}/>

        <Route  path='/dash' component={dash}/>
        <Route  path='/form1' component={form1}/>
        <Route  path='/form2' component={form2}/>
        <Route  path='/calendrier' component={cal}/>
        <Route  path='/candidat' component={can}/>

        <Route  path='/dash2' component={dash2}/>
        <Route  path='/liste' component={liste}/>
        <Route  path='/profil' component={profil}/>






      </switch>
      
    </Router>
    </div>
  );
}
}
export default App;
