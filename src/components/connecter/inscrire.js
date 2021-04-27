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
                <NavBar />
                <br /><br />
                <div className="wrapper fadeInDown">
                    <br /><br /><br />
                    <div id="formContent">
                        {/* Tabs Titles */}
                        {/* Icon */}
                        {/* Login Form */}
                        <form onSubmit={this.handleSubmit}>
                            <br />
                            <h3 >Inscrivez-vous Maintenant !</h3>
                            <br />
                            <input type="text" id="login" className="fadeIn second" name="username" placeholder="Login" onChange={this.inputChange} />
                            <br />
                            <input type="text" id="password" className="fadeIn third" name="password" placeholder="Mot de passe" onChange={this.inputChange} />
                            <br />
                            <input type="text" id="email" className="fadeIn third" name="email" placeholder="Email" onChange={this.inputChange} />
                            <br/><br/>
                            <input type="date" className="date"  value="S'inscrire" />
                            <br /><br />
                            <input type="submit" className="fadeIn fourth" defaultValue="s'inscrire" value="S'inscrire" />
                            
                           
                        </form>
                        {/* Remind Passowrd */}
                        <div id="formFooter">
                            <a href="/connecter" className="forgot">vous avez deja de compte?</a>
                        </div>
                    </div>
                </div>
            </div >

        );

    }
}

export default connecter;
