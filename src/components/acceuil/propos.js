import React, { Component } from 'react';
import { Link } from 'react-router-dom' ;
import NavBar from '../navbar/navbar';
import Footer from '../navbar/footer';


class Propos extends Component {
    render() {
        return(
<div>
<NavBar/>
<br/><br/>
<br/>
<section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
              <img src="assets/img/about.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>« EDUCINFO » qui assure des formations en ligne avec l’ouverture des sessions contenant des programmes  (selon le besoin) avec l’obtension des certificats a la fin de la validation de niveau.</h3>
              <p className="font-italic">
              planifie des sessions de formations en fonction des demandes des candidats ainsi que leurs niveaux (selon des tests de niveaux), ils seront formés par des formateurs spécifiques de chaque domaine. La gestion de ces derniers se fait d’une manière classique, tout le monde devrait être inscrit pour accéder et bénéficier de cette formation.
Une fois qu’un utilisateur a été classé, il reçoit son plan d’étude,  les heurs de formations et le prix et il pourrait bien évidemment commencer sa formation et a la fin il recoit son certificat.

              </p>
            </div>
          </div>
        </div>
      </section>


    <Footer/>
    </div>
      );
    }
    }

    export default Propos;