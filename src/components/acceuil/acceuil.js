import React, { Component } from 'react';
import { Link } from 'react-router-dom' ;
import NavBar from '../navbar/navbar';
import Footer from '../navbar/footer';

import './assets/img/favicon.png';
import './assets/img/apple-touch-icon.png';

import './assets/vendor/animate.css/animate.min.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/swiper/swiper-bundle.min.css';



class Index extends Component {
    render() {
        return(
            <div>
                <body>
<NavBar/>
      <section id="hero" className="d-flex justify-content-center align-items-center">
        <div className="container position-relative" data-aos="zoom-in" data-aos-delay={100}>
          <h1>Apprendre aujourd'hui, <br />Diriger demain</h1>
        
          <Link to='/quiz'><div className="btn-get-started">Testez-vous Maintenant</div></Link>

        </div>
      </section>
            <main id="main">
                <div>
     <section id="about" className="about">
            <div className="container" data-aos="fade-up">
      
              <div className="row">
              <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="assets/img/about.jpg" class="img-fluid" alt=""/>
          </div>
                <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                  <h3>Formation en ligne : Reservation et participation.</h3>
                  <p className="font-italic">
                                Notre plateforme planifie des sessions de
                                formations en fonction des demandes des candidats ainsi que 
                                leurs niveaux (selon des tests de niveaux), ils seront formés 
                                par des formateurs spécifiques de chaque domaine. 
                                 
                  </p>
                  <ul>
                    <li><i className="bi bi-check-circle"></i>D'abord Vous devez etres inscrit etre inscrit.</li>
                    <li><i className="bi bi-check-circle"></i>On doit connaitre votre niveau donc vous allez passer un petit test.</li>
                    <li><i className="bi bi-check-circle"></i> Vous recevez vos planning par vos formateurs</li>
                    <li><i className="bi bi-check-circle"></i> Puis vous pouvez commencer votre formations dans un groupe de meme niveau.</li>
                   <li><i className="bi bi-check-circle"></i>  A la fin de la session vous recevez une certificat de validation.</li>
      
                  </ul>
      
                </div>
              </div>
      
            </div>
          </section>

            <section id="why-us" className="why-us">
            <div className="container" data-aos="fade-up">
      
              <div className="row">
                <div className="col-lg-4 d-flex align-items-stretch">
                  <div className="content">
                    <h3>Pourquoi choisir EDUCINFO?</h3>
                    <p>
                                    La formation à distance consiste à vous aider pour 
                                    apprendre les principaux langages de programmation et les outils de développement.
                    </p>
                    <div className="text-center">
                    <Link to='/propos'><div className="more-btn" >Lire plus</div></Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                  <div className="icon-boxes d-flex flex-column justify-content-center">
                    <div className="row">
                      <div className="col-xl-4 d-flex align-items-stretch">
                        <div className="icon-box mt-4 mt-xl-0">
                          <i className="bx bx-receipt"></i>
                          <h4>flexible</h4>
                          <p>Vous pouvez préparer une certificat en 
                          restant chez vous, comme les horaires s’adaptent à votre emploi du temps.</p>
                        </div>
                      </div>
                      <div className="col-xl-4 d-flex align-items-stretch">
                        <div className="icon-box mt-4 mt-xl-0">
                          <i className="bx bx-cube-alt"></i>
                          <h4>Efficace</h4>
                          <p>Les nouvelles technologies aidant chaqu'un d'entre vous de rester
                            suivi minutieusement dans le cadre d’une formation en ligne</p>
                        </div>
                      </div>
                      <div className="col-xl-4 d-flex align-items-stretch">
                        <div className="icon-box mt-4 mt-xl-0">
                          <i className="bx bx-images"></i>
                          <h4>Adaptable</h4>
                          <p>Les concepteurs pédagogique des cours en 
                          ligne qui répondent à tous les besoins d'apprentissage et s’adaptent aux préférences individuelles</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      
            </div>
          </section>
      
 
</div>
            </main>
          <Footer/>
      </body>
            </div>
        );
    }
}

export default Index;