import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from "axios";

import NavBar from '../navbar/navbar';
import './assets/css/main.css';



class connecter extends Component {

  render() {
    return (
      <div>
                <NavBar/>
                <br/><br/>
        <div className="wrapper fadeInDown">
<br/><br/><br/>
        <div id="formContent">
          {/* Tabs Titles */}
          {/* Icon */}
          {/* Login Form */}
          <form onSubmit={this.handleSubmit}>
          <br/><h3 >Bienvenue !</h3><br/>
            <input type="text" id="login" className="fadeIn second" name="username" placeholder="login" onChange={this.inputChange} />
            <br/>
            <input type="text" id="password" className="fadeIn third" name="password" placeholder="password" onChange={this.inputChange} />
            <br/><br/>
            <input type="submit" className="fadeIn fourth" defaultValue="Log In" value="Se connecter" />
          
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
