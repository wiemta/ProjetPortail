import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/img/favicon.png';
import './assets/img/apple-touch-icon.png';

import './assets/vendor/animate.css/animate.min.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/swiper/swiper-bundle.min.css';

class NavBar extends Component {
    render() {
        return (

            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto"><a href="/" style={{ fontSize: '25px' }}>EDUCINFO</a></h1>
                    {/* Uncomment below if you prefer to use an image logo */}
                    {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                        <ul></ul>
                        <li><Link to='/acceuil'><div className="active" >Acceuil</div></Link></li>
                        <li><Link to='/cours'><div  >Cours</div></Link></li>
                        <li><Link to='/formateur'><div  >Formateur</div></Link></li>
                        <li><Link to='/propos'><div  >Apropos</div></Link></li>
                        <li><Link to='/contact'><div  >Contact</div></Link></li>


                        </ul></nav>{/* .navbar */}
                    <Link to='/connecter'><div className="get-started-btn">Se connecter</div></Link>
                    

                </div>
            </header>
        );
    }
}
    export default NavBar;