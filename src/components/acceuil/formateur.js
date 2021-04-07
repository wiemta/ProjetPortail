import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/navbar';
import Footer from '../navbar/footer';

class Formateur extends Component {
  render() {
    return (


      <div>
        <NavBar />
        <br /><br />
        <br />

        <section id="trainers" class="trainers">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Formateurs</h2>
              <p>NOs Meilleur Formateurs</p>
            </div>
            <div className="row" data-aos="zoom-in" data-aos-delay="100">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img src="assets/img/trainers/rania.png" className="img-fluid" alt="" />
                  <div className="member-content">
                    <h4>Rania Ben Romdhane</h4>
                    <span>Symfony</span>
                    <p>
                     + Chef projet                </p>
                    <div className="social">
                      <a href=""><i class="bi bi-twitter"></i></a>
                      <a href=""><i class="bi bi-facebook"></i></a>
                      <a href=""><i class="bi bi-instagram"></i></a>
                      <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img src="assets/img/trainers/mar.png" class="img-fluid" alt="" />
                  <div className="member-content">
                    <h4>Mariem Bejaoui</h4>
                    <span>Reacts js</span>
                    <p>

                     + Gestionnaire de communauté                </p>
                    <div className="social">
                      <a href=""><i class="bi bi-twitter"></i></a>
                      <a href=""><i class="bi bi-facebook"></i></a>
                      <a href=""><i class="bi bi-instagram"></i></a>
                      <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img src="assets/img/trainers/wiem.jpg" className="img-fluid" alt="" />
                  <div className="member-content">
                    <h4>Wiem Taamali</h4>
                    <span>Angular</span>
                    <p>
                      + responsable marketing                </p>
                    <div className="social">
                      <a href=""><i class="bi bi-twitter"></i></a>
                      <a href=""><i class="bi bi-facebook"></i></a>
                      <a href=""><i class="bi bi-instagram"></i></a>
                      <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img src="assets/img/trainers/fer.png" className="img-fluid" alt="" />
                  <div className="member-content">
                    <h4>Feriel Chebil</h4>
                    <span>Laravel</span>
                    <p>
                      + Ressource humaine                </p>
                    <div className="social">
                      <a href=""><i class="bi bi-twitter"></i></a>
                      <a href=""><i class="bi bi-facebook"></i></a>
                      <a href=""><i class="bi bi-instagram"></i></a>
                      <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img src="assets/img/trainers/trainer-3.jpg" className="img-fluid" alt="" />
                  <div className="member-content">
                    <h4>Kais</h4>
                    <span>Java</span>
                    <p>
                      + Conception graphique                </p>
                    <div className="social">
                      <a href=""><i class="bi bi-twitter"></i></a>
                      <a href=""><i class="bi bi-facebook"></i></a>
                      <a href=""><i class="bi bi-instagram"></i></a>
                      <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <img src="assets/img/trainers/hh.png" className="img-fluid" alt="" />
                  <div className="member-content">
                    <h4>Ahmed Naceur</h4>
                    <span>Spring boot</span>
                    <p>
                      + Finance                </p>
                    <div className="social">
                      <a href=""><i class="bi bi-twitter"></i></a>
                      <a href=""><i class="bi bi-facebook"></i></a>
                      <a href=""><i class="bi bi-instagram"></i></a>
                      <a href=""><i class="bi bi-linkedin"></i></a>
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

export default Formateur;