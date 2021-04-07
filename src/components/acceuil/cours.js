import React, { Component } from 'react';
import { Link } from 'react-router-dom' ;
import NavBar from '../navbar/navbar';
import Footer from '../navbar/footer';


class Cours extends Component {
    render() {
        return(
<div>
<NavBar/>
<br/><br/>
<br/>

<section id="popular-courses" className="courses">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Cours</h2>
          <p>Meilleur Cours</p>
        </div>

        <div className="row" data-aos="zoom-in" data-aos-delay="100">

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="course-item">
              <img src="assets/img/a.jpg" className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>HTML/CSS</h4>
                  <p className="price">270dt</p>
                </div>

                <h3><a href="course-details.html">Website Design</a></h3>
                <p>C'est un langage de programmation est une notation conventionnelle destinée
                 à formuler des algorithmes et produire des programmes informatiques qui 
                 les appliquent, mais aussi 
                un environnement de traduction censé rendre sa syntaxe compréhensible par la machine</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-1.jpg" class="img-fluid" alt=""/>
                    <span>Ahmed</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;50
                    &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;65
                  </div>
                </div>
              </div>
            </div>
          </div> 

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="course-item">
              <img src="assets/img/b.jpg" class="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Angular</h4>
                  <p className="price">280dt</p>
                </div>

            
                <p>Angular est un Framework open source écrit en JavaScript qui permet la création d’applications
                 Web et plus particulièrement de ce qu’on appelle des  « Single Page Applications »</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-2.jpg" className="img-fluid" alt=""/>
                    <span>Souha</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;35
                    &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;42
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="course-item">
              <img src="assets/img/f.png" class="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Spring boot</h4>
                  <p className="price">280dt</p>
                </div>

            
                <p>En informatique, Spring est un framework open source pour construire et définir l'infrastructure 
                d'une application Java, dont il facilite le développement et les tests.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-2.jpg" className="img-fluid" alt=""/>
                    <span>Souha</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;35
                    &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;42
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="course-item">
              <img src="assets/img/c.png" className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Laravel</h4>
                  <p className="price">210dt</p>
                </div>

            
                <p>Laravel est un framework web open-source écrit en PHP respectant le principe
                 modèle-vue-contrôleur et entièrement développé en programmation orientée objet.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-2.jpg" className="img-fluid" alt=""/>
                    <span>Souha</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;35
                    &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;42
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="course-item">
              <img src="assets/img/e.jpg" class="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Symfony</h4>
                  <p className="price">210dt</p>
                </div>

            
                <p>Symfony est un ensemble de composants PHP ainsi qu'un framework MVC
                 libre écrit en PHP. Il fournit des fonctionnalités modulables 
                et adaptables qui permettent de faciliter et d’accélérer le développement d'un site web.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-2.jpg" className="img-fluid" alt=""/>
                    <span>Souha</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;35
                    &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;42
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="course-item">
              <img src="assets/img/d.png" class="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>React js</h4>
                  <p className="price">210dt</p>
                </div>

              
                <p> Le but principal de cette bibliothèque est de faciliter la création 
                d'application web monopage, via la création de composants
                 dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-3.jpg" class="img-fluid" alt=""/>
                    <span>Emna</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;20
                    &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;85
                  </div>
                </div>
              </div>
            </div>
          </div> 

        </div>

      </div>
    </section>
    <Footer/>
    </div>
      );
    }
    }

    export default Cours;