import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



class Index extends Component {
    render() {
        return(
            <div>
                <body>
<header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto"><a href="acceuil.html.twig">EDUCINFO</a></h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
            </ul></nav>{/* .navbar */}
          <a href="courses.html" className="get-started-btn">Se connecter</a>
          <a href="courses.html" className="get-started-btn">S'inscrire</a>
        </div>
      </header>
      
      <section id="hero" className="d-flex justify-content-center align-items-center">
        <div className="container position-relative" data-aos="zoom-in" data-aos-delay={100}>
          <h1>Apprendre aujourd'hui, <br />Diriger demain</h1>
          <h2>Notre plateforme vous aide a developper vos competences.</h2>
          <a href="courses.html" className="btn-get-started">Commencer</a>
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
                    <li><i className="bi bi-check-circle"></i> L'utilisateur doit etre inscrit.</li>
                    <li><i className="bi bi-check-circle"></i> Il reçoit son Planning par son formateur</li>
                    <li><i className="bi bi-check-circle"></i> il pourrait commencer sa formation dans un groupe de meme niveau.</li>
                   <li><i className="bi bi-check-circle"></i>  A la fin de la session il recoit sa certificat.</li>
      
                  </ul>
      
                </div>
              </div>
      
            </div>
          </section>

 <section id="counts" class="counts section-bg">
                <div class="container">

                    <div class="row counters">

                        <div className="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="1232" data-purecounter-duration="1" class="purecounter"></span>
                            <p>Candidats</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="64" data-purecounter-duration="1" class="purecounter"></span>
                            <p>Cours</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" class="purecounter"></span>
                            <p>Groupes</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>
                            <p>Formateur</p>
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
                      <a href="about.html" className="more-btn">Lire plus <i className="bx bx-chevron-right"></i></a>
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

  <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Formateurs</h2>
          <p>Nos formateurs competents</p>
        </div>
 </div>

    <section id="trainers" class="trainers">
      <div className="container" data-aos="fade-up">

        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src="assets/img/trainers/rania.png" className="img-fluid" alt=""/>
              <div className="member-content">
                <h4>Rania Ben Romdhane</h4>
                <span>Symfony</span>
                <p>
                  Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                </p>
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
              <img src="assets/img/trainers/trainer-2.jpg" class="img-fluid" alt=""/>
              <div className="member-content">
                <h4>Mariem Bejaoui</h4>
                <span>Reacts js</span>
                <p>
                  Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                </p>
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
              <img src="assets/img/trainers/trainer-2.jpg" className="img-fluid" alt=""/>
              <div className="member-content">
                <h4>Wiem Taamali</h4>
                <span>Angular</span>
                <p>
                  Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                </p>
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
              <img src="assets/img/trainers/trainer-3.jpg" className="img-fluid" alt=""/>
              <div className="member-content">
                <h4>Feriel Chebil</h4>
                <span>Laravel</span>
                <p>
                  Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                </p>
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
              <img src="assets/img/trainers/trainer-3.jpg" className="img-fluid" alt=""/>
              <div className="member-content">
                <h4>Ahlem</h4>
                <span>Spring boot</span>
                <p>
                  Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                </p>
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
              <img src="assets/img/trainers/trainer-3.jpg" className="img-fluid" alt=""/>
              <div className="member-content">
                <h4>Ahmed Naceur</h4>
                <span>Spring boot</span>
                <p>
                  Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                </p>
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

</div>
            </main>
            <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>EDUCINFO</h3>
                <p>
                  Tunis, <br />
                  centre Urbain, Bloc X ,3eme etage<br />
                  Tunisie<br /><br />
                  <strong>Phone:</strong> +216 00 11 22 33 44<br />
                  <strong>Email:</strong> edu-info@educinfo.tn.com<br />
                </p>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Liens</h4>
                <ul>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Acceuil</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">A propos</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Nos cours</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Nos formateurs</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Nos Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right" /> <a href="#">HTML/CSS</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Symfony</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">React js</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Laravel</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Spring boot</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Angular</a></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Suivez nous !</h4>
                <p />
                <form action method="post">
                  <input type="email" name="email" /><input type="submit" defaultValue="S'inscrire" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              © Copyright <strong><span>EDUCINFO</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/ */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
          </div>
        </div>
      </footer>
      </body>
            </div>
        );
    }
}

export default Index;