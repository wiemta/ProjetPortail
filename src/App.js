import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/acceuil/acceuil';
import Cours from './components/acceuil/cours';
import prop from './components/acceuil/propos';
import cont from './components/acceuil/contact';

import Formateur from './components/acceuil/formateur';

import connecter from './components/connecter/connecter';
import nav from './components/navbar/navbar';
import foot from './components/navbar/footer';

import quiz from './components/quiz/quiz';
import regle from './components/quiz/regle' ;
import question from './components/quiz/question' ;





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

        <Route  path='/connecter' component={connecter}/>
        <Route  path='/navbar' component={nav}/>
        <Route  path='/footer' component={foot}/>

        <Route  path='/regle' component={regle}/>
        <Route  path='/Quiz' component={quiz}/>
        <Route  path='/question' component={question}/>





      </switch>
    </Router>
    </div>
  );
}
}
export default App;
