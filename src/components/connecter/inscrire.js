import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from "axios";

import NavBar from '../navbar/navbar';
import './assets/css/main.css';



class connecter extends Component {
    state = {}
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            first_name: this.firstname,
            last_name: this.lastname,
            email: this.email,
            password: this.password,

        };
      
            axios.post('http://localhost:8000/api/register', data).
            then(res => {
                console.log(res)
                this.setState({
                    LoggedIn: true
                });
            })
            .catch(err => {
                console.log(err)
                alert('Veuillez verifier les donnees');

            });
        
      

    };


    render() {
        if (this.state.LoggedIn) {
            return <Redirect to={'/connecter'} />;
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
                            <br />
                            <h3 >Inscrivez-vous Maintenant !</h3>
                            <br />
                            <input type="text" id="first_name" className="fadeIn second" name="first_name" placeholder="first_name" onChange={e => this.firstname = e.target.value} />
                            <br />
                            <input type="text" id="last_name" className="fadeIn second" name="last_name" placeholder="last_name" onChange={e => this.lastname = e.target.value} />
                            <br />
                            <input type="password" id="password" className="fadeIn third" name="password" placeholder="Mot de passe" onChange={e => this.password = e.target.value} />
                            <br />
                            <input type="text" id="email" className="fadeIn third" name="email" placeholder="Email" onChange={e => this.email = e.target.value} />
                            <br />
                            <input type="date" className="date" value="S'inscrire" />
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
