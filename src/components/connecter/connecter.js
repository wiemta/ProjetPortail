import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from "axios";

import NavBar from '../navbar/navbar';
import './assets/css/main.css';


class connecter extends Component {

  state={}

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      email: this.email,
      password: this.password,

    };


    axios.post('http://localhost:8000/api/login', data).
      then(res => {
        console.log(res)
        this.setState({
          LoggedIn: true
        });
      })
      .catch(err => {
        console.log(err)
        alert('verifierz les donnees') ;


      });


  };

  render() {
    if(this.state.LoggedIn)
    {
     return <Redirect to={'/dash2'}/>;
    }
   
 
  
    return (
      <div>
        <NavBar />
        <br /><br />
        <div className="wrapper fadeInDown">
          <br /><br /><br />
          <div id="formContent">
            {/* Tabs Titles */}
            {/* Icon */}
            {/* Login Form */}
            <form onSubmit={this.handleSubmit}>
              <br /><h3 >Bienvenue !</h3><br />
              <input type="text" id="email" className="fadeIn second" name="email" placeholder="Email" onChange={e => this.email = e.target.value} />
              <br />
              <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" onChange={e => this.password = e.target.value} />

              <br /><br />
              <input type="submit" className="fadeIn fourth" defaultValue="Log In" value="Se connecter" >
              </input>
            </form>
            {/* Remind Passowrd */}
            <div id="formFooter">
              <a href="/inscrire" className="forgot">vous n'avez pas de compte?</a>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default connecter;
